const elsliderRight = document.querySelector(".sliderRight")
const elsliderLeft = document.querySelector(".sliderLeft")
const elheading = document.querySelector(".intro__wrapper__bottom__contents__heading")
const elheader = document.querySelector(".intro")


elsliderRight.addEventListener("click", (e) => {
    elheader.classList.toggle("intro__slider")
    if(elheader.classList.contains("intro__slider")){
        elheading.innerHTML = "Assalom Sohil house"
    }else{
        elheading.innerHTML = "Next level comfort houses"
    }
    
})
elsliderLeft.addEventListener("click", (e) => {
    elheader.classList.toggle("intro__slider")
    if(elheader.classList.contains("intro__slider")){
        elheading.innerHTML = "Assalom Sohil house"
    }else{
        elheading.innerHTML = "Next level comfort houses"
    }
})








