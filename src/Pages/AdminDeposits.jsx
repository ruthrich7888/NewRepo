import React, { useEffect, useState } from "react";

import { Container, Table, Card, Button, Badge } from "react-bootstrap";
import toast from "react-hot-toast";

import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  increment,
} from "firebase/firestore";

import { db } from "../firebase";
import { sendEmail } from "../utils/emailUtils";

const AdminDeposits = () => {
  const [deposits, setDeposits] = useState([]);

  // LOAD DEPOSITS
  const fetchDeposits = async () => {
    const querySnapshot = await getDocs(collection(db, "deposits"));

    const depositList = [];

    querySnapshot.forEach((docItem) => {
      depositList.push({
        id: docItem.id,

        ...docItem.data(),
      });
    });

    setDeposits(depositList);
  };

  useEffect(() => {
    fetchDeposits();
  }, []);

  // APPROVE DEPOSIT
  const approveDeposit = async (deposit) => {
    try {
      // 🚨 STEP 1: BLOCK DOUBLE APPROVAL (PUT IT HERE)
      if (deposit.status !== "pending") {
        toast.error("Already processed");
        return;
      }

      // UPDATE DEPOSIT STATUS
      const depositRef = doc(db, "deposits", deposit.id);

      await updateDoc(depositRef, {
        status: "approved",
      });
      await sendEmail({
        to_name: deposit.senderName || "Investor",

        to_email: deposit.email,

        message: `Your deposit of $${deposit.amount} has been approved and added to your wallet.`,
      });
      // GET USER
      const userRef = doc(db, "users", deposit.userId);

      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        await addDoc(collection(db, "transactions"), {
          userId: deposit.userId,

          email: deposit.email,

          type: "Deposit",

          amount: deposit.amount,

          status: "approved",

          createdAt: new Date(),
        });
      }

      toast.success("Deposit Approved");

      await addDoc(collection(db, "transactions"), {
        userId: withdrawal.userId,

        email: withdrawal.email,

        type: "Withdrawal",

        amount: withdrawal.amount,

        status: "approved",

        createdAt: new Date(),
      });

      fetchDeposits();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // REJECT DEPOSIT
  const rejectDeposit = async (deposit) => {
    try {
      const depositRef = doc(db, "deposits", deposit.id);

      await updateDoc(depositRef, {
        status: "rejected",
      });

      toast.error("Deposit Rejected");

      fetchDeposits();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-5">
      <Card className="p-4">
        <h2 className="mb-4">Deposit Approval Panel</h2>

        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Email</th>

              <th>Amount</th>

              <th>Method</th>

              <th>Sender</th>

              <th>Reference</th>

              <th>Status</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {deposits.map((deposit) => (
              <tr key={deposit.id}>
                <td>{deposit.email}</td>

                <td>${deposit.amount}</td>

                <td>{deposit.paymentMethod}</td>

                <td>{deposit.senderName}</td>

                <td>{deposit.transactionRef}</td>

                <td>
                  <Badge
                    bg={
                      deposit.status === "approved"
                        ? "success"
                        : deposit.status === "rejected"
                          ? "danger"
                          : "warning"
                    }
                  >
                    {deposit.status}
                  </Badge>
                </td>

                <td>
                  {deposit.status === "pending" ? (
                    <div className="d-flex gap-2">
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => approveDeposit(deposit)}
                      >
                        Approve
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => rejectDeposit(deposit)}
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

export default AdminDeposits;
