
function whosPaying(names) {
  var message = " ";
  var listLength = names.length;
  var randomNum = Math.random(); // get random number based on the list length
  var randomPersonToPayNum = Math.floor(randomNum * listLength);
  var randomPersonToPayName = names[randomPersonToPayNum]

  message = randomPersonToPayName + " is going to buy lunch today!";
  return message;
}

var numOfGuests = 0;
numOfGuests = prompt("Enter the number of guests: ");
guestList = [];
for (let i = 0; i < numOfGuests; i++) {
  guestList[i] = prompt("Enter the name of the " + (i+1) + " person: ");
}

alert ("The guests are: " + guestList);
var messageBack = whosPaying(guestList);
alert(messageBack);
console.log(messageBack);
