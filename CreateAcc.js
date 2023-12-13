
// Function to add data to Firebase
function addUser() {
   var firebaseDatabaseURL='https://kazi-dc0fd-default-rtdb.firebaseio.com/';
var phoneNumber = document.getElementById('phone').value; // Replace this with the actual phone number
var password = document.getElementById('pass').value; // Replace this with the actual password
var username = document.getElementById('username').value; // Replace this with the actual username
var id = Math.floor(Math.random()*100000);
if(username != "" && password != "" && phoneNumber != ""){
    var newData = {
    id:id,
        phone: phoneNumber,
        pass: password,
        username: username
    };
    

    $.ajax({
        url: firebaseDatabaseURL + "users.json",
        type: "POST",
        data: JSON.stringify(newData),
        success: function(response) {
            
            document.getElementById('alertWrapper').style.display = 'flex';
           document.getElementById('alertWrapper').style.backgroundColor = 'green';
            document.getElementById("error").innerHTML="Data added successfully";
            
            window.location.assign('signin.html');
            // Perform actions after successfully adding data
        },
        error: function(error) {
            console.error("Error adding data:", error);
            document.getElementById('alertWrapper').style.display = 'flex';
            document.getElementById("error").innerHTML="Error Adding data";
            alert("err")
            // Handle error as needed
        }
    });
    }else{
    document.getElementById('alertWrapper').style.display = 'flex';
        
    }
}
// Usage example



function closeAlert() {
  document.getElementById('alertWrapper').style.display = 'none';
}
