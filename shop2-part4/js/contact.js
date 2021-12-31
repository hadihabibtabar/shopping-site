$("#contact-us-form").submit(function( event ) {

     event.preventDefault();
     const formData = new URLSearchParams(new FormData(this));


    fetch("http://localhost:3000/contact",
      {   method: 'POST',
          body : formData
      })
      .then((response) => response.json())
      .then(function(response) {
        console.log(response);
        if(response.success==true){
            document.getElementById("successMessage").style.display="block";
            document.getElementById("errorMessage").style.display="none";

        }
         else{
            document.getElementById("successMessage").style.display="none";
             document.getElementById("errorMessage").style.display="block";
             document.getElementById("errorMessage").innerHTML=response.error;
         }
        
      }).catch(function(text) {
          //text is the server's respons
      });
  });