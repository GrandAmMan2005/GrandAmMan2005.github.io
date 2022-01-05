// define the functions
function printCard() {
    var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
    var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
    var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
    var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";
    var birthLine = "<strong>Birhdate: </strong>" + this.birthdate + "<hr>"; // added line for BirthDate
    document.write(nameLine, emailLine, addressLine, phoneLine, birthLine); // needed this for birhdate to show on screen
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

    new_name = document.getElementById("fullname").value;
    new_email = document.getElementById("email").value;
    new_street = document.getElementById("street").value;
    new_phone = document.getElementById("phone").value;
    start = document.getElementById("start").value;

    var new_card = new Card(new_name, new_email, new_street, new_phone, start);
    new_card.printCard(); 
 }
 
 // Create the objects
 var sue = new Card("Sue Suthers", "sue@suthers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876","January 5, 1984");
 var fred = new Card("Fred Fanboy", "fred@fanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-4444","March 19, 1999");              // added birthdates for examples
 var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344","December 9, 1934");
 
 // Now print them
 sue.printCard();
 fred.printCard();
 jimbo.printCard();
