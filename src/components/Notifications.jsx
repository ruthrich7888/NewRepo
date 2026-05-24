import React, { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { db, auth } from "../firebase";

import { Card, Badge } from "react-bootstrap";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    const user = auth.currentUser;

    if (!user) return;

    const querySnapshot = await getDocs(collection(db, "notifications"));

    const list = [];

    querySnapshot.forEach((docItem) => {
      const data = docItem.data();

      if (data.userId === user.uid) {
        list.push({
          id: docItem.id,

          ...data,
        });
      }
    });

    setNotifications(list.reverse());
  };

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, "notifications"),

      (snapshot) => {
        const list = [];

        snapshot.forEach((docItem) => {
          const data = docItem.data();

          if (data.userId === user.uid) {
            list.push({
              id: docItem.id,

              ...data,
            });
          }
        });

        setNotifications(list.reverse());
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <Card className="p-4 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Notifications</h4>

        <Badge bg="dark">{notifications.length}</Badge>
      </div>

      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        notifications.map((notification) => (
          <div key={notification.id} className="border rounded p-3 mb-3">
            <h6>{notification.title}</h6>

            <p className="mb-1">{notification.message}</p>

            <small className="text-muted">
              {notification.createdAt?.toDate?.()?.toLocaleString?.() || "N/A"}
            </small>
          </div>
        ))
      )}
    </Card>
  );
};

export default Notifications;
