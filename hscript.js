  var id = localStorage.getItem('id');
        if(id){
            
        var username = localStorage.getItem('user'+id);
         var myphone= localStorage.getItem('phone'+id);
          var mypass = localStorage.getItem('pass'+id);
        var user = document.getElementById('user');
        var phone = document.getElementById('phone');
        var pass= document.getElementById('pass');
        user.innerHTML=username;
        phone.value = myphone;
        pass.value = mypass;
        }else{
            window.location.assign('signup.html');
        }
        
        function logout(){
            window.location.assign('logout.html');
        }