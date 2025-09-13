fetch('offcanva.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('offcanvasContainer').innerHTML = html;

    // Init offcanvas
    const input = document.querySelector('.search-box');
    const offcanvasElement = document.getElementById('filterOffcanvas');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    input.addEventListener('click', () => {
      bsOffcanvas.show();
      initMileageFilter();
    });
    //year fucntion 
    initYearFilter();
    initPriceFilter();
    // COUNTRY DROPDOWN
      const dropdownItems = document.querySelectorAll('#tab-country .dropdown-item');
    const dropdownBtn = document.querySelector('#tab-country #countryDropdown');

    dropdownItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedText = this.textContent.trim();
        const selectedImg = this.querySelector('img').src;

        dropdownBtn.innerHTML = `<img src="${selectedImg}" width="20" class="me-2"> ${selectedText}`;
      });
    });
    // COUNTRY DROPDOWN
  const minSlider = document.getElementById('yearMin');
const maxSlider = document.getElementById('yearMax');
const minYearInput = document.getElementById('minYear');
const maxYearInput = document.getElementById('maxYear');
const activeBar = document.getElementById('rangeActive');

function updateRange() {
  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  // Swap if min > max
  if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

  minYearInput.value = minVal;
  maxYearInput.value = maxVal;

  const rangeMin = 1990;
  const rangeMax = 2024;

  const percentMin = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
  const percentMax = ((maxVal - rangeMin) / (rangeMax - rangeMin)) * 100;

  const barWidth = Math.max(percentMax - percentMin, 0.5); // Ensure minimum width

  activeBar.style.left = `${percentMin}%`;
  activeBar.style.width = `calc(${barWidth}% - 7px)`; // ← Prevent overflow under right thumb
}

minSlider.addEventListener('input', updateRange);
maxSlider.addEventListener('input', updateRange);

updateRange(); // Call on page load

    // Tab toggle logic
    const navLinks = document.querySelectorAll(' #custom-tab-nav .nav-link');
const tabPanes = document.querySelectorAll('.tab-pane');
const badgeBlocks = document.querySelectorAll('.badge-block');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // 1. Set active tab
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');

    // 2. Hide all tab panes
    tabPanes.forEach(pane => {
      pane.classList.add('d-none');
      pane.classList.remove('active');
    });

    // 3. Show selected tab pane
    const targetId = this.getAttribute('href');
    const targetPane = document.querySelector(targetId);
    if (targetPane) {
      targetPane.classList.remove('d-none');
      targetPane.classList.add('active');
    }

    // 4. Hide all badge blocks
    badgeBlocks.forEach(block => block.classList.add('d-none'));

    // 5. Show corresponding badge block
    const tabName = targetId.replace('#tab-', ''); // e.g., "fuel"
    const badgeToShow = document.getElementById('badge-' + tabName);
    if (badgeToShow) {
      badgeToShow.classList.remove('d-none');
    }
  });
});

  });


  // FILLTER YEAR  CONTENT
  function initYearFilter() {
  const container = document.getElementById('tab-year');
  if (!container) return;

  const buttons = container.querySelectorAll('.year-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Optional: Extract and set min/max values to inputs
      const [min, max] = button.textContent.split('-').map(y => y.trim());
      document.getElementById('minYear').value = min;
      document.getElementById('maxYear').value = max;
    });
  });
}

  // FILLTER YEAR  CONTENT
  // START FILLTER MILAGE  CONTENT

 function initMileageFilter() {
  const minMileageSlider = document.getElementById('minMileageRange');
  const maxMileageSlider = document.getElementById('maxMileageRange');
  const minMileageInput = document.getElementById('minMileage');
  const maxMileageInput = document.getElementById('maxMileage');
  const mileageActive = document.getElementById('mileageActive');

  if (!minMileageSlider || !maxMileageSlider || !mileageActive) return;

  function updateMileageRange() {
    let minVal = parseInt(minMileageSlider.value);
    let maxVal = parseInt(maxMileageSlider.value);

    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

    const rangeMin = parseInt(minMileageSlider.min);
    const rangeMax = parseInt(minMileageSlider.max);

    const percentMin = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
    const percentMax = ((maxVal - rangeMin) / (rangeMax - rangeMin)) * 100;
    const width = Math.max(percentMax - percentMin, 0.5);

    mileageActive.style.left = `${percentMin}%`;
    mileageActive.style.width = `calc(${width}% - 8px)`;

    minMileageInput.value = minVal.toLocaleString();
    maxMileageInput.value = maxVal.toLocaleString();
  }

  // Slider listeners
  minMileageSlider.addEventListener('input', updateMileageRange);
  maxMileageSlider.addEventListener('input', updateMileageRange);

  updateMileageRange(); // Initialize on load

  // Mileage button clicks
  const mileageButtons = document.querySelectorAll('.mileage-btn');
  mileageButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Deactivate all buttons first
      mileageButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Set max slider to value from button (data-value preferred)
      const value = parseInt(button.dataset.value || button.textContent.replace(/[^\d]/g, ''));
      if (!isNaN(value)) {
        maxMileageSlider.value = value;
        updateMileageRange();
      }
    });
  });
}
// END FILLTER MILAGE  CONTENT

 document.addEventListener("DOMContentLoaded", function () {
    const dropdownItems = document.querySelectorAll('#tab-country .dropdown-item');
    const dropdownBtn = document.querySelector('#tab-country #countryDropdown');

    dropdownItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        const selectedText = this.textContent.trim();
        const selectedImg = this.querySelector('img').src;

        // Set the new content in the dropdown button
        dropdownBtn.innerHTML = `<img src="${selectedImg}" width="20" class="me-2"> ${selectedText}`;
      });
    });
  });
