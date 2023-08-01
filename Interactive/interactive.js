document.addEventListener("DOMContentLoaded", function () {
    const greetingForm = document.getElementById("greetingForm");
    const nameInput = document.getElementById("nameInput");
    const greetingMessage = document.getElementById("greetingMessage");
  
    greetingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = nameInput.value.trim();
  
      if (name !== "") {
        greetingMessage.textContent = `Hello, ${name}! Have a great day.`;
        var buttons = document.getElementById("button");
        buttons.innerHTML = '<img src="inter.jpg" />';
      } else {
        greetingMessage.textContent = "Please enter your name.";
        imageContainer.innerHTML = "";
      }
    });
  });
