function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}
AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmark = landmarks;
  this.season = season;
  this.note = notes;
}
Place.prototype.placesBeen = function() {
  // let finalResult = "Location:" + this.location + "Landmark: " + this.landmark + "Season:" + this.season + "Notes:" + this.note;
  // return finalResult;
  let resultArray =[];
  resultArray.push(this.location);
  resultArray.push(this.landmark);
  resultArray.push(this.season);
  resultArray.push(this.note);
  // alert(resultArray);
  return resultArray;
}
// let germany = new Place("Berlin", "Tavern", "Summer", "Despite it being summer, the air had a nice chill to it.");
let spain = new Place("Barcelona", "Gaudi", "Winter", "Paellas and tapas are delicious");
let mexico = new Place("Mexico City", "Torre Latinoamericana", "Autumn", "Jacarandas bloom, purple beautiful flowers");
let USA = new Place("Portland", "Willamette River", "Summer", "Diving in the river is a hot day");

$(document).ready(function() {
  $("#germany").click(function(event) {
    let germany = new Place("Berlin", "Tavern", "Summer", "Despite it being summer, the air had a nice chill to it.");
    let arrayValues = germany.placesBeen();
    const arrayKeys = Object.keys(germany);
    let k = 0;
    arrayValues.forEach(function (tempVariable) {
      console.log("in iteration " + k + " value of object is " + tempVariable + " value of key is " + arrayKeys[k])
      let textUl = "<li>" + arrayKeys[k] + ":" + tempVariable + "</li>";
      $("ul.germany").append(textUl);
      k++;
    });
    $(".germany").show();
    event.preventDefault;
  });  
  //   placesBeen(germany) + $("#germany").show()); 
  // $("#spain").click(placesBeen(spain));
  // $("#mexico").click(placesBeen(mexico) + $(".mexico").show());
  // $("#usa").click(placesBeen(USA));
  
    // $("#germany").click(placesBeen(spain));
    // $(".germany").text(germany.placesBeen());
});