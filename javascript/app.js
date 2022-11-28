
let typed;
let escrito;
typed = new Typed('.typed',{
    strings:['Projecte 1'],
    typeSpeed:100,
    startDelay:300,
    backSpeed:100,
    loop:true 
});
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 150,
        dist:2,
        shift:10,
        padding:5,
        numVisible:3,
        indicator:true,
        noWrap:true
        })
});
