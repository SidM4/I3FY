var attempt = 3;

function validate()

{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "eisj" && password == "eisj2022")
    {
        alert("Login Successful!");

        window.location="userprofile.html";
        return false
    }

    else
    {
    alert("Incorrect Password! Try Again.");

    if (attempt == 0)
    {
        documewnt.getElementById("username").disabled = true;
        documewnt.getElementById("password").disabled = true;
        documewnt.getElementById("submit").disabled = true;

        return false;
    }
    }
}