

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });


// document.body = BodyElement;
const list=document.getElementById("ham-list")
let tap=false

  function openHam(){

console.log(tap)
    if(!tap){
      // document.body.style.overflow = "hidden"
      list.style.display="block"
      tap=true
    }else{
      // document.body.style.overflow = "auto"
      list.style.display="none"
      tap=false

    }

  }

const webBtn=document.getElementById("webBtn")
const allBtn=document.getElementById("allBtn")
const designBtn=document.getElementById("designBtn")
const brandBtn=document.getElementById("brandBtn")

const portfolio1=document.getElementById("portfolio1")
const portfolio2=document.getElementById("portfolio2")
const portfolio3=document.getElementById("portfolio3")

  function web(){
    webBtn.style.backgroundColor="#007bff"
    webBtn.style.color="white"

    allBtn.style.backgroundColor="white"
    allBtn.style.color="black"

    designBtn.style.backgroundColor="white"
    designBtn.style.color="black"

    brandBtn.style.backgroundColor="white"
    brandBtn.style.color="black"

    portfolio1.style.display="none"
    portfolio3.style.display="none"
    portfolio2.style.display="flex"
    console.log("SLAMA")

     
  }


  function all2(){
    allBtn.style.backgroundColor="#007bff"
    allBtn.style.color="white"

    webBtn.style.backgroundColor="white"
    webBtn.style.color="black"

    designBtn.style.backgroundColor="white"
    designBtn.style.color="black"

    brandBtn.style.backgroundColor="white"
    brandBtn.style.color="black"

    portfolio2.style.display="none"
    portfolio3.style.display="none"
    portfolio1.style.display="flex"
    console.log("SLAMAx")

     
  }

  function design(){
    designBtn.style.backgroundColor="#007bff"
    designBtn.style.color="white"

    webBtn.style.backgroundColor="white"
    webBtn.style.color="black"

    allBtn.style.backgroundColor="white"
    allBtn.style.color="black"

    brandBtn.style.backgroundColor="white"
    brandBtn.style.color="black"

    portfolio3.style.display="none"
    portfolio2.style.display="none"
    portfolio1.style.display="flex"

     
  }

  function brand(){
    brandBtn.style.backgroundColor="#007bff"
    brandBtn.style.color="white"

    webBtn.style.backgroundColor="white"
    webBtn.style.color="black"

    designBtn.style.backgroundColor="white"
    designBtn.style.color="black"

    webBtn.style.backgroundColor="white"
    webBtn.style.color="black"

    portfolio1.style.display="none"
    portfolio3.style.display="none"
    portfolio2.style.display="flex"

     
  }


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none",duration:1})


gsap.from(".about", {
  y: 250,
  opacity:0,
  scrollTrigger: {
    trigger: ".about",
    start: "top center",
    end: "top 250px",
    // scrub: true,
    // markers: true,
    id: "scrub",
    resistance : false

  }
});



gsap.from(".team", {
  y: 250,
  opacity:0,
  
  scrollTrigger: {
    trigger: ".team",
    start: "top 200px",
    end: "top 300px",
    // scrub: true,     
    // markers: true,
    id: "scrub",
  
  }
});


gsap.from(".portfolio", {
  y: 250,
  opacity:0,
  
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 200px",
    end: "top 300px",
    // scrub: true,     
    // markers: true,
    id: "scrub",
  
  }
});

const about=document.getElementById("aboutMore")

function openAbout(){
  about.style.display="block"
}

function closeAbout(){
  about.style.display="none"
}


