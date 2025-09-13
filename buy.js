const carItems = [
          { image: 'images/car2.jpeg', label: "2018 Perodua",subheading:"Myvi AV 1.5", km: "68,242", price: "40,550", bottom_text:'RM 450 p.m. 8-year Loan', tag: "" },
          { image: 'images/car1.jpg', label: "2024 MG",subheading:"ZS EV",  km: "1,200", price: "45,000",bottom_text:'Qualify for Max. 9-year Loan',  tag: "bid" },
          { image: 'images/car3.jpeg', label: "2021 BMW",subheading:"X1 sDrive20i M Sport 2.0",  km: "45,128", price: "122,850", bottom_text:'RM 1,200p.m. 9-year Loan', tag: "deal" },
          { image: 'images/car2.jpeg', label: "2018 Perodua",subheading:"Myvi AV 1.5", km: "68,242", price: "40,550", bottom_text:'RM 450 p.m. 8-year Loan', tag: "" },
          { image: 'images/car1.jpg', label: "2024 MG",subheading:"ZS EV",  km: "1,200", price: "45,000",bottom_text:'Qualify for Max. 9-year Loan',  tag: "bid" },
          { image: 'images/car3.jpeg', label: "2021 BMW",subheading:"X1 sDrive20i M Sport 2.0",  km: "45,128", price: "122,850", bottom_text:'RM 1,200p.m. 9-year Loan', tag: "deal" },
          
        ];

        const container = document.getElementById('imageLoopContainer');

        carItems.forEach(item => {
          container.innerHTML += `
       <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center align-items-center card-bottom-container">
        <div class="car-card "onclick="location.href='buy_car.html'" >
          <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
            <!-- Carousel indicators -->
            <div class="carousel-indicators custom-indicators">
            </div>

            <div class="carousel-inner1">
              <div class="carousel-item active car-container-carousel-item">
                <img src="${item.image}" class=" d-block w-100 car-card-img " alt="" style="height:220px !important" >
              
                ${item.tag === 'bid' ? `
  <div class="bid-banner position-absolute bottom-0 start-0 w-100 text-white p-2 px-sm-1 py-sm-2" style="background-color: rgba(0,0,0,0.6);">
    Bid Date: <span class="fw-bold">20 June 2025</span> &nbsp;Time: <span class="fw-bold">8:30PM</span>
    <span class="text-white p-1 ms-1 rounded-2 h-50" style="background-color: red;">
      Notify Me<i class="bi bi-alarm-fill text-white ms-1"></i>
    </span>
  </div>
` :
              item.tag === 'deal' ? `
 <div class="deal-banner position-absolute bottom-0 start-0 w-100 text-white">
            <div class="fw-bold ps-2">BEST DEAL IN TOWN!<br><small class="fw-light ms-1  "
                style="line-height: 0%; font-size: 9px;">Promo
                till 30 July 2025</small></div>
            <div class="off-badge text-dark ">RM <span class="fw-bold fs-4">8,800 </span>OFF</div>
          </div>` : ''}
              </div>
              <div class="carousel-item car-container-carousel-item">
                <img src="images/car2.jpeg" class=" d-block w-100" alt="">
              </div>
              <div class="carousel-item car-container-carousel-item">
                <img src="images/car3.jpeg" class=" d-block w-100" alt="">
              </div>
            </div>
          </div>
          <div class="px-3 py-2 card-contents" >

            <div class="d-flex justify-content-between ">
              <div class="fs-5 fw-semibold  card-titles" style="font-weight: 1200;">${item.label}</div>
              <!-- <i class="bi bi-heart fw-bold" style="color: #f1c40f;font-size: 22px;"></i> -->
              <div><img src="images/share.png" class="mt-1 me-1 share" alt="" >
              <img src="images/fav.png" class="mt-1 heart" alt="" onclick="toggleFavorite('${item.label}') ">
              </div>
            </div>
            <p class="fw-semibold" style=" font-size: 15px;">${item.subheading}</p>
            <div class="punch text-dark small " style="line-height: 0%;">${item.km} | Auto | Puchong</div>
            <div class="mt-3">
              <!-- <img src="https://via.placeholder.com/60x20?text=CARGURU" alt="">
            <span class="certified-badge">CERTIFIED</span> -->
              <img src="images/1.jpeg" alt="" width="150px" height="30px">
              
            </div>
            <div class="rm small">RM<span class="fs-4 fw-bolder mb-2 ms-1">${item.price}</span></div>

            <!-- <div class="mt-2 price"><span style="font-size: 12px;">RM</span> ${item.min_price}</div> -->
            <div class="loan-info mb-2">${item.bottom_text}</div>
          </div>
        </div>
      </div>
    `;
        });


        // Favorite
        // Store favorites in localStorage
