
function myFunction() {
  var x = document.getElementById("activiteit");
  if (x.style.display !== "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

 document.getElementById("aantal").innerHTML +=
  " (1)";
  document.getElementById("btn").innerHTML = '<i class="fa fa-trash" style=" font-size:1.2rem; color: white; margin-right: 5px"></i> Zet uit mijn leeslijst';
};



   
   /* old function

     function myFunction() {
        var x = document.getElementById('activiteit');
        if (x.style.display !== 'none') {
          x.style.display = 'none';
        } 
        else {
          x.style.display = 'block';
        }
      }; */


