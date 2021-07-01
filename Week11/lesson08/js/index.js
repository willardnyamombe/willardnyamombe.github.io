window.addEventListener('load', () => {
    const hambutton =document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')},false);

        // to solve the mid sizing issue wuth responsive class on
        // window.onresize = () {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

        // you can also put lines 2,3 5,6 into your HTML under the body and inside the script tag

        // enables hamburger menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("hide");
}
});
