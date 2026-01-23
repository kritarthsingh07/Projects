const svg = document.getElementById("canvas")
const countText = document.getElementById("count")

let circles = []

svg.addEventListener("click", e => {
const circle = document.createElementNS("http://www.w3.org/2000/svg","circle")

circle.setAttribute("cx", e.offsetX)
circle.setAttribute("cy", e.offsetY)
circle.setAttribute("r", 8)
circle.setAttribute("fill", "#1f7aff")

svg.appendChild(circle)
circles.push(circle)
countText.textContent = circles.length
})

function undo(){
const last = circles.pop()
if(last){
svg.removeChild(last)
countText.textContent = circles.length
}
}
