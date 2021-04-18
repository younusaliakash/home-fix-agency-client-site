import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSingIn = () => {
  const googleSingInProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleSingInProvider)
    .then((result) => {
      let user = result.user;
      const { displayName, email, photoURL } = user;
      const loggedInUser = {
        isLoggedIn: true,
        displayName: displayName,
        email: email,
        photo: photoURL,
        successStatus: true,
      };
      return loggedInUser;
    })
    .catch((error) => {});
};
