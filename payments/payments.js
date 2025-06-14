// ---------------------for payment method cards-------------------
document.getElementById("mtn-rwanda-uganda")
document.getElementById("airtel-rwanda-uganda")
document.getElementById("lumitel-burundi")
document.getElementById("ecocash-burndi")
document.getElementById("mpesa-kenya-tanzania")
// Set the third card as active by default
const cards = document.querySelectorAll(".card");
if (cards[2]) {
    cards[2].classList.add("active");
}

cards.forEach(card => {
    card.addEventListener("click", function() {
        const methods = document.querySelectorAll(".method");
        document.querySelectorAll(".card.active").forEach(card=> card.classList.remove("active"));
        card.classList.add("active");
        // Hide all methods
        methods.forEach(method => method.style.display = "none");
        // Show the corresponding method
        if (card === cards[0]) {
            methods[0].style.display = "block";
        } else if (card === cards[1]) {
            methods[1].style.display = "block";
        } else if (card === cards[2]) {
            methods[2].style.display = "block";
        } else if (card === cards[3]) {
            methods[3].style.display = "block";
        } else if (card === cards[4]){
            methods[4].style.display = "block";
            console.log("Method 4 is displayed");
        }else if (card === cards[5]) {
            methods[5].style.display = "block";
        } else if (card === cards[6]) {
            methods[6].style.display = "block";
        } else if (card === cards[7]) {
            methods[7].style.display = "block";
        } else if (card === cards[8]){
            methods[8].style.display = "block";
            console.log("Method 8 is displayed");
        }else if (card === cards[9]) {
            methods[9].style.display = "block";
        } else if (card === cards[10]){
            methods[10].style.display = "block";
            console.log("Method 10 is displayed");
        }else{
            console.error("No matching method found for the clicked card.");
        }
    });
});
// Show the method for the third card by default
const methods = document.querySelectorAll(".method");
if (methods[2]) {
    methods[2].style.display = "block";
}

// ---------------------for bank drag and drop file--------
function updateFileName(input) {
  const fileNameDisplay = document.getElementById("file-name");
  if (input.files.length > 0) {
    fileNameDisplay.textContent = "Selected file: " + input.files[0].name;
  } else {
    fileNameDisplay.textContent = "No file selected";
  }
}
// -----------------------getting values from clicked plan------------------
const planAmount = localStorage.getItem("planAmount") || (new URLSearchParams(window.location.search)).get("planAmount");
console.log("Plan Amount:", planAmount);

// Wait for DOMContentLoaded to ensure elements exist
window.addEventListener('DOMContentLoaded', function () {
  const storedPlanAmount = localStorage.getItem("planAmount"); // ✅ GET from storage

  const planAmountElem = document.getElementById("plan-Amaounts");
  const totalElem = document.getElementById("TotalplanAmount");

  if (planAmountElem) {
    planAmountElem.textContent = storedPlanAmount || '';
  } else {
    console.warn('Element with id "planAmount" not found.');
  }

  if (totalElem) {
    totalElem.textContent = storedPlanAmount || '';
  } else {
    console.warn('Element with id "TotalplanAmount" not found.');
  }
});
// --------------------------------------------setting the promo code-----------------
var succesAlert = document.querySelector(".success-alerts");
const promocodesBtn = document.querySelectorAll(".apply-promo-code")
promocodesBtn.forEach(button => {
  button.addEventListener('click', function() {
    // Find the closest .method section for this promo code button
    const methodSection = this.closest('.method');
    if (!methodSection) {
      console.warn('No .method section found for this promo code button.');
      return;
    }
    // Get the promo code input within this method section
    const promoInput = methodSection.querySelector("#promo-code");
    let promoCode = promoInput ? promoInput.value : '';
    console.log('Promo code entered:', promoCode);
    // Get the total element within this method section
    const totalElem = methodSection.querySelector('#TotalplanAmount') || document.getElementById('TotalplanAmount');
    let amount = totalElem ? parseFloat(totalElem.textContent.replace(/[^\d.]/g, '')) : NaN;
    if (promoCode === "YEZU2004" && !isNaN(amount)) {
      const discounted = (amount * 0.8).toFixed(2);
      // Show success alert
      if (succesAlert) {
        succesAlert.style.display = "flex";
        setTimeout(() => {
          succesAlert.classList.add0("active");
        }, 4000); // Hide after 3 seconds

      } else {
        console.warn('Success alert element not found.');
      }
      if (totalElem) totalElem.textContent = discounted;
      console.log("Promo code applied. Amount to pay after discount: " + discounted);
    }
  });
});
