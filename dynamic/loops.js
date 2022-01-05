document.write=function(s){
  var scripts = document.getElementsByTagName('script');
  var lastScript = scripts[scripts.length-1];
  lastScript.insertAdjacentHTML("beforebegin",s);
}

// create the array
names = new Array();
var i = 0;
var temp = 0;
var check = 0;

var newCardButton = document.getElementById("buttonCreate");
newCardButton.addEventListener("click",Create_Card);

var displayCardButton = document.getElementById("buttonDisplay");
displayCardButton.addEventListener("click",Show_Card);

var resetButton = document.getElementById("buttonReset");
resetButton.addEventListener("click",Erase_Cards); 

function printCard() {
  var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
  var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
  var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
  var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";
  var birthLine = "<strong>Birhdate: </strong>" + this.birthdate + "<hr>"; // added line for BirthDate
  
}

function Card(name,email,address,phone,birthdate) { // added birthdate
  this.name = name;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.birthdate = birthdate; // added birthdate
  this.printCard = printCard;
  
}

function Create_Card(){
  var new_name = prompt("Enter your Full Name");
  var new_email = prompt("Enter you Email");
  var new_street = prompt("Enter your Address");
  var new_phone = prompt("Enter your Phone Number");
  var start = prompt("Enter your Birthday");

  var new_card = new Card(new_name, new_email, new_street, new_phone, start);
  cards[i]=new_card;
  i++; 
}

function Show_Card(){
  for(index; temp<cards.length; index++){
    cards[index].printCard();
  }

}

function Erase_Cards(){
  location.reload();
}