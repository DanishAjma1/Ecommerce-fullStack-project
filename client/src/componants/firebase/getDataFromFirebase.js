import { doc, getDoc } from "firebase/firestore";
import { db } from "./firbaseConfig.js";
import { getAuth } from "firebase/auth";

export const getDataFromFireStore = async (props) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    const fetchDoc = await getDoc(doc(db, "userInfo", user.uid));
    if (fetchDoc.exists()) {
      console.log("Document data:", fetchDoc.data());
    }
  } catch (err) {
    console.log(err.message);
  }
};
