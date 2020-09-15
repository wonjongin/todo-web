import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

function Panel() {
  const db = useIndexedDB("todoDB");

  return <div>{JSON.stringify(db)}</div>;
}
function ShowAll() {
  const [todo, setTodo] = useState(null);
  var db;
  var request = window.indexedDB.open("todoDB");
  request.onerror = function (event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
  };
  request.onsuccess = function (event) {
    db = request.result;
    db.onerror = function (event) {
      // Generic error handler for all errors targeted at this database's
      // requests!
      alert("Database error: " + event.target.errorCode);
      db
        .transaction("todoDB")
        .objectStore("todo")
        .get("").onsuccess = function (event) {
        setTodo(event.target.result.title);
      };
    };
  };
  return <div>{todo}</div>;
}
export default ShowAll;
