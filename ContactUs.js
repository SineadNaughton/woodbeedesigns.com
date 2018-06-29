/*AUTHOR TIMOTHY BERGIN*/

function validateForm() {
    var x = document.forms["CompanyForm"]["name"].value;
    if (x == ""||x==null) {
        alert("Name must be filled out");
        return false;
    } 

    var y = document.forms["CompanyForm"]["email"].value;	
    if (y == ""||y==null) {
        alert("Email must be filled out");
        return false;
    }
 
    var z = document.forms["CompanyForm"]["phone"].value;
    if (z == ""||z==null) {
        alert("Phone Number must be filled out");
        return false;
    }
}  


