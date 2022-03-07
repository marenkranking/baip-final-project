// INTERACTIVE FILM SECTION

let sections = gsap.utils.toArray(".film-panel");

console.log(sections);

gsap.to(sections, {
    xPercent: -100 * .6,
    ease: "none",
    scrollTrigger: {
        trigger: ".intro-section",
        pin: true,
        scrub: .1,
        // snap: 1/3,
        end: () => "+=" + document.querySelector(".intro-section").offsetWidth
    }
});

let introText = document.querySelector('.intro-text');
let isAnimating = false;
let currentSlide = 0;

function FadeIn(text) {
    if (isAnimating === false) {
        isAnimating = true;
        gsap.to('.intro-text', {
            duration: .5,
            opacity: 0,
        });
        setTimeout(function() {
            introText.innerHTML = text
        }, 500)
        gsap.to('.intro-text', {
            duration: .5,
            opacity: 1,
            delay: .5
        });
        setTimeout(function () {
            isAnimating = false
        }, 600);
    }
}

document.addEventListener('scroll', function(){
    let windowPageTop = document.querySelector('.scroll-tester').getBoundingClientRect().top;

    if (windowPageTop <= -2228 && currentSlide != 0) {
        console.log('-2228');
        let newText = '<p>“Call Me By Your Name” and “La La Land” were also shot entirely on film.</p><p>Social media influencers and celebrities have also played a role in increasing the demand for film photography. Kendall Jenner, for example, shot in film at the <a href="https://www.vogue.com/slideshow/kendall-jenner-met-gala-2021-photos" target="_blank">2019 Met Gala</a> and discussed her new Contax T2 film camera on <a href="https://www.thelily.com/how-kendall-jenner-is-bringing-back-film-and-ruining-it-for-some/" target="_blank">“The Tonight Show”</a> last year.</p>';
        FadeIn(newText);
        console.log(currentSlide)
        currentSlide = 0;

    } else if (windowPageTop > -2228 && windowPageTop <= -770 && currentSlide != 1) {
        console.log('-770');
        let newText = '<p>Plenty of movies and shows loved by today\'s generation are shot on film. In fact, Sam Levinson, the director of “Euphoria,” reached out to Kodak for help collecting enough film stock to shoot an entire season in the 35mm format. Shooting in film could help create a more restricted version of the show that mimicked the worn-out youth that the story follows, the director said in an <a href="https://www.popphoto.com/news/hbo-euphoria-shot-on-kodak-ektachrome/#:~:text=It%20turns%20out%20season%20two,series%20in%20the%2035mm%20format" target="_blank">interview with PopPhoto</a>.</p>';
        FadeIn(newText);
        console.log(currentSlide)
        currentSlide = 1
    } else if( windowPageTop > -770 && currentSlide != 2){
        console.log('-other');
        let newText = '<p>What comes to mind when you think about film? We’re not talking about superhero movies and romcoms, but those little rolls of film paper wound up on a spool that you might have seen at a one-hour photo store in the 1990s.</p><p>Motion pictures relied solely on film photography technologies for a whole century after the birth of cinematography in 1880. This was largely overturned after the introduction of digital cinematography, and by 2013, most major films were shot on digital video.</p><p>Does that mean that film is dead? Absolutely not.</p>';
        FadeIn(newText);
        console.log(currentSlide)
        currentSlide = 2;
    }
});