const steps = document.querySelectorAll(".form-step");
const circles = document.querySelectorAll(".circle");
const stepGroups = document.querySelectorAll(".step-group");
const formTitle = document.getElementById("formTitle");
const formSubtext = document.getElementById("formSubtext");
const formLeft = document.getElementById("cicrleLeft");
const formMiddle = document.getElementById("cicrleCenter");
const formRight = document.getElementById("cicrleRight");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const titles = [
  "Carguru offers the best price",
  "Carguru offers the best price",
  "Carguru offers the best price",
    "Carguru offers the best price",
  "Appointment Confirmed !",
];

const subtexts = [
  " Enter your car details to get an instant price estimate and schedule a hassle-free inspection.",
  " Enter your car details to get an instant price estimate and schedule a hassle-free inspection.",
  " Enter your car details to get an instant price estimate and schedule a hassle-free inspection.",
    " Enter your car details to get an instant price estimate and schedule a hassle-free inspection.",
  "Your appointment details  has been sent to you. Kindly arrive on time as appointment can be held for 15 minutes.",
];

const left=[
  'CAR DETAILS',
  'CAR DETAILS',
  'CAR DETAILS',

 
  
]
const middle=[
  
  'CAR PRICE',
  'CAR PRICE',
  'CAR PRICE',
 
 
]
const right=[
  
  
  'CAR INSPECTION',
   'CAR INSPECTION',
    'CAR INSPECTION',
     
 
]
document.addEventListener("DOMContentLoaded", function () {
  const fields = [
    "make", "model", "year", "variant",
    "engine", "transmission", "mileage", "region",
    "mobile", "plate", "whatsapp"
  ];

  // Disable all except first
  fields.slice(1).forEach(id => {
    let el = document.getElementById(id);
    if (el) el.disabled = true;
  });

  // Step by step enabling
  fields.forEach((id, index) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener("change", function () {
      if (el.value !== "" && el.value.indexOf("Select") === -1) {
        let next = document.getElementById(fields[index + 1]);
        if (next) next.disabled = false;
      }
    });
  });
});
// Output processing the pages
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  circles.forEach((circle, i) => circle.classList.toggle("active", i <= index));
  stepGroups.forEach((group, i) =>
    group.classList.toggle("active", i === Math.floor(index / 3))
  );

  formTitle.innerText = titles[index];
  formSubtext.innerText = subtexts[index];
  formLeft.innerText = (left[index] || "").toUpperCase();
  formMiddle.innerText = (middle[index] || "").toUpperCase();
  formRight.innerText = (right[index] || "").toUpperCase();

  prevBtn.disabled = index === 0;
  nextBtn.innerText = index === steps.length - 1 ? "Finish" : "Next";

  handleSummaryDisplay(index);

   if (!left[index] && !right[index]) {
    const circleDiv = document.getElementById("circlelable" ); // adjust id format
    if (circleDiv) circleDiv.classList.add("d-none");
  }
}


function changeStep(step) {
  currentStep += step;
  showStep(currentStep);
}


function handleSummaryDisplay(index) {
  // Always populate before reading HTML
  populatePersonalSummary();
  populateWorkSummary();
  populateCreditSummary();

  const personalHTML =
    document.getElementById("personalDetailsSummaryTemplate")?.innerHTML || "";
  const workHTML =
    document.getElementById("workDetailsSummaryTemplate")?.innerHTML || "";
  const creditHTML =
    document.getElementById("creditDetailsSummaryTemplate")?.innerHTML || "";

}

function populatePersonalSummary() {
  const make = document.getElementById("make")?.value || "";
  const model = document.getElementById("model")?.value || "";
  const year = document.getElementById("year")?.value || "";
  const variant = document.getElementById("variant")?.value.trim() || "";
  const engine = document.getElementById("engine")?.value.trim() || "";
  const transmission = document.getElementById("transmission")?.value.trim() || "";
  const mileage = document.getElementById("mileage")?.value.trim() || "";
  const region = document.getElementById("region")?.value.trim() || "";
  const mobile = document.getElementById("mobile")?.value.trim() || "";
  const plate = document.getElementById("plate")?.value.trim() || "";

  // Helper to ignore default placeholders
  function validValue(value, defaultText) {
    if (!value || value === defaultText) return "";
    return value;
  }

  const makeVal = validValue(make, "Select Make");
  const modelVal = validValue(model, "Select Model");
  const yearVal = validValue(year, "Select Year");

  const summaryCar = [yearVal, makeVal, modelVal].filter(Boolean).join(" ");
  const summaryModel = [variant, engine, transmission].filter(Boolean).join(" ");
  const summaryKm = [mileage ? mileage + " km" : "", region].filter(Boolean).join(" | ");
  const summaryPlate = plate ? "Plate Number: " + plate : "";

  document.querySelectorAll("#summaryCardetails").forEach((el) => (el.textContent = summaryCar || "-"));
  document.querySelectorAll("#summarymodel").forEach((el) => (el.textContent = summaryModel || "-"));
  document.querySelectorAll("#summarykilometer").forEach((el) => (el.textContent = summaryKm || "-"));
  document.querySelectorAll("#summaryPlatenumber").forEach((el) => (el.textContent = summaryPlate || "-"));
}



