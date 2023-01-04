var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
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
  function web(){
    webBtn.style.backgroundColor="#007bff"
    webBtn.style.color="white"

    allBtn.style.backgroundColor="white"
    allBtn.style.color="black"

    designBtn.style.backgroundColor="white"
    designBtn.style.color="black"

    brandBtn.style.backgroundColor="white"
    brandBtn.style.color="black"
     
  }


  function all(){
    allBtn.style.backgroundColor="#007bff"
    allBtn.style.color="white"

    webBtn.style.backgroundColor="white"
    webBtn.style.color="black"

    designBtn.style.backgroundColor="white"
    designBtn.style.color="black"

    brandBtn.style.backgroundColor="white"
    brandBtn.style.color="black"
     
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
     
  }


