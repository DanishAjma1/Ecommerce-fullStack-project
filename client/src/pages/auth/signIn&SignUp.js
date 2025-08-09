import { useState } from "react";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addDataToFireStore } from "../../componants/firebase/addDataToFireBase.js";
import { useAuth } from "../../contexts/authContext.js";
import { auth } from "../../componants/firebase/firbaseConfig.js";
export default function SignUpAndSignIn() {
  // const url = "http://localhost:5000";
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const [signUpUser, setSignUpUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeSignIn = (e) => {
    setSignInUser({ ...signInUser, [e.target.name]: e.target.value });
  };

  const handleChangeSignUp = (e) => {
    setSignUpUser({ ...signUpUser, [e.target.name]: e.target.value });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    await setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(
          auth,
          signInUser.email,
          signInUser.password
        )
          .then(() => {
            // alert("Sign in successfully");
            setIsSignInForm(false);
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message + " with error code of " + err.code);
          });
      })
      .catch((err) => {
        console.log(err.message + " with error code of " + err.code);
      });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (signUpUser.password === signUpUser.confirmPassword) {
      return createUserWithEmailAndPassword(
        auth,
        signUpUser.email,
        signUpUser.password
      )
        .then((userCredential) => {
          const currentUser = userCredential.user;
          addDataToFireStore({
            uid: currentUser.uid,
            email: currentUser.email,
            role: "user",
          });
          setIsSignInForm(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="flex justify-center py-10">
      {user === null ? (
        isSignInForm ? (
          <form
            onSubmit={handleSubmitSignIn}
            className="bg-white p-8 rounded-lg shadow-md w-1/2 flex flex-col gap-5 justify-center items-center"
          >
            <h2 className="text-3xl font-bold p-2">Sign In</h2>
            <input
              required
              type="email"
              placeholder="Email"
              name="email"
              className="px-5 py-1 border-2 rounded-md"
              onChange={handleChangeSignIn}
              value={signInUser.email}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="px-5 py-1 border-2 rounded-md"
              onChange={handleChangeSignIn}
              value={signInUser.password}
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md shadow-md text-lg hover:bg-blue-700 text-white"
            >
              Submit
            </button>
            <p
              className="text-blue-600 hover:cursor-pointer"
              onClick={() => setIsSignInForm(false)}
            >
              Register in? SignUp
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitSignUp}
            className="bg-white p-8 rounded-lg shadow-md w-1/2 flex flex-col gap-3 justify-center items-center"
          >
            <h2 className="text-3xl font-bold p-2">Sign Up</h2>
            <input
              required
              type="email"
              placeholder="Email"
              name="email"
              className="px-5 py-1 border-2 rounded-md"
              onChange={handleChangeSignUp}
              value={signUpUser.email}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="px-5 py-1 border-2 rounded-md"
              onChange={handleChangeSignUp}
              value={signUpUser.password}
            />

            <input
              type="password"
              placeholder="password"
              name="confirmPassword"
              className="px-5 py-1 border-2 rounded-md"
              onChange={handleChangeSignUp}
              value={signUpUser.confirmPassword}
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md shadow-md text-lg hover:bg-blue-700 text-white"
            >
              Submit
            </button>
            <p
              className="text-blue-600 hover:cursor-pointer"
              onClick={() => setIsSignInForm(true)}
            >
              Already have an accout? SignIn
            </p>
          </form>
        )
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-xl font-bold">
            Wanna Logout? just press the button politely..
          </h1>
          <button
            className="px-3 py-1 bg-red-500 text-white w-fit text-lg rounded-md shadow-md"
            onClick={(e) => {
              e.preventDefault();
              signOut(auth)
                .then(() => {
                  console.log("logged out");
                  setIsSignInForm(true);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
