import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function stateChanged() {
  const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user.email);
      } else {
        console.log("User is signed out");
      }
    });
    return unsubscribe;
}