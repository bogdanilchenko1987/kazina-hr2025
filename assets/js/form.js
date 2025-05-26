function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("contact-form").style.display = "none";
  document.getElementById("thank-you-message").style.display = "block";
  document.getElementById("contact-form").reset();

  setTimeout(() => {
    document.getElementById("thank-you-message").style.display = "none";
    document.getElementById("contact-form").style.display = "block";
  }, 3000);
}
