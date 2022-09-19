import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Login = (props) => {
  const { show, closeModal } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const auth = getAuth(firebase.app());
      const res = await createUserWithEmailAndPassword(auth, email, password);
      closeModal();
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (
          err.code === "auth/weak-password" ||
          err.code === "auth/too-many-requests"
        ) {
          return `auth.${err.code.split("/")[1]}`;
        }
        console.error(err);
      }
    }
  };

  const signInEmailAndPassword = async (email, password) => {
    try {
      const auth = getAuth(firebase.app());
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (user) {
        closeModal();
      } else {
        return registerWithEmailAndPassword(email, password);
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (
          err.code === "auth/wrong-password" ||
          err.code === "auth/too-many-requests"
        ) {
          return `auth.${err.code.split("/")[1]}`;
        }
        if (err.code === "auth/user-not-found") {
          return registerWithEmailAndPassword(email, password);
        }
      }
    }
  };

  return (
    <Modal width="40rem" show={show} closeModal={closeModal}>
      <div
        className="bg-light rounded"
        style={{
          padding: "1rem",
        }}
      >
        <h1 className="text-center">Login</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            //firebase login with email and password
            await signInEmailAndPassword(email, password);
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Login;
