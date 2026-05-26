// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
nav.classList.toggle("show");
});


// FILTER MENU
function filterMenu(cat){
document.querySelectorAll(".item").forEach(item=>{
item.style.display =
(cat === "all" || item.classList.contains(cat))
? "block"
: "none";
});
}


// BOOKING FORM
const form = document.getElementById("bookingForm");
const msg = document.getElementById("msg");

form.addEventListener("submit",(e)=>{
e.preventDefault();
msg.textContent = "Reservation sent successfully!";
form.reset();
});