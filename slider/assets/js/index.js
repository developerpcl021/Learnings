const slider = document.querySelector("[data-slider]");
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");
const autoplayInterval = 3000;

let autoplayTimer;

if (track) {
    prev.addEventListener("click", () => {
        next.removeAttribute("disabled");

        track.scrollTo({
            left: track.scrollLeft - track.firstElementChild.offsetWidth,
            behavior: "smooth"
        });
    });

    next.addEventListener("click", () => {
        prev.removeAttribute("disabled");

        track.scrollTo({
            left: track.scrollLeft + track.firstElementChild.offsetWidth,
            behavior: "smooth"
        });
    });

    track.addEventListener("scroll", () => {
        const trackScrollWidth = track.scrollWidth;
        const trackOuterWidth = track.clientWidth;

        prev.removeAttribute("disabled");
        next.removeAttribute("disabled");

        if (track.scrollLeft <= 0) {
            prev.setAttribute("disabled", "");
        }

        if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
            next.setAttribute("disabled", "");
        }
    });

    //  scroll to the next slide
    const scrollNext = () => {
        track.scrollTo({
            left: track.scrollLeft + track.firstElementChild.offsetWidth,
            behavior: "smooth"
        });
    };

    //  autoplay
    const startAutoplay = () => {
        autoplayTimer = setInterval(() => {
            scrollNext();

            if (track.scrollLeft === track.scrollWidth - track.clientWidth) {
                // If at the end of the track, scroll to the beginning
                track.scrollTo({ left: 0, behavior: "smooth" });
            }
        }, autoplayInterval);
    };

    //  stop autoplay
    const stopAutoplay = () => {
        clearInterval(autoplayTimer);
    };

    // Start autoplay when the page loads
    startAutoplay();

    // Pause autoplay when the user interacts with the slider
    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
}