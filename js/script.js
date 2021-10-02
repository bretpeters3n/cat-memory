// Template START //

// selectors
var firstChildUl = document.getElementById("first-child-ul");

// global variables
var myName = "Bret";

// functions
function doSomethign() {}

// "x-api-key": "b69f0faf-4c12-4714-8998-743f7fb4546e",

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "b69f0faf-4c12-4714-8998-743f7fb4546e");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://api.thecatapi.com/v1/images/search?format=json&limit=5",
  requestOptions
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < data.length; i++) {
      // Do shit to each element in array
    }
  });

// Template END //

// - EXAMPLES - //

// Declaring a variable - this is an example
var studentName;

// Uses assignment operator(=) to assign a value
var studentName = "Abdul";

// To re-assign a variable, use only the variable's name
studentName = "Tonya";

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log("My name is " + studentName);