// START FILLTER CAR PRICE  CONTENT

function initPriceFilter() {
  const minSlider = document.getElementById('minPriceRange');
  const maxSlider = document.getElementById('maxPriceRange');
  const minInput = document.getElementById('minPrice');
  const maxInput = document.getElementById('maxPrice');
  const activeBar = document.getElementById('priceActive');
  const priceButtons = document.querySelectorAll('.price-btn, .year-btn');

  function updatePriceRange() {
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);

    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

    minInput.value = minVal.toLocaleString();
    maxInput.value = maxVal.toLocaleString();

    const rangeMin = parseInt(minSlider.min);
    const rangeMax = parseInt(minSlider.max);
    const percentMin = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
    const percentMax = ((maxVal - rangeMin) / (rangeMax - rangeMin)) * 100;

   activeBar.style.left = percentMin + "%";
activeBar.style.width = `calc(${percentMax - percentMin}% - 8px)`; // ← fix for overlap

  }

  // Input drag
  minSlider.addEventListener('input', updatePriceRange);
  maxSlider.addEventListener('input', updatePriceRange);

  // Button click to set price ranges
  priceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      priceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const min = parseInt(btn.dataset.min);
      const max = parseInt(btn.dataset.max);

      if (!isNaN(min)) {
        minSlider.value = min;
        minInput.value = min.toLocaleString();
      }

      if (!isNaN(max)) {
        maxSlider.value = max;
        maxInput.value = max.toLocaleString();
      }

      updatePriceRange();
    });
  });

  updatePriceRange(); // Initialize on load
}


// END FILLTER CAR PRICE  CONTENT
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mileage-slider').forEach(updatePrice);
  });





  function selectTransmission(clickedBtn) {
      const buttons = document.querySelectorAll('.transmission-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      clickedBtn.classList.add('active');
    }

    function toggleCheck(el) {
  document.querySelectorAll('#colorBoxGroup .color-container').forEach(box => {
  box.addEventListener('click', function () {
    // Remove selection from all
    document.querySelectorAll('#colorBoxGroup .color-container').forEach(c => c.classList.remove('selected'));

    // Add to this
    this.classList.add('selected');
  });
});

}
//Brand Bottom Container
const brandModels = {
  peugeot: ['2008', '3008'],
  bmw:['All BMW Models'],
  
  ford: ['All Ford Models'],
 
  hyundai: ['All Hyundai Models'],
  isuzu: ['All Isuzu Models'],
  kia: ['All Kia Models'],
  lexus: ['All Lexus Models'],
  mazda: ['All Mazda Models'],
  mercedes: ['All Mercedes Models'],
  mini: ['All Mini Models'],
  mitsubishi: ['All Mitsubishi Models'],
  nissan: ['All Nissan Models'],
  naza: ['All Naza Models'],
  perodua: ['All Perodua Models'],
  subaru: ['All Subaru Models'],
  suzuki: ['All Suzuki Models'],
  
  volkswagen: ['All Volkswagen Models'],
  proton: ['All', 'Ertiga', 'Exora (2)', 'Inspira (3)', 'Iriz', 'Perdana (10)', 'Persona (4)', 'Preve', 'S70 (5)', 'Saga (10)', 'Suprima S', 'X50 (2)', 'X70 (3)', 'X90 (4)'],
  renault: ['Koleos', 'Captur'],
  honda: ['City', 'Civic', 'Jazz', 'HR-V', 'Accord'],
  toyota: ['Vios', 'Altis', 'Yaris', 'Camry', 'Rush', 'Hilux']
};

let currentModelSection = null;

function selectBrand(brandId, element) {
  // Remove existing highlights
  document.querySelectorAll('.brand-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');

  // Remove previous model section
  if (currentModelSection) currentModelSection.remove();

  // Clone template and insert
  const template = document.getElementById('model-template');
  const clone = template.content.cloneNode(true);
  const modelSection = clone.querySelector('.model-section');
  const modelWrapper = modelSection.querySelector('.model-buttons');
  currentModelSection = modelSection;

  // Populate buttons
  const models = brandModels[brandId] || ['No models available'];
  models.forEach(model => {
    const btn = document.createElement('button');
    btn.textContent = model;
    btn.className = 'btn btn-outline-secondary btn-sm model-button text-dark ';
   const selected_models = ['Saga (10)'];
if (selected_models.includes(model)) {
  btn.classList.add('selected');
}
const disable_models=['Ertiga','Iriz','Preve','Suprima S']
if (disable_models.includes(model)) {
  btn.disabled=true;
}
    btn.onclick = () => selectModel(btn);
    modelWrapper.appendChild(btn);
  });

  // Find the .brand-row that contains the clicked brand
  let parentRow = element.closest('.brand-row');
  if (parentRow) parentRow.insertAdjacentElement('afterend', modelSection);
}

function selectModel(button) {
  document.querySelectorAll('.model-buttons button').forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
}