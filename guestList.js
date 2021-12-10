function checkGuestList(list, name) {
  var message = " ";
  //console.log(list);
  //console.log(name);
  if (list.includes(name)) {
    message = name + " is on the Guest List.";
  }
  else {
    message = name + " is NOT on the Guest List.";
  }
  return message;
}

guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var nameToBeChecked = prompt ("Enter the guest name which you want to verify: ");
alert(checkGuestList(guestList, nameToBeChecked));
console.log(checkGuestList(guestList, nameToBeChecked));
//console.log(checkGuestList(guestList, "James"));