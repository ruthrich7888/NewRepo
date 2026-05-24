import React, { useEffect, useState } from "react";

import { Container, Table, Card, Button, Badge } from "react-bootstrap";
import toast from "react-hot-toast";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const AdminWithdrawals = () => {
  const [withdrawals, setWithdrawals] = useState([]);

  // FETCH WITHDRAWALS
  const fetchWithdrawals = async () => {
    const querySnapshot = await getDocs(collection(db, "withdrawals"));

    const withdrawalList = [];

    querySnapshot.forEach((docItem) => {
      withdrawalList.push({
        id: docItem.id,

        ...docItem.data(),
      });
    });

    setWithdrawals(withdrawalList);
  };

  useEffect(() => {
    fetchWithdrawals();
  }, []);

  // APPROVE WITHDRAWAL
  const approveWithdrawal = async (withdrawal) => {
    try {
      const userRef = doc(db, "users", withdrawal.userId);

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        toast.error("User not found");
        return;
      }

      const userData = userSnap.data();

      // CHECK BALANCE
      if (withdrawal.amount > (userData.walletBalance || 0)) {
        toast.error("Insufficient user balance");

        return;
      }

      // DEDUCT BALANCE
      await updateDoc(userRef, {
        walletBalance: userData.walletBalance - withdrawal.amount,
      });

      // UPDATE STATUS
      const withdrawalRef = doc(db, "withdrawals", withdrawal.id);

      await updateDoc(withdrawalRef, {
        status: "approved",
      });

      await createNotification({
        userId: withdrawal.userId,

        title: "Withdrawal Approved",

        message: `Your withdrawal of $${withdrawal.amount} has been approved.`,
      });

      toast.success("Withdrawal Approved");

      await sendEmail({
        to_name: withdrawal.email,

        to_email: withdrawal.email,

        message: `Your withdrawal request of $${withdrawal.amount} has been approved.`,
      });
      fetchWithdrawals();
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  // REJECT WITHDRAWAL
  const rejectWithdrawal = async (withdrawal) => {
    try {
      const withdrawalRef = doc(db, "withdrawals", withdrawal.id);

      await updateDoc(withdrawalRef, {
        status: "rejected",
      });

      toast.error("Withdrawal Rejected");

      fetchWithdrawals();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-5">
      <Card className="p-4">
        <h2 className="mb-4">Withdrawal Approval Panel</h2>

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Email</th>

              <th>Amount</th>

              <th>Method</th>

              <th>Details</th>

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {withdrawals.map((withdrawal) => (
              <tr key={withdrawal.id}>
                <td>{withdrawal.email}</td>

                <td>${withdrawal.amount}</td>

                <td>{withdrawal.method}</td>

                <td>{withdrawal.details}</td>

                <td>
                  <Badge
                    bg={
                      withdrawal.status === "approved"
                        ? "success"
                        : withdrawal.status === "rejected"
                          ? "danger"
                          : "warning"
                    }
                  >
                    {withdrawal.status}
                  </Badge>
                </td>

                <td>
                  {withdrawal.status === "pending" ? (
                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => approveWithdrawal(withdrawal)}
                      >
                        Approve
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => rejectWithdrawal(withdrawal)}
                      >
                        Reject
                      </Button>
                    </div>
                  ) : (
                    "Completed"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AdminWithdrawals;
