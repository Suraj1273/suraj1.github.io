function eyetoggle(){
    
    let x = document.getElementById('password');
    let y = document.getElementById('eye');
    let z = document.getElementById('eye-off'); 


    if(x.type == 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";   
    }


}