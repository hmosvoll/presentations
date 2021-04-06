(() => {
    const nextElement = document.querySelector("#next");
    const previousElement = document.querySelector("#previous");

    document.addEventListener("keydown", (event) => {
        if(nextElement && event.key === "ArrowRight"){
            nextElement.click();
        }
        if(previousElement && event.key === "ArrowLeft"){
            previousElement.click();
        }
    });

    const slidesElement = document.querySelector("#slides");
    const slideElements = slidesElement.querySelectorAll("section");
    let currentSlide = 0;

    nextElement.addEventListener("click", () => {
        currentSlide++;
        setSlide();
    });

    previousElement.addEventListener("click", () => {
        currentSlide--;
        setSlide();
    });

    function setSlide () {
        slidesElement.style.marginLeft = `-${ currentSlide * 100 }vw`;
    }

    hljs.highlightAll();
})();