document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("personalDetailsSummaryTemplate");
  const clone = template.content.cloneNode(true);
  document.getElementById("summaryContainer").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer").appendChild(clone);
  populatePersonalSummary();
});

//upload ctos images
// work info 
document.getElementById("showButton").addEventListener("click", () => {
  document.getElementById("incomeField").classList.toggle("d-none");
});

document.getElementById('showuploadctos').addEventListener('click',()=>{
  document.getElementById('upload_ctos').classList.remove('d-none');
  document.getElementById('cto_file_container').classList.remove('d-none');
})
document.getElementById('hideuploadctos').addEventListener('click',()=>{
  document.getElementById('upload_ctos').classList.add('d-none');
  
})

  const fileInput = document.getElementById('fileInput');
  const previewBox = document.getElementById('previewBox');
  const fileNameEl = document.getElementById('fileName');
  const deleteFile = document.getElementById('deleteFile');
  const cto_alert=document.getElementById('cto_alert');
  const upload_ctos=document.getElementById('summaryCTOS_file'); 


  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file && file.type === "application/pdf") {
      fileNameEl.textContent = file.name;
    
      cto_alert.classList.remove('d-none');
      previewBox.style.display = 'flex';
     
    } else {
      cto_alert.classList.remove('d-none');
    }
  });


  deleteFile.addEventListener('click', () => {
    fileInput.value = '';
    cto_alert.classList.add('d-none');
    previewBox.style.display = 'none';
  });


let selectedRate = "";

function populateWorkSummary() {

 const buttons = document.querySelectorAll(".left-buttons button");
    const highlight = document.querySelector(".highlight");
    const rows = document.querySelectorAll(".valuation-row");
    const rowHeight = 70;
    // let selectedRate = "";

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        rows.forEach(r => r.classList.remove("active"));

        const index = parseInt(btn.dataset.index);
        highlight.style.display = "block";
        highlight.style.top = `${index * rowHeight}px`;
        rows[index].classList.add("active");

        selectedRate = btn.dataset.rate;
            document
    .querySelectorAll("#finalValue")
    .forEach((el) => (el.textContent = selectedRate + "*"));
      });
    });


}


