document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    preloader.style.display = "none";
  });

  const toggleBtn = document.getElementById("toggleBtn");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


// Modal functionality
document.querySelectorAll(".btn-details").forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
  });
});

document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-close");
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// Modal Script
const ctaModal = document.getElementById("ctaModal");
const openBtn = document.getElementById("join-btn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ctaModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  ctaModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === ctaModal) {
    ctaModal.style.display = "none";
  }
});





document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_9w9jfa7", "template_ofekadc", this)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Thank you for signing up. A welcome email has been sent.");
    }, function(error) {
      console.log("FAILED...", error);
      alert("Oops! Email failed. Please try again.");
    });

  // You can also add your Firebase Firestore logic here to store the data.
/*
  const title = document.getElementById("title").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  try {
    await db.collection("cta_signups").add({
      title,
      firstName,
      lastName,
      email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Thank you for signing up! We'll keep you updated.");
    signupForm.reset();
    modal.style.display = "none";
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Something went wrong. Please try again.");
  }
    */
});










if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(reg => console.log("Service Worker registered", reg))
      .catch(err => console.error("Service Worker error", err));
  });
}




