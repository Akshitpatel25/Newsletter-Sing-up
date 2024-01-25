let validd = document.querySelector(".validd");


function validateEmail() {
    // Get the email input field value
    let emailInput = document.getElementById("email").value;
    // Regular expression for basic email format validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email input matches the regular expression
    if (emailRegex.test(emailInput)) {
      // alert("Valid email address: " + emailInput);
      // window.location.assign("thankyou.html");


      //trial 
      document.querySelector(".container").style.display = "flex";
      document.querySelector(".box").style.width = "400px";
      document.querySelector(".box").style.flexDirection = "column";
      document.querySelector(".box").style.padding = "50px";
      document.querySelector(".box").style.rowGap = "20px";
      document.querySelector(".logo_thankyou").style.display = "inline-block";
      document.querySelector(".box_textarea").style.width = "100%";
      document.querySelector(".box_h1").innerHTML = "Thanks for subscribing!";
      document.querySelector(".box_h1").style.fontSize = "40px";
      document.querySelector(".para").innerHTML = ("A confirmation email has been sent to '" + emailInput + "' . Please open it and click the button inside to confirm your subscription");
      document.querySelector(".box_img").style.display = "none";
      document.querySelector(".box_textarea").style.padding = "0px";
      document.querySelector(".list").style.display = "none";
      document.querySelector(".email").style.display = "none";
      document.querySelector(".buttonn").style.display = "none";
      document.querySelector(".buttonnn").style.display = "block";
      document.querySelector(".buttonnn").innerHTML = "Dismiss message";
      document.querySelector(".logo_thankyou").style.display = "block";
      document.querySelector("#email").style.fontSize = "100px";

    } else {
      validd.style.display="block"; 
    }
}
function clearinput() {
    validd.style.display="none";
}
function redirect() {
  window.location.reload();
}