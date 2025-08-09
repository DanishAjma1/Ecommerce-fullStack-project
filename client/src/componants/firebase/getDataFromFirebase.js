import { doc, getDoc } from "firebase/firestore";
import { db } from "./firbaseConfig.js";
import { getAuth } from "firebase/auth";

export const getDataFromFireStore = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    const fetchDoc = await getDoc(doc(db, "userInfo", user.uid));
    if (fetchDoc.exists()) {
      return fetchDoc.data();
    }
  } catch (err) {
    console.log(err.message);
  }
};
