import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { createNotification } from "../utils/notificationsUtils";
import { db } from "../firebase";
import { sendEmail } from "./emailUtils";
import toast from "react-hot-toast";

export const updateWeeklyProfits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "investments"));

    for (const document of querySnapshot.docs) {
      const investment = document.data();

      const investmentId = document.id;

      // SKIP COMPLETED
      if (investment.status === "completed") {
        continue;
      }

      const amount = Number(investment.amount) || 0;

      const roi = Number(investment.weeklyROI) || 0;

      const progress = Number(investment.progress) || 0;

      const duration = Number(investment.duration) || 0;

      const weeks = Math.ceil(duration / 7);

      // CHECK IF FINISHED
      if (progress >= weeks) {
        await updateDoc(doc(db, "investments", investmentId), {
          status: "completed",
        });

        continue;
      }

      // WEEKLY PROFIT
      const weeklyProfit = (amount * roi) / 100;

      // UPDATE USER
      const userRef = doc(db, "users", investment.userId);

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        continue;
      }

      const userData = userSnap.data();

      await updateDoc(userRef, {
        walletBalance: (userData.walletBalance || 0) + weeklyProfit,

        totalProfit: (userData.totalProfit || 0) + weeklyProfit,
      });
      await addDoc(collection(db, "transactions"), {
        userId: investment.userId,

        email: investment.email,

        type: "ROI Profit",

        amount: weeklyProfit,

        status: "paid",

        createdAt: new Date(),
      });
      await addDoc(collection(db, "transactions"), {
        userId: investment.userId,

        email: investment.email,

        type: "ROI Profit",

        amount: weeklyProfit,

        status: "paid",

        createdAt: new Date(),
      });

      // UPDATE INVESTMENT
      await updateDoc(doc(db, "investments", investmentId), {
        progress: progress + 1,
      });
    }

    toast.success("Weekly ROI processed successfully");

    await createNotification({
      userId: investment.userId,

      title: "Weekly ROI Paid",

      message: `You received $${weeklyProfit} ROI payout.`,
    });

    await sendEmail({
      to_name: investment.email,

      to_email: investment.email,

      message: `You received ROI payout of $${weeklyProfit}.`,
    });
  } catch (error) {
    console.log(error);

    toast.error(error.message);
  }
};

// import {
//   getDocs,
//   collection,
//   doc,
//   updateDoc,
//   increment,
// } from "firebase/firestore";
// import { db } from "../firebase";

// export const updateWeeklyProfits = async () => {
//   const snapshot = await getDocs(collection(db, "investments"));
//   const now = new Date();

//   snapshot.forEach(async (docItem) => {
//     const inv = docItem.data();

//     if (inv.status !== "active") return;

//     const lastUpdate = inv.lastUpdate?.toDate
//       ? inv.lastUpdate.toDate()
//       : inv.lastUpdate || inv.createdAt;

//     const diffDays = Math.floor((now - lastUpdate) / (1000 * 60 * 60 * 24));

//     // ❌ MUST BE AT LEAST 7 DAYS
//     if (diffDays < 7) return;

//     const investRef = doc(db, "investments", docItem.id);
//     const userRef = doc(db, "users", inv.userId);

//     // 🔥 ONLY 1 WEEK PER RUN (NO STACKING)
//     const profit =
//       ((Number(inv.amount) || 0) * (Number(inv.weeklyROI) || 0)) / 100;

//     const newProgress = (inv.progress || 0) + 1;
//     const totalWeeks = Math.ceil((inv.duration || 0) / 7);

//     // 💰 PAY USER ONCE
//     await updateDoc(userRef, {
//       walletBalance: increment(profit),
//     });

//     // 📊 UPDATE INVESTMENT ONCE
//     await updateDoc(investRef, {
//       progress: newProgress,
//       lastUpdate: now,
//       status: newProgress >= totalWeeks ? "completed" : "active",
//     });
//   });
// };
