import { addDoc, collection } from "firebase/firestore";

import { db } from "../firebase";

export const createNotification = async ({ userId, title, message }) => {
  try {
    await addDoc(collection(db, "notifications"), {
      userId,

      title,

      message,

      read: false,

      createdAt: new Date(),
    });
  } catch (error) {
    console.log(error);
  }
};
