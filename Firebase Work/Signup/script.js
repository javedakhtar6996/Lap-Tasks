const onSignUp  = e => {
    let email = document.getElementById("email").value ;
    let password = document.getElementById("password").value ;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(solve => {
      swal("Good job!", "Account has been created succesfully!", "success")
      .then(sol => 
        window.location = "../Login/index.html");
    })    
    .catch(error => {
      swal("Error!", "Email Already exists!", "warning");
        
    });       
}
