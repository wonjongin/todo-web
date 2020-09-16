import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";

function Panel(props) {
  return (
    <div>
      <h2>{props.data.title}</h2>
    </div>
  );
}
function ShowAll() {
  const [todo, setTodo] = useState([]);
  var db;
  var dbdata = [];
  var request = window.indexedDB.open("todoDB");
  request.onerror = function (event) {
    alert("Why didn't you allow my web app to use IndexedDB?!");
  };
  // request.onsuccess = function (event) {
  //   db = request.result;
  //   db.onerror = function (event) {
  //     // Generic error handler for all errors targeted at this database's
  //     // requests!
  //     alert("Database error: " + event.target.errorCode);
  //     db
  //       .transaction("todoDB")
  //       .objectStore("todo")
  //       .getAll().onsuccess = function (event) {
  //       setTodo(event.target.result);
  //       console.log("Show todo: " + event.target.result);
  //     };
  //   };
  // };
  request.onsuccess = function (event) {
    db = request.result; // IDBTransaction
    var transaction = db.transaction(["todo"], "readonly"); // IDBObjectStore
    var objectStore = transaction.objectStore("todo"); // IDBRequest
    var cursor = objectStore.openCursor();
    cursor.onsuccess = function (event) {
      // IDBCursorWithValue
      var cursor = event.target.result;
      if (cursor) {
        // {id: 1, name: "name"}
        var data = cursor.value;
        console.log(cursor.value);
        // console.log(data.toString());
        setTodo(data);
        dbdata.push(data);
        cursor.continue();
      } else {
        console.log("end");
      }
    };
  };
  return <div>{todo.title}</div>;
}
export default ShowAll;
