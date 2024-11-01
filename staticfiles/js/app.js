function displayThankYouMessage() {
    const nameInput = document.getElementById("nameInput").value;
    const thankYouSection = document.getElementById("thankyou-section");
    const thankYouMessage = document.getElementById("thankyou-message");
  
    if (nameInput.trim() !== "") {
      thankYouMessage.textContent = `Thank you, ${nameInput}, for attending our event!`;
      document.getElementById("input-section").classList.add("hidden");
      thankYouSection.classList.remove("hidden");
  
      // Trigger fireworks
      triggerFireworks();
    } else {
      alert("Please enter your name.");
    }
  }
  
  function triggerFireworks() {
    // Make the fireworks container visible
    document.getElementById("fireworks-container").classList.remove("hidden");
    
    const fireworks = document.querySelectorAll(".firework");
    fireworks.forEach(firework => {
      firework.classList.add("animate-firework");
    });
  }

window.onload = function() {
  const fireworks = document.querySelectorAll(".firework");
  fireworks.forEach(firework => {
      firework.classList.add("animate-firework");
  });
};