let active = ""
const box = document.querySelector(".menu")
const ball = document.querySelector(".ball")
const liItem = document.querySelectorAll(".menu li")

const positionBall = function(){
  active = document.querySelector(".active")
  ball.style.left = `${active.offsetLeft}px`
  //ball.style.top = `${active.offsetTop}px`
}

positionBall()

liItem.forEach(item =>{
  item.addEventListener("click",function(){
    active.classList.remove("active")
    this.classList.add("active")
    positionBall()
    console.log("cliquei")
  } )
})