document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("workDetailsSummaryTemplate");
  const template2 = document.getElementById("personalDetailsSummaryTemplate");
  const clone = template.content.cloneNode(true);
  const clone2 = template2.content.cloneNode(true);
  document.getElementById("summaryContainer1").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer1").appendChild(clone2);
  document.getElementById("summaryContainer1").appendChild(clone);

  populateWorkSummary();
});

 
function populateCreditSummary() {
    // const optCentre = document.getElementById('optCentre');
    const optCentre=document.getElementById('optCentre');
  const optMyLoc = document.getElementById('optMyLoc');
  const centre = document.getElementById('form-inspection ');
  const myloc = document.getElementById('form-mylocation');
  const wrapForm = document.getElementById('wrapForm');
  const wrapSummary = document.getElementById('wrapSummary');
  const btnBook = document.getElementById('btnBook');
  const btnEdit = document.getElementById('btnEdit');  
  
  const checkedOption = document.querySelector('input[name="mode"]:checked');
// console.log("Selected:", checkedOption.value);

}
function initInspectionStep(stepEl) {
  const optCentre = stepEl.querySelector('#optCentre');
  const optMyLoc = stepEl.querySelector('#optMyLoc');
  const centre = stepEl.querySelector('#form-inspection');
  const myloc = stepEl.querySelector('#form-mylocation');
  const wrapForm = stepEl.querySelector('#wrapForm');
  const wrapSummary = stepEl.querySelector('#wrapSummary');
  const btnBook = stepEl.querySelector('#nextBtn');
  const btnEdit = stepEl.querySelector('#btnEdit');

  // toggle forms
  function swap() {
    if (optCentre.checked) {
      centre.classList.remove('hidden');
      myloc.classList.add('hidden');
    } else {
      myloc.classList.remove('hidden');
      centre.classList.add('hidden');
    }
  }

  optCentre.addEventListener('change', swap);
  optMyLoc.addEventListener('change', swap);
  swap(); // initial

  function formatTimeToDot(t) {
    if (!t) return '';
    return t.replace(/:(?=\d{2})/, '.').replace(/\s+/g, '');
  }

  if (btnBook) {
    btnBook.addEventListener('click', () => {
      let locationText = '';
      let dateText = '';
      let timeText = '';

      if (optCentre.checked) {
        const loc = stepEl.querySelector('#centreLocation');
        locationText = loc.options[loc.selectedIndex].text.trim();

        const d = stepEl.querySelector('#centreDate');
        dateText = d.options[d.selectedIndex].text.trim();

        const t = stepEl.querySelector('#centreTime');
        timeText = formatTimeToDot(t.options[t.selectedIndex].text.trim());

      } else {
        const addr1 = (stepEl.querySelector('#addr1').value || '').trim();
        const addr2 = (stepEl.querySelector('#addr2').value || '').trim();
        const city = stepEl.querySelector('#city').value.trim();
        const state = stepEl.querySelector('#state').value.trim();
        const postcode = (stepEl.querySelector('#postcode').value || '').trim();

        const parts = [];
        if (addr1) parts.push(addr1);
        if (addr2) parts.push(addr2);
        const tail = [postcode, city, state].filter(Boolean).join(' ');
        locationText = parts.length ? parts.join(', ') + (tail ? ', ' + tail : '') : tail;

        const d = stepEl.querySelector('#myDate');
        dateText = d.options[d.selectedIndex].text.trim();

        const t = stepEl.querySelector('#myTime');
        timeText = formatTimeToDot(t.options[t.selectedIndex].text.trim());

      }
       document
    .querySelectorAll("#summaryinspectionLocation")
    .forEach((el) => (el.textContent = locationText || "-"));

  document
    .querySelectorAll("#summaryinspectionDate")
    .forEach((el) => (el.textContent = dateText || "-"));

  document
    .querySelectorAll("#summaryinspectionTime")
    .forEach((el) => (el.textContent = timeText || "-"));

      wrapForm.classList.add('hidden');
      wrapSummary.classList.remove('hidden');
      wrapSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      wrapSummary.classList.add('hidden');
      wrapForm.classList.remove('hidden');
      wrapForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}

// Initialize all steps
document.querySelectorAll('.form-step.car-inspection').forEach(step => {
  initInspectionStep(step);
});



function populateLoanSummary() {
  setTimeout(() => {
    document.querySelectorAll("#summaryLoantype").textContent = payment_type;
    document.querySelectorAll("#summaryCash").textContent = `RM ${formatRM(
      logDeposit()
    )|| " "} `;
    document.querySelectorAll("#summaryCarprice").textContent = `RM ${formatRM(
      originalprice
    ) || " "} `;
    document.querySelectorAll(
      "#summaryFinalamount"
    ).textContent = `RM ${formatRM(
      grandtotal - (logDeposit() + carDiscount + bookingFee)
    ) || " "} `;
  }, 5000); // checks after 5 seconds
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("workDetailsSummaryTemplate");
  const template2 = document.getElementById("personalDetailsSummaryTemplate");
  const template3 = document.getElementById("creditDetailsSummaryTemplate");
  
  const clone = template.content.cloneNode(true);
  const clone2 = template2.content.cloneNode(true);
  const clone3 = template3.content.cloneNode(true);

  document.getElementById("summaryContainer2").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer2").appendChild(clone2);
  document.getElementById("summaryContainer2").appendChild(clone);
  document.getElementById("summaryContainer2").appendChild(clone3);
  

  // populateCreditSummary();

  populateLoanSummary();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("workDetailsSummaryTemplate");
  const template2 = document.getElementById("personalDetailsSummaryTemplate");
  const template3 = document.getElementById("creditDetailsSummaryTemplate");
  
  const clone = template.content.cloneNode(true);
  const clone2 = template2.content.cloneNode(true);
  const clone3 = template3.content.cloneNode(true);

  document.getElementById("summaryContainer5").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer5").appendChild(clone2);
  document.getElementById("summaryContainer5").appendChild(clone);
  document.getElementById("summaryContainer5").appendChild(clone3);
  

  // populateCreditSummary();

  populateLoanSummary();
});

function attachConfirmListener() {
  const confirmBtn = document.getElementById('confirmBtn');
  if (!confirmBtn) {
    console.warn('confirmBtn not found yet. Retrying...');
    setTimeout(attachConfirmListener, 500); // try again in 0.5s
    return;
  }

  // prevent duplicate binding
  if (confirmBtn.dataset.bound === "true") return;
  confirmBtn.dataset.bound = "true";

  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();

    try {
      // ----- Personal -----
      const ids = ['make','model','year','variant','engine','transmission','mileage','region','mobile','plate'];
      const personal = {};
      ids.forEach(id => {
        const el = document.getElementById(id);
        personal[id] = el ? (el.value ?? el.textContent ?? '') : '';
      });

      // ----- Work -----
      let selRate = window.selectedRate || '';
      if (!selRate) {
        const activeBtn = document.querySelector('.left-buttons button.active');
        if (activeBtn) selRate = activeBtn.dataset?.rate || activeBtn.textContent.trim();
      }
      if (!selRate) {
        selRate = (document.getElementById('finalValue')?.textContent || '').replace('*','').trim();
      }
      const work = { selectedRate: selRate };

      // ----- Credit -----
      let inspectionLocation = document.getElementById('summaryinspectionLocation')?.textContent?.trim() || '';
      let inspectionDate = document.getElementById('summaryinspectionDate')?.textContent?.trim() || '';
      let inspectionTime = document.getElementById('summaryinspectionTime')?.textContent?.trim() || '';

      const credit = { inspectionLocation, inspectionDate, inspectionTime };

      // ----- Save -----
      const formData = { personal, work, credit, savedAt: new Date().toISOString() };

      console.log("✅ Saving to localStorage:", formData);
      localStorage.setItem("formData", JSON.stringify(formData));

     setTimeout(() => {
  window.location.href = "myappointment.html";
}, 3000);
    } catch (err) {
      console.error("❌ Error saving formData", err);
      alert("Error saving data — check console.");
    }
  });
}

