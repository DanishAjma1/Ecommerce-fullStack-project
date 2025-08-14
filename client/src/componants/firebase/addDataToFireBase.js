import { doc, setDoc } from "firebase/firestore";
import { db } from "./firbaseConfig.js";

export const addDataToFireStore = async (props) => {
  try {
    const { uid, email, role } = props;
    await setDoc(doc(db, "userInfo", uid), {
      email,
      role,
    });
  } catch (err) {
    console.log(err.message);
  }
};
