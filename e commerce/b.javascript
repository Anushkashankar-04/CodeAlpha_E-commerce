const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const toast = document.createElement("div");

        toast.innerHTML = "🛒 Product Added Successfully!";
        toast.className = "toast";

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 2000);

    });
});