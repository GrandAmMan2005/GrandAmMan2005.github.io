// initialize the counter and the array
var numbernames=0;
var names = new Array();

// Enter Key Event Listener


function SortNames() {
   // Get the name from the text field
   thename=document.theform.newname.value.toUpperCase();
   
   // Add the name to the array
   names[numbernames]=(numbernames + 1) + ". " + thename;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();
   document.theform.sorted.value=names.join("\n");
}

