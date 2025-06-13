const enjoyBtn = document.querySelectorAll(".continue-payment");
enjoyBtn.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent navigation
    // Find the closest card and get its value
    const card = this.closest(".card-1, .card-2, .card-3");
    if (card) {
      const value = card.querySelector(".value-container")?.textContent;
      console.log("Selected Plan Amount: " + value);
      localStorage.setItem("planAmount", value);
      window.location.href = "/payments/payment.html";
    } else {
      console.log("No card found for this button.");
    }
  });
});