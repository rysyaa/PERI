let photo1 = document.getElementById("sec4__photo2")
let photo2 = document.getElementById("sec4__photo2")
let photo3 = document.getElementById("sec4__photo2")
let photo4 = document.getElementById("sec4__photo2")
let text1__photo = document.getElementById("text1__photo")
let text2__photo = document.getElementById("text2__photo")
let text3__photo = document.getElementById("text3__photo")
let text4__photo = document.getElementById("text4__photo")
console.log(text2__photo)

let text1 = () => {
    text1__photo.style.display = "block";
    text2__photo.style.display = "none";
    text3__photo.style.display = "none";
    text4__photo.style.display = "none";
}
let text2 = () => {
    text2__photo.style.display = "block";
    text1__photo.style.display = "none";
    text3__photo.style.display = "none";
    text4__photo.style.display = "none";
}
let text3 = () => {
    text3__photo.style.display = "block";
    text1__photo.style.display = "none";
    text2__photo.style.display = "none";
    text4__photo.style.display = "none";
}
let text4 = () => {
    text4__photo.style.display = "block";
    text1__photo.style.display = "none";
    text2__photo.style.display = "none";
    text3__photo.style.display = "none";
}



// photo2.addEventListener("click",text2)