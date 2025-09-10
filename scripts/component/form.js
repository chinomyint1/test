document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // show the message
    const message = document.getElementById("successMessage");
    message.style.display = "block";

    setTimeout(() => {
        message.style.display = "none";
    }, 3000);

    // reset form
    this.reset();
});
