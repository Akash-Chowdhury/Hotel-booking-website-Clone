        var slideIndex = 0;
          carousel();
          function carousel() {
          var i;
          var x = document.getElementsByClassName("offerimg");
          for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > x.length) {slideIndex = 1}
          x[slideIndex-1].style.display = "block";
          setTimeout(carousel, 3000); // Change image every 3 seconds
          }


       function openForm() {
            document.getElementById("myForm").style.display = "block";
          }
          
        function closeForm() {
          document.getElementById("myForm").style.display = "none";
        }
        function opendetail() {
          document.getElementById("pop").style.display = "block";
        }
        
        function closedetail() {
          document.getElementById("pop").style.display = "none";
        }
        function openlogin() {
            document.getElementById("log").style.display = "block";
          }
          
          function closelogin() {
            document.getElementById("log").style.display = "none";
          }



          // function myFunction(x) {
          //   x.classList.toggle("change");
          // }


        function opennav() {
            document.getElementById("mynav").style.display = "block";
          }
        function closenav()
        {
          document.getElementById("mynav").style.display = "none";
        }
          