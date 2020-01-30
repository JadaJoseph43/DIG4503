const Express= require("express");
const App = Express ();
const port = 80;
const Person = require("./Person.js");

let p = new Person("Jada", "green");

App.get("/", function(Request, Repsonse) {
  Repsone.json("error":"See?"});

});
App.post("/name", function(Request, Repsonse) {
  Response.send(p.getName());
});

App.listen(port, function() {
  console.log("Server running");
});
