function validateform() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var valid = true;

    if (name == null || name == "") {
        alert("Name cannot be empty!");
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address!");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.myform.reset(); // Clear the form after successful submission
    }
}