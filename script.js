window.aboutMe = function () {
  console.table({
    Name: "Jufi Rachmana D.C.",
    Age: 19,
    Education: "State Senior High School 8 Garut",
    Major: "Natural Science / IPA",
    Grade: "87.08",
    Email: "jufirachmanadwichandra@gmail.com",
    Phone: "+62895-4174-06600",
    Graduated: true,
  });
};


/* Global
 DOM Selection
 */
console.info(document.head);
console.info(document.body);
console.info(document.images);

// this effect activate when the profile picture is clicked

const profile = document.querySelector(".Image-Profile");
profile.addEventListener("click", () => {
  profile.classList.remove("spin");
  void profile.offsetWidth;
  profile.classList.add("spin");
console.log("You have clicked on this profile picture");
});

// this effect activate when user click image, variable or number from the Contact and Social Media
document.querySelector("#WhatsappContact")
  .addEventListener("click", function () {
    this.classList.add("clicked");
    console.log("You have clicked on this Whatsapp Contact");
  });

document.querySelector("#Gmail").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this Email");
});

document.querySelector("#Instagram").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this Instagram");
});

document.querySelector("#GitHub").addEventListener("click", function () {
  this.classList.add("clicked");
  console.log("You have clicked on this GitHub");
});

// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
  });
}

/* this effect activate when the cv button is clicked
  if in begin open the website, the cv not show,
  but when the button is clicked, the cv will show
  */

const cvButton = document.querySelector(".cv-btn");
const toast = document.getElementById("toast");

cvButton.addEventListener("click", function () {
  toast.classList.add("show");
  console.log("You have clicked on this CV ");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});

// event binding
document.addEventListener("click", function (e) {
  console.log(e);
});