// Start it after DOM loads
document.addEventListener("DOMContentLoaded", attachConfirmListener);




// Initial call
function selectOption(button, group) {
    const groupEl = button.parentElement;
    Array.from(groupEl.children).forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(group + 'Value').value = button.textContent;
}

function changeCard() {
    // Hide both cards
    document.getElementById("cardGoodNews").classList.remove("show");
    document.getElementById("cardAdditionalInfo").classList.remove("show");

  
    if(true){
      document.getElementById("cardGoodNews").classList.add("show")
    }
}
showStep(currentStep);

function showInfoCard() {
  const card = document.querySelector('.info-card');
  card.style.display = 'block'; // Ensure it's in the DOM
  setTimeout(() => {
    card.classList.add('show');
  }, 10); // Small delay so transition runs
}

function hideInfoCard() {
  const card = document.querySelector('.info-card');
  card.classList.remove('show');
  setTimeout(() => {
    card.style.display = 'none';
  }, 500); // Match transition duration
}

document.addEventListener("DOMContentLoaded", () => {
  function updateGradientLines() {
    document.querySelectorAll(".form-step").forEach(form => {
      const gradient = form.querySelector(".gradient-line-side");
      if (!gradient) return;

      const formHeight = form.offsetHeight;

      // Starting point = 22% of this form's height
      const start = formHeight * 0;

      gradient.style.top = start + "px";
      gradient.style.height = (formHeight - start) + "px";
    });
  }

  // Run on load and resize
  updateGradientLines();
  window.addEventListener("resize", updateGradientLines);

  // Optional: update if content changes dynamically
  const observer = new MutationObserver(updateGradientLines);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});

document.addEventListener("DOMContentLoaded", () => {
  function updateGradientLines() {
    document.querySelectorAll(".summary-details").forEach(form => {
      const gradient = form.querySelector(".gradient-line-side1");
      if (!gradient) return;

      const formHeight = form.offsetHeight;

      // Starting point = 22% of this form's height
      const start = formHeight * 0;

      gradient.style.top = start + "px";
      gradient.style.height = (formHeight - start) + "px";
    });
  }

  // Run on load and resize
  updateGradientLines();
  window.addEventListener("resize", updateGradientLines);

  // Optional: update if content changes dynamically
  const observer = new MutationObserver(updateGradientLines);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});


document.addEventListener("DOMContentLoaded", () => {
  function updateGradientLines() {
    document.querySelectorAll(".form-step").forEach(form => {
      const gradient = form.querySelector(".gradient-line-side-out");
      if (!gradient) return;

      const formHeight = form.offsetHeight;

      // Starting point = 22% of this form's height
      const start = formHeight * 0;

      gradient.style.top = start + "px";
      gradient.style.height = (formHeight - start) + "px";
    });
  }

  // Run on load and resize
  updateGradientLines();
  window.addEventListener("resize", updateGradientLines);

  // Optional: update if content changes dynamically
  const observer = new MutationObserver(updateGradientLines);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});

    // Submit
    document.getElementById("submitBtn").addEventListener("click", () => {
      if (!selectedRate) {
        alert("Please select your car condition first!");
        return;
      }
      document.getElementById("formSection").style.display = "none";
      document.getElementById("resultSection").style.display = "block";
      document.getElementById("finalValue").textContent = selectedRate + "*";
    });

    // Edit
    document.getElementById("editBtn").addEventListener("click", () => {
      document.getElementById("resultSection").style.display = "none";
      document.getElementById("formSection").style.display = "block";
    });




