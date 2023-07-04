            function validateForm() {
                var x = document.forms["myForm"]["aadhar"].value;
                var y = document.forms["myForm"]["filename"].value;
                if (x == "" || x == null) {
                    alert("Name must be filled out");
                    return false;
                }
                else if (y == "" || y == null) {
                    alert("File Should be Uploaded");
                    return false;
                }
                else {
                    var regexp=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;

                    if(regexp.test(x)) {
                        window.alert("Valid Aadhar no.");
                        return true;
                    }
                    else{ 
                        window.alert("Invalid Aadhar no.");
                        return False;
                    }
                }
                
            }


            //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






            