import React, { useEffect } from "react";
import { db } from "./components/firebase";
import "./App.css";

function App() {
  useEffect(() => {
    db.collection("contacts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return <div className="App">Ok</div>;
}

export default App;
