function getFormvalue() {
    // Get the form element
    const form = document.getElementById("form1");

    // // Get the values of the first and last name from the form
    var fName = form.fname.value;
    var lName = form.lname.value;

    // // Concatenate the first and last name
    var fullName = fName + " " + lName;

    // Display the result using an alert
    alert(fullName);
}