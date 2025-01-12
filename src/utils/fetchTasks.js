// src/utils/fetchTasks.js
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const fetchTasks = (callback) => {
  const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
    const tasks = snapshot.docs.map((doc, index) => ({
      id: doc.id,
      serialNo: index + 1,
      ...doc.data(),
    }));
    callback(tasks);
  });

  return unsubscribe;
};