let favorites = JSON.parse(localStorage.getItem("myfavorites")) || [];

function toggleFavorite(label) {
  const heart = event.target;

  // Check if already in favorites
  const index = favorites.findIndex(car => car.label === label);

  if (index === -1) {
    // Add to favorites
    const selectedCar = carItems.find(car => car.label === label);
    favorites.push(selectedCar);
    // heart.style.filter = "invert(98%) sepia(94%) saturate(7486%) hue-rotate(356deg) brightness(97%) contrast(122%)"; // red
    heart.style.filter = "brightness(0) saturate(100%) invert(13%) sepia(100%) saturate(7490%) hue-rotate(0deg) brightness(96%) contrast(105%)";

  } else {
    // Remove from favorites
    favorites.splice(index, 1);
    heart.style.filter = ""; // reset
  }

  // Save to localStorage
  localStorage.setItem("myfavorites", JSON.stringify(favorites));
  // window.location.href = "myfavorites.html";
}

     
document.addEventListener("DOMContentLoaded", () => {
  const sellerSteps = [
    {
      image: "images/screenshot (3).jpg",
      title: "BOOK APPOINTMENT",
      desc: "Get an inspection slot and decide where you'd like your car inspected.",
      step: "Step 1",
      linkText: "Book Here",
      bottom:true
    },
    {
      image: "images/screenshot (4).jpg",
      title: "INSPECTION",
      desc: "Meet our team at the appointment and get your car evaluated.",
      step: "Step 2",
       bottom:false
    },
    {
      image: "images/screenshot (5).jpg",
      title: "GET BEST OFFER",
      desc: "Receive the best price from verified buyers or auction results.",
      step: "Step 3",
      linkText: "See Offers",
       bottom:true
    },
    {
      image: "images/screenshot (6).jpg",
      title: "SELL & GET PAID",
      desc: "Accept the deal, hand over the keys, and get paid instantly.",
      step: "Step 5",
       bottom:false
    }
  ];

  const container = document.getElementById("sells");

  sellerSteps.forEach((item) => {
     const addMargin = (item.step === "Step 1" || item.step === "Step 3") ? "mt-3" : "";
    const card = `
      <div class="col-6 col-lg-3 col-md-6 mb-4 ">
        <div class="card seller-card border-0" style="width: 100%; height: 220px !important;">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title fw-bold">${item.title}</h5>
            <p class="card-text text-black px-0 mb-lg-2">${item.desc}</p>
            <div class="d-flex justify-content-between align-items-center card-bottom">
              <span class="fw-bold text-uppercase" >${item.step}</span>
             ${item.bottom ? `
  <a href="#" class="text-decoration-none text-secondary d-flex align-items-center gap-1 text-uppercase">
    ${item.linkText}
    <button class="scroll-btn mb-lg-1 text-black">
      <i class="bi bi-caret-right-square-fill fs-5"></i>
    </button>
  </a>
` : ''}

              
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
});
// Seller card 
 const stepsData = {
  sell: [
    { img: "images/screenshot (3).jpg", title: "BOOK APPOINTMENT", text: "Get an inspection slot and decide where you'd like your car inspected.", step: "Step 1", btnText: "Book Here" },
    { img: "images/screenshot (4).jpg", title: "180 INSPECTION POINT", text: "It’ll take no more than 25 minutes for our Inspectors to check your car.", step: "Step 2" },
    { img: "images/screenshot (5).jpg", title: "SELL YOUR CAR", text: "We’ll buy direct from you. Or you can put it up for Live Bidding, a win-win for you!", step: "Step 3", btnText: "Book Here" },
    { img: "images/screenshot (6).jpg", title: "GET PAID", text: "We’ll buy direct from you. Or you can put it up for Live Bidding, a win-win for you!", step: "Step 4" }
  ],
  buy: [
    { img: "images/screenshot (3).jpg", title: "BOOK APPOINTMENT", text: "Get an inspection slot and decide where you'd like your car inspected.", step: "Step 1", btnText: "Book Here" },
    { img: "images/screenshot (4).jpg", title: "180 INSPECTION POINT", text: "It’ll take no more than 25 minutes for our Inspectors to check your car.", step: "Step 2" },
    { img: "images/screenshot (5).jpg", title: "CHOOSE YOUR CAR", text: "Browse thousands of listings and find your dream car.", step: "Step 3", btnText: "Get Car Price" },
    { img: "images/screenshot (6).jpg", title: "GET PAID", text: "Finalize purchase securely and take your car home!", step: "Step 4" }
  ],
  bid: [
    { img: "images/screenshot (3).jpg", title: "REGISTER BID", text: "Sign up to start bidding on cars instantly.", step: "Step 1", btnText: "Register" },
    { img: "images/screenshot (4).jpg", title: "INSPECT CAR", text: "Check car details, reports, and inspection points before bidding.", step: "Step 2" },
    { img: "images/screenshot (5).jpg", title: "PLACE YOUR BID", text: "Enter your offer and compete with other buyers in real-time.", step: "Step 3", btnText: "Bid Now" },
    { img: "images/screenshot (6).jpg", title: "WIN & PAY", text: "If you win the bid, complete the payment and collect your car.", step: "Step 4" }
  ]
};

function renderCards(sectionId, data) {
  const container = document.getElementById(sectionId);
  
  container.innerHTML = data.map(item => `
    <div class="col-6 col-lg-3 col-md-6">
      <div class="card seller-card border-0 h-100">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${item.title}</h5>
          <p class="card-text flex-grow-1">${item.text}</p>
          <div class="d-flex justify-content-between align-items-center card-footer mt-lg-2  p-0 ${item.step === "Step 1" ? "ss2 mt-sm-4" : ""} ${item.step === "Step 3" ? "ss2 mt-sm-3" : ""}">
            <span class="step fw-bold text-uppercase ${item.step === "Step 1" ? " mt-2 mt-lg-0" : ""} ${item.step === "Step 3" ? " mt-2 mt-lg-0" : ""}">${item.step}</span>
            ${item.btnText ? `
              <a href="#" class="btn-link d-flex align-items-center gap-1 text-uppercase text-decoration-none mt-2 mt-lg-0">
                ${item.btnText} <i class="bi bi-caret-right-square-fill"></i>
              </a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// Initial render
renderCards("sell-cards", stepsData.sell);
renderCards("buy-cards", stepsData.buy);
renderCards("bid-cards", stepsData.bid);

// Tab switching
document.querySelectorAll(".nav-item-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-item-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".card-section").forEach(s => s.classList.add("d-none"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.remove("d-none");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});




        
const scrollContainer = document.getElementById('testimonialScroll');

// Dynamically calculate scroll amount based on screen width
function getScrollAmount() {
  if (window.innerWidth < 768) {
    return scrollContainer.offsetWidth; // Scroll full width for 1 item
  } else {
    return scrollContainer.offsetWidth / 4; // Scroll by 1/4 width (4 items in view)
  }
}

document.getElementById('scrollLeft').addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', () => {
  scrollContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});


  const carousel = document.querySelector('#bgImageCarousel');
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,    // 3 seconds auto-slide
    ride: 'carousel',
    wrap: false        // ❌ don't loop (stop at end)
  });

  // Optional: stop auto-slide after last slide
  carousel.addEventListener('slid.bs.carousel', function (e) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const lastIndex = totalSlides - 1;
    if (e.to === lastIndex) {
      bsCarousel.pause(); // 🛑 stop auto-slide after last
    }
  });

function updatePrice(slider) {
    const wrapper = slider.closest('.d-flex');
    const output = wrapper.querySelector('.price-value');

    const val = parseInt(slider.value);
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const percent = ((val - min) / (max - min)) * 100;

    // Set value text
    output.innerText = `RM${val.toLocaleString()}`;

    // Set background gradient
    slider.style.background = `linear-gradient(to right, #f4b000 ${percent}%, #ddd ${percent}%)`;
  }

  // Initialize all sliders on page load
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.price-slider').forEach(updatePrice);
  });

// offcanva


  


  // Seller card chaning
  const navItems = document.querySelectorAll('.nav-item-tab');
  const sections = document.querySelectorAll('.card-section');

  navItems.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      // Update nav active state
      navItems.forEach(item => item.classList.remove('active'));
      tab.classList.add('active');

      // Show only the targeted card section
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.add('active');
          section.classList.remove('d-none');
        } else {
          section.classList.remove('active');
          section.classList.add('d-none');
        }
      });
    });
  });


 
 
 
// bottom nav 


  // Its for Open the new File


