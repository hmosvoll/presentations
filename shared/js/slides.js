(() => {
    const nextElement = document.querySelector("#next");
    const previousElement = document.querySelector("#previous");
    const slidesElement = document.querySelector("#slides");
    const slideElements = slidesElement.querySelectorAll("section");
    const numberOfSlides = slideElements.length;
    let currentSlide = 1;

    document.addEventListener("keydown", (event) => {
        if(nextElement && event.key === "ArrowRight" && currentSlide < numberOfSlides){
            nextElement.click();
        }
        if(previousElement && event.key === "ArrowLeft" && currentSlide > 1){
            previousElement.click();
        }
    });

    // TODO: Make linkable
    nextElement.addEventListener("click", () => {
        currentSlide++;
        setSlide();
    });

    previousElement.addEventListener("click", () => {
        currentSlide--;
        setSlide();
    });

    function setSlide () {
        if(numberOfSlides === currentSlide){
            nextElement.classList.add("hide");
        }  else {
            nextElement.classList.remove("hide");
        }

        if(currentSlide === 1){
            previousElement.classList.add("hide");
        } else {
            previousElement.classList.remove("hide");
        }

        slidesElement.style.marginLeft = `-${ (currentSlide - 1) * 100 }vw`;
    }

    hljs.highlightAll();
})();