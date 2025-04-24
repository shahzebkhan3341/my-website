function validatelogin() {
    const usernmae =
    document.getElementById('username'). value;
    const password =
    document.getElementById('password'). value;
    const errormsg =
    document.getElementById('error-msg');
    // dumy credentials
    if (username === "admin" && password=== "1234") {
        alert("login succeful !");
        return true; // allow form submission 
    } else {
        errormsg.textcontent ="invalid username or password.";
        return false; // prevent form submission 
    }
}
        