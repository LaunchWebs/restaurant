// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.onclick = () => {
nav.classList.toggle("show");
};


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


// DARK / LIGHT MODE
const toggleTheme = document.getElementById("themeToggle");

toggleTheme.onclick = () => {
document.body.classList.toggle("light");

toggleTheme.textContent =
document.body.classList.contains("light") ? "☀️" : "🌙";
};