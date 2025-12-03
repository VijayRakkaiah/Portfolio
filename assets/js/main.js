/* main.js — Formspree contact form + smooth scrolling + UI helpers */

/* -----------------------------------------
   1) Set current year in footer
----------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/* -----------------------------------------
   2) Smooth scrolling for anchor links
----------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* -----------------------------------------
   3) Contact Form — Formspree submission
----------------------------------------- */

// 🔥 IMPORTANT: Replace this with YOUR Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeoyknpw";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (!form) return;

  form.action = FORMSPREE_ENDPOINT; // Inject endpoint automatically

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Sending…";
    status.style.color = "#0f4b7a";

    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.textContent = "Message sent successfully! I will get back to you soon.";
        status.style.color = "green";
        form.reset();
      } else {
        const data = await response.json();
        status.textContent =
          data.error || "Something went wrong. Please try again later.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "Network error — please try again later.";
      status.style.color = "red";
    }
  });
});
