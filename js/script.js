const blackMenu = document.querySelector(".navigationSecendory");
const whiteMenu = document.querySelector(".navigationWhite");

window.addEventListener("scroll", function(){
    blackMenu.classList.toggle("sticky", window.scrollY>0);
});

const sliderButtonLeft = document.querySelector(".arrowLeft");
const sliderButtonRight = document.querySelector(".arrowRight");
const banner = document.querySelector(".banner");

    sliderButtonLeft.addEventListener("click",function(){
        banner.classList.toggle("bannerRight")
    });
    sliderButtonRight.addEventListener("click",function(){
        banner.classList.toggle("bannerRight")
    });

setInterval(function(){
    banner.classList.toggle("bannerRight");
}, 5000);

const category = document.querySelectorAll(".category");
const categoryMenu = document.querySelector(".categoryMenu");
category.forEach((e) => 
e.addEventListener("click", function(){
    categoryMenu.classList.toggle("showCategory");
    })
)

const faders = document.querySelectorAll(".fader");
const buttons = document.querySelectorAll(".button");
const scrollOption = ()=>{
    root: null
    threshold: 0.5
};
const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        return;
        }
        else{
            entry.target.classList.add("appear");
        }
    });
},scrollOption);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
buttons.forEach(button => {
    appearOnScroll.observe(button);
})


const aboutCounter = document.querySelector(".rightAbout");

const counter = new IntersectionObserver((entries, counter)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        else{
            let graduate = 0;
            let student = 0;
            let cgpa = 0;
            const graduatesTimer = setInterval(graduatesCounter, 10);
            const studentTimer = setInterval(studentCounter, 500);
            const gpaTimer = setInterval(gpaCounter, 150);

            function graduatesCounter() {
                
                graduate++;
                document.querySelector(".graduatesCount span").innerHTML=graduate;

                if (graduate == 95) {
                    clearInterval(graduatesTimer)
                }
            };
            function studentCounter() {
    
                student++;
                document.querySelector(".studentCount span").innerHTML=student;
            
                if (student == 2) {
                    clearInterval(studentTimer)
                }
            };  
            
            function gpaCounter() {
                
                cgpa++;
                document.querySelector(".gpaCount span").innerHTML=cgpa;
            
                if (cgpa == 5) {
                    clearInterval(gpaTimer)
                }
            }
        }
    });
});

counter.observe(aboutCounter);


const videoButton = document.querySelector(".videoButton");
const videocontainer = document.querySelector(".videoContainer");
videoButton.addEventListener("click", function() {
    videocontainer.classList.add("play");
    videocontainer.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/ToZRgXLaVuM" title="YouTube video player" frameborder="5px solid #fff" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
videocontainer.addEventListener("click", function() {
    videocontainer.classList.remove("play");
    videocontainer.innerHTML="";
})

