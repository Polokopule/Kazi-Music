
 $(document).ready(function() {
        const firebaseDatabaseURL = 'https://kazi-dc0fd-default-rtdb.firebaseio.com/';

        // Function to handle login
        function login(phone, pass) {
            $.ajax({
                url: firebaseDatabaseURL + "users.json",
                type: "GET",
                success: function(data) {
                    // Handle data retrieval
                          $.each(data, function(key, value) {
                        if (value.phone === phone && value.pass=== pass) {
localStorage.setItem("id",value.id); localStorage.setItem("user"+value.id,value.username);
 localStorage.setItem("phone"+value.id,value.phone);
 localStorage.setItem("pass"+value.id,value.pass);
                            // If found, redirect or perform action
      console.log('Account  found');
      window.location.assign('home.html');                      
                            return false; // Exit the loop
                              }
                    });
                   
                },
                error: function(error) {
                    console.error("Error retrieving data:", error);
                    alert('Error retrieving data');
                }
            });
        }

        // Handle form submission
        $('#loginForm').submit(function(event) {
            event.preventDefault();
            const phone = $("#phone").val();
            const pass = $("#pass").val();
            login(phone, pass);
        });
    });
