// === Mobile Navigation Toggle ===
// Toggles the hamburger menu open and closed on mobile devices
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});


// === DOM Element References ===
// Selects key elements used throughout the script
const products = document.querySelector('.patterns');             // Container for pattern cards
const filterButton = document.getElementById("filter-button");   // Button to trigger checkbox filtering
const dropdown = document.querySelector(".dropdown");            // Dropdown menu for mobile filtering


// === Card Creation Function ===
// Generates a single pattern card and appends it to the container
function createCard({ img, product, title, category }) {
  const code = `
    <div class="card">
      <img src="${img}" alt="${product}">
      <div class="card__text">
        <p class="card__category">${category}</p>  
        <h4>${title}</h4>
      </div>
      <button class="download-btn">Download pattern</button>
    </div>
  `;
  products.innerHTML += code;
}


// === Display Function ===
// Clears the container and displays a list of pattern cards
function displayCards(data) {
  console.log("Rendering cards:", data.length);
  products.innerHTML = "";
  data.forEach(item => createCard(item));
}


// === Pattern Data ===
// Array of crochet patterns with image, title, and category
const items = [
  { img: "../images/bag.png", product: "Virkad påse", title: "Regnbågs påse", category: "accessories" },
  { img: "../images/bear.png", product: "Nalle", title: "Björnen Bo", category: "amigurumi" },
  { img: "../images/bookmark.png", product: "Bokmärke", title: "Bokmärke kryss", category: "other" },
  { img: "../images/bookmark2.png", product: "Bokmärke", title: "Bokmärke blad", category: "other" },
  { img: "../images/boots.png", product: "Babytofflor blå", title: "Blå Babytofflor", category: "children" },
  { img: "../images/boots2.png", product: "Babytofflor grå/rosa", title: "Rosa/grå Babytofflor", category: "children" },
  { img: "../images/owl.png", product: "Uggla", title: "Ugglan Ulla", category: "amigurumi" }, 
  { img: "../images/butterfly.png", product: "Fjäril", title: "Virkad Fjäril", category: "other" },
  { img: "../images/hat.png", product: "Mössa", title: "Mysig Mössa", category: "accessories" },
  { img: "../images/rattle.png", product: "Skallra", title: "Björn skallra", category: "children" }, 
  { img: "../images/rainbow.png", product: "Nyckelring", title: "Nyckelring regnbåge", category: "accessories" }, 
  { img: "../images/giraffe.png", product: "Giraff", title: "Giraffen Gigi", category: "amigurumi" },
];


// === Initial Render ===
// Displays all pattern cards when the page loads
displayCards(items);


// === Checkbox Filter ===
// Filters patterns based on selected checkboxes
filterButton.addEventListener("click", () => {
  const checked = Array.from(document.querySelectorAll('input[name="type"]:checked'))
    .map(input => input.value);

  const filtered = checked.includes("all") || checked.length === 0
    ? items
    : items.filter(item => checked.includes(item.category));

  displayCards(filtered);
});


// === Dropdown Filter ===
// Filters patterns based on selected dropdown value
dropdown.addEventListener("change", e => {
  const selected = e.target.value;

  const filtered = selected === "all"
    ? items
    : items.filter(item => item.category === selected);

  displayCards(filtered);
});


// === Checkbox Behavior: "All" Option ===
// When "All" is checked, uncheck all other options
document.querySelector('input[value="all"]').addEventListener("change", e => {
  if (e.target.checked) {
    document.querySelectorAll('input[name="type"]').forEach(input => {
      if (input.value !== "all") input.checked = false;
    });
  }
});

// When any other checkbox is checked, uncheck "All"
document.querySelectorAll('input[name="type"]').forEach(input => {
  if (input.value !== "all") {
    input.addEventListener("change", () => {
      document.querySelector('input[value="all"]').checked = false;
    });
  }
});


// === Download Message ===
// Displays a temporary message when a download button is clicked
document.addEventListener("click", e => {
  if (e.target.classList.contains("download-btn")) {
    const message = document.getElementById("download-message");
    message.textContent = "Pattern downloaded! Happy crocheting!";
    message.classList.add("show");
    setTimeout(() => {
      message.classList.remove("show");
    }, 3000);
  }
});

//console.log("Knapp klickad!");
