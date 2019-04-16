const logout = e => {
    let btn = document.getElementById("btn");
    firebase.auth().signOut()
    .then(solve => {
      swal({
        title: "Are you sure?",
        text: "Do you want to logout!!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(sol => {
        if (sol) {
            window.location = "../Login/index.html";
          } else {
          return false;
        }
      });
      })
      .catch(function(error) {
        alert("Wrong");
      });
}