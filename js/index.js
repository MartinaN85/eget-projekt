// === Mobile Navigation Toggle ===
// Toggles the hamburger menu open and closed on mobile devices

const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// === Filter Menu Setup ===
// Selects the container that holds all articles
const container = document.querySelector(".posts");

// Collects all article elements into an array
const allArticles = [...document.querySelectorAll(".article__post")];

// Stores the current sort order and selected filter types
let currentSortOrder = "desc"; // default: newest first
let currentTypes = [];         // no filters selected initially


// === Sorting Function ===
// Sorts articles by their data-sort attribute 
function sortArticles() {
  let sorted = [...allArticles];

  // Sorts ascending or descending based on currentSortOrder
  sorted.sort((a, b) => {
    const aSort = parseInt(a.dataset.sort);
    const bSort = parseInt(b.dataset.sort);
    return currentSortOrder === "asc" ? aSort - bSort : bSort - aSort;
  });

  // Hides all articles before re-rendering
  allArticles.forEach(article => article.style.display = "none");

  // Displays sorted articles and appends them to the container
  sorted.forEach(article => {
    article.style.display = "block";
    container.appendChild(article);
  });

  // Reinitializes carousels if present
  initCarousels();
}


// === Filtering Function ===
// Filters articles based on selected category checkboxes
function filterByType() {
  // Gets all checked category values
  currentTypes = [...document.querySelectorAll('#type-filter input[name="type"]:checked')]
    .map(cb => cb.value);

  // Shows only articles that match selected types
  allArticles.forEach(article => {
    const match = currentTypes.length === 0 || currentTypes.includes(article.dataset.type);
    article.style.display = match ? "block" : "none";
  });

  // Reinitializes carousels if present
  initCarousels();
}


// === Sort Filter Listener ===
// Updates sort order when a sort radio button is selected
document.querySelectorAll('#sort-filter input[name="sort"]').forEach(input => {
  input.addEventListener("change", () => {
    currentSortOrder = input.value;
    sortArticles();
  });
});


// === Filter Button Listener ===
// Applies category filtering when the filter button is clicked
document.getElementById("filter-button").addEventListener("click", filterByType);


// === Reset Category Filter on Sort Change ===
// Clears category filters when a sort option is selected
document.querySelectorAll('#sort-filter input[name="sort"]').forEach(input => {
  input.addEventListener("change", () => {
    document.querySelectorAll('#type-filter input[name="type"]').forEach(cb => cb.checked = false);
    currentTypes = [];
    currentSortOrder = input.value;
    sortArticles();
  });
});


// === Reset Sort Filter on Category Change ===
// Clears sort selection when a category checkbox is changed
document.querySelectorAll('#type-filter input[name="type"]').forEach(input => {
  input.addEventListener("change", () => {
    document.querySelectorAll('#sort-filter input[name="sort"]').forEach(rb => rb.checked = false);
    currentSortOrder = "desc"; // reset to default
  });
});


// === Dropdown Filter ===
// Filters articles based on selected dropdown values (e.g. mobile view)
document.querySelector('.dropdown').addEventListener('change', () => {
  const selected = [...document.querySelector('.dropdown').selectedOptions].map(opt => opt.value);

  allArticles.forEach(article => {
    const match = selected.length === 0 || selected.includes(article.dataset.type);
    article.style.display = match ? "block" : "none";
  });

  // Reinitializes carousels if present
  if (typeof initCarousels === "function") {
    initCarousels();
  }
});


// === Carousel Setup ===
// Initializes carousel functionality for each carousel on the page
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector('.carousel__button--right');
  const prevBtn = carousel.querySelector('.carousel__button--left');

  let currentIndex = 0;

  // Updates the position of the carousel track based on currentIndex
  const updateSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // Updates the active slide class
    track.querySelector('.current-slide')?.classList.remove('current-slide');
    slides[currentIndex].classList.add('current-slide');
  };

  // Moves to the next slide
  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  // Moves to the previous slide
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });

  // Updates slide position on page load and window resize
  window.addEventListener('load', updateSlidePosition);
  window.addEventListener('resize', updateSlidePosition);
});

