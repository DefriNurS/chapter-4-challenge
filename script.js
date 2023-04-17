const handOption = document.querySelectorAll("img.hand-option")

handOption.forEach((image, index) => {
    image.addEventListener("click", () => {
        image.classList.add("active");

    });
});
