// get get all images with data-src attributes
const imagesToload = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// first check to see if the Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
              }
        });
    }, imgOptions);

    // loop through each image and check status and load if necessary
    imagesToload.forEach((img) => {
        imgObserver.observe(img);
    });
}
else { // just load All images if not supported
    imagesToload.forEach((img) => {
        loadImages(img);
    });
}