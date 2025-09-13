// Load offcanvas content
fetch('offcanva2.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('offcanvasContainers').innerHTML = html;

    setTimeout(() => {

      
      const searchInput = document.getElementById('mobileSearchInput');
      const offcanvasElement = document.getElementById('searchOffcanvased');

      if (searchInput && offcanvasElement) {
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        searchInput.addEventListener('click', () => {
          offcanvas.show();
        });
      }

      initOffcanvasInteractions();

       // Initialize once
//  updatePriceSliderUI() ;
// Initial setup
updateYearSliderUI();
// Initial update
updateMileageSliderUI();

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
    }, 100);
  });

// Main logic
function initOffcanvasInteractions() {
  const navItems = document.querySelectorAll('.nav-item-full');

  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Only toggle dropdown if clicking on <a> inside .nav-item-full
      const link = e.target.closest('a');
      if (!link || !this.contains(link)) return;
      e.preventDefault();

      const dropdown = this.querySelector('.dropdown-content');
      const chevron = this.querySelector('.chevron-icon');
      const isActive = this.classList.contains('active');

      // Toggle dropdown open/close
      if (isActive) {
        this.classList.remove('active');
        dropdown.classList.remove('show');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      } else {
        this.classList.add('active');
        dropdown.classList.add('show');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }

   
    });
  });

  // Transmission toggle
  document.querySelectorAll('.transmission-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.transmission-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Color selection
  document.querySelectorAll('.color-container').forEach(box => {
    box.addEventListener('click', function () {
      document.querySelectorAll('.color-container').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

// CAR PIRICE CONTENE

const minSlider = document.getElementById("minPriceSlider");
const maxSlider = document.getElementById("maxPriceSlider");
const minInput = document.getElementById("minCarPrice");
const maxInput = document.getElementById("maxCarPrice");
const priceButtons = document.querySelectorAll(".year-btn");
const priceRangeBar = document.querySelector(".price-range-bar");

function updatePriceSliderUI() {
  const min = parseInt(minSlider.value);
  const max = parseInt(maxSlider.value);
  const range = parseInt(minSlider.max);

  // Prevent thumbs from crossing
  if (max - min < 5000) {
    if (event?.target === minSlider) {
      minSlider.value = max - 5000;
    } else {
      maxSlider.value = min + 5000;
    }
  }

  const minPercent = (minSlider.value / range) * 100;
  const maxPercent = (maxSlider.value / range) * 100;

  priceRangeBar.style.left = minPercent + "%";
  priceRangeBar.style.width = (maxPercent - minPercent) + "%";

  minInput.value = minSlider.value;
  maxInput.value = maxSlider.value;
}

minSlider.addEventListener("input", updatePriceSliderUI);
maxSlider.addEventListener("input", updatePriceSliderUI);

minInput.addEventListener("change", () => {
  minSlider.value = minInput.value;
  updatePriceSliderUI();
});

maxInput.addEventListener("change", () => {
  maxSlider.value = maxInput.value;

  updatePriceSliderUI();
});
priceButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle .active class
    priceButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const label = button.textContent.trim();

    let minVal = 0;
    let maxVal = parseInt(maxSlider.max);

    if (label.includes("Under")) {
      maxVal = 30000;
    } else if (label.includes("30,000 - 50,000")) {
      minVal = 30000;
      maxVal = 50000;
    } else if (label.includes("50,000 - 100,000")) {
      minVal = 50000;
      maxVal = 100000;
    } else if (label.includes("Above")) {
      minVal = 100000;
      maxVal = parseInt(maxSlider.max);
    }

    // Update sliders and input fields
    minSlider.value = minVal;
    maxSlider.value = maxVal;
    minInput.value = minVal;
    maxInput.value = maxVal;

    updatePriceSliderUI(); // Call existing function
  });
});

// CAR PIRICE CONTENT


// CAR YEAR CONTENT


const yearMinSlider = document.getElementById("yearMinSlider");
const yearMaxSlider = document.getElementById("yearMaxSlider");
const yearMinInput = document.getElementById("yearMinInput");
const yearMaxInput = document.getElementById("yearMaxInput");
const yearRangeBar = document.querySelector(".year-range-bar");
const yearButtons = document.querySelectorAll(".year-btn"); // assuming reused class name

function updateYearSliderUI(event) {
  const minVal = parseInt(yearMinSlider.value);
  const maxVal = parseInt(yearMaxSlider.value);
  const sliderMin = parseInt(yearMinSlider.min);
  const sliderMax = parseInt(yearMaxSlider.max);

  // Prevent crossing
  if (maxVal - minVal < 1) {
    if (event?.target === yearMinSlider) {
      yearMinSlider.value = maxVal - 1;
    } else {
      yearMaxSlider.value = minVal + 1;
    }
  }

  const minValue = parseInt(yearMinSlider.value);
  const maxValue = parseInt(yearMaxSlider.value);

  const minPercent = ((minValue - sliderMin) / (sliderMax - sliderMin)) * 100;
  const maxPercent = ((maxValue - sliderMin) / (sliderMax - sliderMin)) * 100;

  yearRangeBar.style.left = minPercent + "%";
  yearRangeBar.style.width = (maxPercent - minPercent) + "%";

  yearMinInput.value = minValue;
  yearMaxInput.value = maxValue;
}

// Event listeners
yearMinSlider.addEventListener("input", updateYearSliderUI);
yearMaxSlider.addEventListener("input", updateYearSliderUI);

yearMinInput.addEventListener("change", () => {
  let val = parseInt(yearMinInput.value);
  const maxVal = parseInt(yearMaxSlider.value);
  if (val >= maxVal) val = maxVal - 1;
  yearMinSlider.value = val;
  updateYearSliderUI();
});

yearMaxInput.addEventListener("change", () => {
  let val = parseInt(yearMaxInput.value);
  const minVal = parseInt(yearMinSlider.value);
  if (val <= minVal) val = minVal + 1;
  yearMaxSlider.value = val;
  updateYearSliderUI();
});


yearButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Toggle .active class
    yearButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const label = button.textContent.trim();

    let minVal = parseInt(yearMinSlider.min);
    let maxVal = parseInt(yearMaxSlider.max);

    // Dynamically extract year range from button label like "1990 - 1999"
    const match = label.match(/(\d{4})\s*-\s*(\d{4})/);
    if (match) {
      minVal = parseInt(match[1]);
      maxVal = parseInt(match[2]);
    }

    // Update sliders and inputs
    yearMinSlider.value = minVal;
    yearMaxSlider.value = maxVal;
    yearMinInput.value = minVal;
    yearMaxInput.value = maxVal;

    updateYearSliderUI(); // Call the function to update bar
  });
});





