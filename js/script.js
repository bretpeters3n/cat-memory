// Template START //

// selectors
var theCards = $("#theCards");
var image01 = $("#card-img-01");
var image02 = $("#card-img-02");
var image03 = $("#card-img-03");
var image04 = $("#card-img-04");
var image05 = $("#card-img-05");
var image06 = $("#card-img-06");
var image07 = $("#card-img-07");
var image08 = $("#card-img-08");
var image09 = $("#card-img-09");
var image10 = $("#card-img-10");

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
  "https://api.thecatapi.com/v1/images/search?format=json&limit=10",
  requestOptions
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    //assign 2 cat URLs to a variable an then array
    var catArray = [];

    //Loop over the data to generate a table, each table row will have a link to the repo url
    for (var i = 0; i < data.length; i++) {
      // Do shit to each element in array
      var catURL = data[i].url;
      catArray.push(catURL);
    }

    console.log(catArray);

    // image01.remove();
    image01.attr("src", catArray[0]);
    image02.attr("src", catArray[1]);
    image03.attr("src", catArray[2]);
    image04.attr("src", catArray[3]);
    image05.attr("src", catArray[4]);
    image06.attr("src", catArray[5]);
    image07.attr("src", catArray[6]);
    image08.attr("src", catArray[7]);
    image09.attr("src", catArray[8]);
    image10.attr("src", catArray[9]);
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
