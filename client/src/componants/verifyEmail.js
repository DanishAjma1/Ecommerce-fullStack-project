import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect } from "react";

export default function Verify(){
const auth = getAuth();
useEffect(() => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    const email = window.localStorage.getItem("email") || prompt("Enter your email");
    signInWithEmailLink(auth, email, window.location.href)
      .then(() => {
        window.localStorage.removeItem("email");
        alert("signedin");
      })
      .catch(console.error);
  }
}, []);
return(
    <div>signedin</div>
)
}