import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0JrQipdkRqfUlhWpVrwGt0D4kUGMbYOQ",
    authDomain: "catch-of-the-day-8b01e.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-8b01e.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
