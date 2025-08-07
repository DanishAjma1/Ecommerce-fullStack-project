import { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const actionCodeSettings = {
  url: 'https://localhost/verify',
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
};
export default function EmailToSignIn(){
    const [email,setEmail] = useState("");
    const auth = getAuth();
    const handleSubmit = (e)=>{
        e.preventDefault();
        sendSignInLinkToEmail(auth,email,actionCodeSettings).then(()=>{
            alert("Email sent to your email account");
            localStorage.setItem("email",email);
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    return(
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-1/2 flex flex-col gap-3 justify-center items-center">
            <h2 className="text-3xl font-bold p-2">Sign In</h2>
            <input type="text" placeholder="Email" className="px-5 py-1 border-2 rounded-md"  onChange={(e)=>setEmail(e.target.value)} value={email} />
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md shadow-md text-lg hover:bg-blue-700 text-white">Submit</button>
            </form>
        </div>
    )
}