// CAR YEAR CONTENT

// MILEAGE CONTENT

  const mileageMinSlider = document.getElementById("mileageMinSlider");
  const mileageMaxSlider = document.getElementById("mileageMaxSlider");
  const minMileageInput = document.getElementById("minMileageInput");
  const maxMileageInput = document.getElementById("maxMileageInput");
  const mileageRangeBar = document.getElementById("mileageRangeBar");
  const mileageButtons = document.querySelectorAll(".mileage-btn");

  if (!mileageMinSlider || !mileageMaxSlider) {
    console.warn("Mileage sliders not found");
    return;
  }

  function updateMileageSliderUI(event) {
    let min = parseInt(mileageMinSlider.value);
    let max = parseInt(mileageMaxSlider.value);
    const range = parseInt(mileageMaxSlider.max);

    if (max - min < 10000) {
      if (event?.target === mileageMinSlider) {
        min = max - 10000;
        mileageMinSlider.value = min;
      } else {
        max = min + 10000;
        mileageMaxSlider.value = max;
      }
    }

    const minVal = parseInt(mileageMinSlider.value);
    const maxVal = parseInt(mileageMaxSlider.value);

    const minPercent = (minVal / range) * 100;
    const maxPercent = (maxVal / range) * 100;

    mileageRangeBar.style.left = minPercent + "%";
    mileageRangeBar.style.width = (maxPercent - minPercent) + "%";

    minMileageInput.value = minVal;
    maxMileageInput.value = maxVal;
  }

  mileageMinSlider.addEventListener("input", updateMileageSliderUI);
  mileageMaxSlider.addEventListener("input", updateMileageSliderUI);

  minMileageInput.addEventListener("input", () => {
    let val = parseInt(minMileageInput.value.replace(/,/g, ""));
    if (isNaN(val)) return;
    if (val >= parseInt(mileageMaxSlider.value)) val = parseInt(mileageMaxSlider.value) - 10000;
    mileageMinSlider.value = val;
    updateMileageSliderUI();
  });

  maxMileageInput.addEventListener("input", () => {
    let val = parseInt(maxMileageInput.value.replace(/,/g, ""));
    if (isNaN(val)) return;
    if (val <= parseInt(mileageMinSlider.value)) val = parseInt(mileageMinSlider.value) + 10000;
    mileageMaxSlider.value = val;
    updateMileageSliderUI();
  });

  mileageButtons.forEach(button => {
    button.addEventListener("click", () => {
      mileageButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const label = button.textContent.trim();
      let max = parseInt(mileageMaxSlider.max);
      let min = 0;

      if (label.includes("Under 30")) max = 30000;
      else if (label.includes("Under 50")) max = 50000;
      else if (label.includes("Under 7")) max = 7000;
      else if (label.includes("Under 120")) max = 120000;

      mileageMinSlider.value = min;
      mileageMaxSlider.value = max;

      updateMileageSliderUI();
    });
  });

  // Initial update
  
// MILEAGE CONTENT

  // Grouped buttons: mileage, year, fuel, etc.
  ['.mileage-btn', '.year-btn', '.btn-outline-warning', '.btn-outline-secondary'].forEach(selector => {
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('click', function () {
        const group = this.closest('.row');
        if (group) {
          group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        }
        this.classList.add('active');
      });
    });
  });
}




  function selectModel(button) {
    // Remove 'selected' class from all model buttons
    button.parentElement.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('selected');
    });

    // Add 'selected' to clicked one
    button.classList.add('selected');
  }