const steps = document.querySelectorAll(".form-step");
const circles = document.querySelectorAll(".circle");
const stepGroups = document.querySelectorAll(".step-group");
const formTitle = document.getElementById("formTitle");
const formSubtext = document.getElementById("formSubtext");
const formLeft = document.getElementById("cicrleLeft");
const formRight = document.getElementById("cicrleRight");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const titles = [
  " Car Dealer Registration",
  "We’re almost there...",
  "Welcome to CARGURU",
  
];

const subtexts = [
  " Please complete the dealership registration process before proceeding further.",
  " One platform. Endless opportunities. Let’s drive success together",
  " We’ll let you know once we’ve done all the necessary company verification",
  
];

function handleFileSelect(input) {
  const file = input.files[0];
  const box = input.closest(".upload-box");
  const fileNameDiv = box.querySelector(".file-name") || createFileNameDiv(box);
  const info = box.querySelector(".upload-text");

  if (file) {
    info.classList.add("d-none");
    fileNameDiv.innerHTML = `<i class="fa-solid fa-circle-check me-1 text-success mt-2"></i> ${file.name}`;
  } else {
    fileNameDiv.innerHTML = "";
  }
}
function createFileNameDiv(box) {
  const div = document.createElement("div");
  div.className = "file-name mt-2 text-success small text-center";
  box.appendChild(div);
  return div;
}
// Output processing the pages
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  circles.forEach((circle, i) => circle.classList.toggle("active", i <= index));
  stepGroups.forEach((group, i) =>
    group.classList.toggle("active", i === Math.floor(index / 2))
  );

  formTitle.innerText = titles[index];
  formSubtext.innerText = subtexts[index];
  formLeft.innerText = (left[index] || "").toUpperCase();
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

  const personalHTML =
    document.getElementById("personalDetailsSummaryTemplate")?.innerHTML || "";
}

function populatePersonalSummary() {
  const cname = document.getElementById("companyName")?.value.trim() || "";
  const creg = document.getElementById("companyRegNo")?.value.trim() || "";
  const cemail = document.getElementById("companyEmail")?.value.trim() || "";
  const charge = document.getElementById("personInCharge")?.value.trim() || "";
 const summaryCTOS_file1 = document.getElementById('fileInput1').files[0];
const summaryCTOS_file2 = document.getElementById('fileInput2').files[0];
const nricFront = document.getElementById('nricFronts').files[0];
   document
    .querySelectorAll("#summaryCompanyName")
    .forEach((el) => (el.textContent = cname));
  document
    .querySelectorAll("#summaryCompanyReg")
    .forEach((el) => (el.textContent = creg));
  document
    .querySelectorAll("#summaryEmail")
    .forEach((el) => (el.textContent = cemail));
  document
    .querySelectorAll("#summaryCharge")
    .forEach((el) => (el.textContent = charge));
    document.querySelectorAll("#summaryFile1").forEach((el) => (el.textContent = summaryCTOS_file1 ? summaryCTOS_file1.name : ""));
    document.querySelectorAll("#summaryFile2").forEach((el) => (el.textContent = summaryCTOS_file2 ? summaryCTOS_file2.name : ""));
 if (nricFront) {
    document.querySelectorAll('#summarypreviewNricFronts').forEach(el => {
      el.src = URL.createObjectURL(nricFront);
    });
  }
 
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("personalDetailsSummaryTemplate");
  const clone = template.content.cloneNode(true);
  document.getElementById("summaryContainer").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer").appendChild(clone);
  populatePersonalSummary();
});

  document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("personalDetailsSummaryTemplate2");
  const clone = template.content.cloneNode(true);
  document.getElementById("summaryContainer2").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer2").appendChild(clone);
  populatePersonalSummary();
});


// Initial call

//  showStep(currentStep);
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