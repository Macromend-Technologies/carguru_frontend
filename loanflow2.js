// *************************************************** Top Steps content change on click ***************************************************

const steps = document.querySelectorAll(".form-step");
const circles = document.querySelectorAll(".circle");
const stepGroups = document.querySelectorAll(".step-group");
const formTitle = document.getElementById("formTitle");
const formSubtext = document.getElementById("formSubtext");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const formLeft = document.getElementById("cicrleLeft");
const formRight = document.getElementById("cicrleRight");

const titles = [
  "We’ll need your Guarantor Details",
  "We’ll need his/her work info",
  "We’ll need his/her documents",
  "Your emergency contact",
  "Great! We’re almost done...",
  "It’s on the way!",
  
];

const subtexts = [
  "Simplifying Car Financing: Pre-Approval Made Easy",
  "Get Pre-Approved, Drive Sooner",
  "Let’s Fast-Track Your Car Loan!",
  "Simplifying Car Financing: Pre-Approval Made Easy",
"Pre-Approval, Minus the Pain. You’re almost there!",
  "We’ll let you know once Car Pre-Approval Loan Process is Complete",
  
];

const left=[
  'GUarantor Details',
  'GUarantor Details',
  
   'GUarantor Details',
   'Emergency Contect',
]
const right=[
  'Work Info',
  'Work Info',

  'Upload Docs',
  'Next',

]
// *************************************************** Top Steps content change on click ***************************************************
// ************************************** Car Loan Details start *****************************************************

//Car Loan Details for partial loan js
document.addEventListener("DOMContentLoaded", () => {
  const fullLoanBtn = document.getElementById("fullLoanBtn");
  const partialLoanBtn = document.getElementById("partialLoanBtn");
  const depositSection = document.getElementById("depositSection");
  const depositInput = document.getElementById("depositInput");

  if (!depositInput) {
    console.warn(
      'depositInput not found. Check that your element id is "depositInput"'
    );
    return;
  }

  // Show/hide logic (optional but handy)
  let payment_type = ""; // global variable

  fullLoanBtn?.addEventListener("click", () => {
    depositSection.style.display = "none";
    fullLoanBtn.classList.add("active-loan");
    partialLoanBtn?.classList.remove("active-loan");
    payment_type = String(fullLoanBtn.textContent).trim();

    logPaymentType();
  });

  partialLoanBtn?.addEventListener("click", () => {
    depositSection.style.display = "block";
    partialLoanBtn.classList.add("active-loan");
    fullLoanBtn?.classList.remove("active-loan");
    depositInput.focus();
    payment_type = String(partialLoanBtn.textContent).trim();

    logPaymentType();
  });

  function logPaymentType() {
    // console.warn("Payment Type: " + payment_type);

    const el = document.getElementById("summaryLoantype");
    if (el) {
      el.innerText = payment_type;
    } else {
      console.error("#summaryLoantype not found in DOM");
    }

    return payment_type;
  }

  // Parser + logger: strips non-numeric except dot, then parseFloat
  function parseDepositValue(rawValue) {
    // If your input contains "RM" or commas (e.g. "RM 20,000"), remove non-numeric (except dot)
    const numericOnly = String(rawValue).replace(/[^0-9.]/g, "");
    return numericOnly === "" ? 0 : parseFloat(numericOnly);
  }

  function logDeposit() {
    const raw = depositInput.value;
    const num = parseDepositValue(raw);
    // console.log("Deposit (raw):", raw, "| Deposit (number):", num);
    return num;
  }

  // Immediate logging on any change
  depositInput.addEventListener("input", logDeposit);
  // depositInput.addEventListener('change', logDeposit); // catches some non-input changes (paste, spinner)
  // depositInput.addEventListener('keyup', logDeposit);   // extra safety
  logDeposit();
  //Car Loan Details for partial loan js ends
  let originalprice = document
    .getElementById("originalprice")
    .innerText.replace(/[^0-9.]/g, "");
  originalprice = Number(originalprice);
  let handlingFee = document
    .getElementById("handlingFee")
    .innerText.replace(/[^0-9.]/g, "");
  let insuranceFee = document
    .getElementById("insuranceFee")
    .innerText.replace(/[^0-9.]/g, "");
  let roadTax = document
    .getElementById("roadTaxes")
    .innerText.replace(/[^0-9.]/g, "");
  let extraWarrantyValue = 0;
  const checkbox = document.getElementById("extraWarrantyCheckbox");
  const valueText = document.getElementById("extra_warranty");

  function updateExtraWarrantyValue() {
    if (checkbox.checked) {
      extraWarrantyValue = parseFloat(
        valueText.innerText.replace(/[^0-9.]/g, "")
      );
    } else {
      extraWarrantyValue = 0;
    }
    // console.log("Extra Warranty:", extraWarrantyValue);
    return extraWarrantyValue;
  }

  // Listen for changes
  checkbox.addEventListener("change", updateExtraWarrantyValue);
  valueText.addEventListener("input", function () {
    if (checkbox.checked) {
      updateExtraWarrantyValue();
    }
  });

  // If you want the latest value anytime:
  function getExtraWarrantyValue() {
    return extraWarrantyValue;
  }

  // Example: call this later to get updated value

  function formatRM(value) {
    return value.toLocaleString("en-MY", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  handlingFee = Number(handlingFee);
  insuranceFee = Number(insuranceFee);
  roadTax = Number(roadTax);
  const service = handlingFee + insuranceFee + roadTax;
  // console.log("Service:"+service);
  const carDiscount = Number(
    document.getElementById("carDiscount").innerText.replace(/[^0-9.]/g, "")
  );
  const bookingFee = Number(
    document.getElementById("bookingFee").innerText.replace(/[^0-9.]/g, "")
  );

  let grandtotal = 0;
  setInterval(() => {
    grandtotal = originalprice + (service + getExtraWarrantyValue());
    document.getElementById(
      "grandTotal"
    ).textContent = `RM ${grandtotal.toLocaleString()}`;
    //  console.log("Partial Price:"+logDeposit());
    document.getElementById(
      "pendingdeposit"
    ).textContent = `RM ${logDeposit()}`;
    document.getElementById("finalLoanAmount").textContent = `RM ${formatRM(
      grandtotal - (logDeposit() + carDiscount + bookingFee)
    )}`;
    document.querySelector("#summaryCash").textContent = `RM ${formatRM(
      logDeposit()
    )}`;
    document.querySelector("#summaryCarprice").textContent = `RM ${formatRM(
      originalprice
    )}`;
    document.querySelector("#summaryFinalamount").textContent = `RM ${formatRM(
      grandtotal - (logDeposit() + carDiscount + bookingFee)
    )}`;
  }, 1000);
});
// ************************************** Car Loan Details end *****************************************************
const formData = {}; // ✅ Declare at the top

const step4Form = document.getElementById("step4");
const step4Output = document.getElementById("outputSection");

step4Form ?.querySelector('button[type="submit"]')
  ?.addEventListener("click", function (e) {
    e.preventDefault();

    const getFileURL = (inputId) => {
      const input = document.getElementById(inputId);
      return input.files[0] ? URL.createObjectURL(input.files[0]) : "";
    };

    formData.step4 = {
      nricFront: getFileURL("nricFront"),
      nricBack: getFileURL("nricBack"),
      licenseFront: getFileURL("licenseFront"),
      licenseBack: getFileURL("licenseBack"),
      utilityBill: getFileURL("utilityBill"),
      bankStatement: getFileURL("bankStatement"),
    };

    document.getElementById("previewNricFront").src = formData.step4.nricFront;
    document.getElementById("previewNricBack").src = formData.step4.nricBack;
    document.getElementById("previewLicenseFront").src =
      formData.step4.licenseFront;
    document.getElementById("previewLicenseBack").src =
      formData.step4.licenseBack;
    document.getElementById("previewUtilityBill").src =
      formData.step4.utilityBill;
    document.getElementById("previewBankStatement").src =
      formData.step4.bankStatement;

    // step4Form.classList.add('d-none');
    step4Output.classList.remove("d-none");
    console.log("Step4" + JSON.stringify(formData.step4));
  });

function editStep4() {
  step4Form.classList.remove("d-none");
  step4Output.classList.add("d-none");
}

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

function selectLicense(choice) {
  document.getElementById("license").value = choice;
  document
    .getElementById("yesBtn")
    .classList.toggle("selected", choice === "Self Employed/Business");
  document
    .getElementById("noBtn")
    .classList.toggle("selected", choice === "Full-time Employee");
}
// For Active the button
function selectOption(button, group) {
  const groupEl = document.getElementById(group + "Group");
  groupEl
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  const hiddenInput = document.getElementById(group + "Value");
  if (hiddenInput) hiddenInput.value = button.innerText;
}

function handleSummaryDisplay(index) {
  // Always populate before reading HTML
  populatePersonalSummary();
  populateWorkSummary();

   populateUploadSummary();
   populateEmergencySummary();

  const personalHTML =
    document.getElementById("personalDetailsSummaryTemplate")?.innerHTML || "";
  const workHTML =
    document.getElementById("workDetailsSummaryTemplate")?.innerHTML || "";
//   const creditHTML =
//     document.getElementById("creditDetailsSummaryTemplate")?.innerHTML || "";
const uploadtHTML =
 document.getElementById('uploadDetailsSummaryTemplate')?.innerHTML || '';
const emergencytHTML =
 document.getElementById('emergencyDetailsSummaryTemplate')?.innerHTML || '';
}

function populatePersonalSummary() {
  const name = document.getElementById("nameInput")?.value.trim() || " ";
  const ic = document.getElementById("icInput")?.value.trim() || " ";
  const mobile = document.getElementById("mobileInput")?.value.trim() || " ";
  const email = document.getElementById("emailInput")?.value.trim() || " ";

  const addressInputs = document.querySelectorAll(".addressInput");
  const address = Array.from(addressInputs)
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join(", ");

  const city = document.getElementById("city")?.value.trim() || "";
  const state = document.getElementById("state")?.value.trim() || "";
  const postcode = document.getElementById("postcode")?.value.trim() || "";
  const license = document.getElementById("license")?.value.trim() || " ";
  
  const fullAddress = [address, city, state, postcode]
    .filter(Boolean)
    .join(", ");

  document
    .querySelectorAll("#summaryName")
    .forEach((el) => (el.textContent = name));
  document
    .querySelectorAll("#summaryIC")
    .forEach((el) => (el.textContent = ic));
  document
    .querySelectorAll("#summaryMobile")
    .forEach((el) => (el.textContent = mobile));
  document
    .querySelectorAll("#summaryEmail")
    .forEach((el) => (el.textContent = email));
  document
    .querySelectorAll("#summaryAddress")
    .forEach((el) => (el.textContent = fullAddress || " "));
  document
    .querySelectorAll("#summaryLicense")
    .forEach((el) => (el.textContent = license));
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const template = document.getElementById("personalDetailsSummaryTemplate");
  const clone = template.content.cloneNode(true);
  document.getElementById("summaryContainer").innerHTML = ""; // Clear old summary
  document.getElementById("summaryContainer").appendChild(clone);
  populatePersonalSummary();
});

function populateWorkSummary() {
  const occupation = document.getElementById("occupationInput")?.value.trim() || " ";

  const commitment = document.getElementById("monthSalaryInput")?.value.trim() || " ";

   const company = document.getElementById("CompanyInput")?.value.trim() || " ";
  const phone = document.getElementById("phoneInput")?.value.trim() || " ";
   const addressInputs = document.querySelectorAll(".companyaddressInput");
  const address = Array.from(addressInputs)
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join(", ");
 const city = document.getElementById("companyCity")?.value.trim() || "";
  const state = document.getElementById("CompanyState")?.value.trim() || "";
  const postcode = document.getElementById("companyPostcode")?.value.trim() || "";
  
   const fullAddress = [address, city, state, postcode]
    .filter(Boolean)
    .join(", ");
  
  document
    .querySelectorAll("#summaryOccupation")
    .forEach(
      (el) =>
        (el.textContent = occupation )
    );
  document
    .querySelectorAll("#summaryCommitment")
    .forEach((el) => (el.textContent = commitment ));
  document
    .querySelectorAll("#summaryCompany")
    .forEach(
      (el) =>
        (el.textContent = company)
    );
  document
    .querySelectorAll("#summaryAddress")
    .forEach(
      (el) =>
        (el.textContent = fullAddress || " ")
    );

  document
    .querySelectorAll("#summaryPhone")
    .forEach(
      (el) => (el.textContent = phone)
    );
  document
   
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







   function populateUploadSummary() {
  const nricFront = document.getElementById('nricFront').files[0];
  const nricBack = document.getElementById('nricBack').files[0];
  const licenseFront = document.getElementById('licenseFront').files[0];
  const licenseBack = document.getElementById('licenseBack').files[0];
  const utilityBill = document.getElementById('utilityBill').files[0];
  const bankStatement = document.getElementById('bankStatement').files[0];
  const payslip = document.getElementById('payslip').files[0];
  const ssmsection17= document.getElementById('ssmSection17').files[0];
  const ssmSection58= document.getElementById('ssmSection58').files[0];
const fulltimeBankStatement = document.getElementById('fulltimeBankStatement').files[0];
const fulltimePayslip = document.getElementById('fulltimepaySlip').files[0];
 const employeefinderform = document.getElementById("license")?.value.trim() || " ";

if (employeefinderform === 'Self Employed/Business') {
 
  document.querySelectorAll("#selftimeemployee").forEach(el => el.classList.remove("d-none"));
} else if (employeefinderform === 'Full-time Employee') {

  document.querySelectorAll("#fulltimeemployee").forEach(el => el.classList.remove("d-none"));
}
  // For each image in the summary, set the preview
  if(fulltimeBankStatement){
    document.querySelectorAll('#summarypreviewfulltimeBankStatement').forEach(el => {
      el.src = URL.createObjectURL(fulltimeBankStatement);
    });
  }
  if(fulltimePayslip){
    document.querySelectorAll('#summarypreviewfulltimePayslip').forEach(el => {
      el.src = URL.createObjectURL(fulltimePayslip);
    });
  }
  if(ssmsection17){
    document.querySelectorAll('#summarypreviewssmsection17').forEach(el => {
      el.src = URL.createObjectURL(ssmsection17);
    });
  }
  if(ssmSection58){
    document.querySelectorAll('#summarypreviewssmSection58').forEach(el => {
      el.src = URL.createObjectURL(ssmSection58);
    });
  }
  if (nricFront) {
    document.querySelectorAll('#summarypreviewNricFront').forEach(el => {
      el.src = URL.createObjectURL(nricFront);
    });
  }
  if (nricBack) {
    document.querySelectorAll('#summarypreviewNricBack').forEach(el => {
      el.src = URL.createObjectURL(nricBack);
    });
  }
  if (licenseFront) {
    document.querySelectorAll('#summarypreviewLicenseFront').forEach(el => {
      el.src = URL.createObjectURL(licenseFront);
    });
  }
  if (licenseBack) {
    document.querySelectorAll('#summarypreviewLicenseBack').forEach(el => {
      el.src = URL.createObjectURL(licenseBack);
    });
  }
  if (utilityBill) {
    document.querySelectorAll('#summarypreviewUtilityBill').forEach(el => {
      el.src = URL.createObjectURL(utilityBill);
    });
  }
  if (bankStatement) {
    document.querySelectorAll('#summarypreviewBankStatement').forEach(el => {
      el.src = URL.createObjectURL(bankStatement);
    });
  }
  if (payslip) {
    document.querySelectorAll('#summarypreviewBankPaySlip').forEach(el => {
      el.src = URL.createObjectURL(payslip);
    });
  }
  
}

   document.getElementById('nextBtn').addEventListener('click', () => {
      const template = document.getElementById('workDetailsSummaryTemplate');
      const template2=document.getElementById('personalDetailsSummaryTemplate');
      

      const clone = template.content.cloneNode(true);
      const clone2=template2.content.cloneNode(true);
      
      document.getElementById('summaryContainer2').innerHTML = ''; // Clear old summary
      document.getElementById('summaryContainer2').appendChild(clone2);
      document.getElementById('summaryContainer2').appendChild(clone);
     
      
  populateUploadSummary();
    });



    function populateEmergencySummary() {
  const name = document.getElementById("emergencyName1")?.value.trim() || " ";
  const name2 = document.getElementById("emergencyName2")?.value.trim() || " ";
  const relationship1 = document.getElementById("relationship1")?.value.trim() || " ";
  const relationship2 = document.getElementById("relationship2")?.value.trim() || " ";
  const mobile = document.getElementById("emergencymobile1")?.value.trim() || " ";
  const mobile2 = document.getElementById("emergencymobile2")?.value.trim() || " ";
  const email = document.getElementById("emergencyemail1")?.value.trim() || " ";
  const email2 = document.getElementById("emergencyemail2")?.value.trim() || " ";

  const addressInputs = document.querySelectorAll(".emergencyaddress1");
  const address = Array.from(addressInputs)
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join(", ");
  const addressInputs2 = document.querySelectorAll(".emergencyaddress2");
  const address2 = Array.from(addressInputs2)
    .map((input) => input.value.trim())
    .filter(Boolean)
    .join(", ");

  const city = document.getElementById("emergencyCity1")?.value.trim() || "";
  const city2 = document.getElementById("emergencyCity2")?.value.trim() || "";
  const state = document.getElementById("emergencyState1")?.value.trim() || "";
  const state2 = document.getElementById("emergencyState2")?.value.trim() || "";
  const postcode = document.getElementById("emergencyPincode1")?.value.trim() || "";
  const postcode2 = document.getElementById("emergencyPincode2")?.value.trim() || "";
  

  const fullAddress = [address, city, state, postcode]
    .filter(Boolean)
    .join(", ");
  const fullAddress2 = [address2, city2, state2, postcode2]
    .filter(Boolean)
    .join(", ");

  document
    .querySelectorAll("#summaryEmergencyName")
    .forEach((el) => (el.textContent = name));
  document
    .querySelectorAll("#summaryEmergencyRelationship")
    .forEach((el) => (el.textContent = relationship1));
  document
    .querySelectorAll("#summaryEmergencyMobile")
    .forEach((el) => (el.textContent = mobile));
  document
    .querySelectorAll("#summaryEmergencyEmail")
    .forEach((el) => (el.textContent = email));
  document
    .querySelectorAll("#summaryEmergencyAddress")
    .forEach((el) => (el.textContent = fullAddress || " "));
 
  document
    .querySelectorAll("#summaryEmergencyName2")
    .forEach((el) => (el.textContent = name2));
  document
    .querySelectorAll("#summaryEmergencyRelationship2")
    .forEach((el) => (el.textContent =relationship2));
  document
    .querySelectorAll("#summaryEmergencyMobile2")
    .forEach((el) => (el.textContent = mobile2));
  document
    .querySelectorAll("#summaryEmergencyEmail2")
    .forEach((el) => (el.textContent = email2));
  document
    .querySelectorAll("#summaryEmergencyAddress2")
    .forEach((el) => (el.textContent = fullAddress2 || " "));
 
}

  document.getElementById('nextBtn').addEventListener('click', () => {
      const template = document.getElementById('workDetailsSummaryTemplate');
      const template2=document.getElementById('personalDetailsSummaryTemplate');
  
      const template3=document.getElementById('uploadDetailsSummaryTemplate');
     

      const clone = template.content.cloneNode(true);
      const clone2=template2.content.cloneNode(true);
      const clone3=template3.content.cloneNode(true);
  
      
      document.getElementById('summaryContainer3').innerHTML = ''; // Clear old summary
      document.getElementById('summaryContainer3').appendChild(clone2);
      document.getElementById('summaryContainer3').appendChild(clone);
      document.getElementById('summaryContainer3').appendChild(clone3);
 
 
      
  populateEmergencySummary();
    });

 document.getElementById('nextBtn').addEventListener('click', () => {
      const template = document.getElementById('workDetailsSummaryTemplate');
      const template2=document.getElementById('personalDetailsSummaryTemplate');
      const template3=document.getElementById('uploadDetailsSummaryTemplate');
      const template4=document.getElementById('emergencyDetailsSummaryTemplate');
     

      const clone = template.content.cloneNode(true);
      const clone2=template2.content.cloneNode(true);
      const clone3=template3.content.cloneNode(true);
      const clone4=template4.content.cloneNode(true); 
  
      
      document.getElementById('summaryContainer4').innerHTML = ''; // Clear old summary
      document.getElementById('summaryContainer4').appendChild(clone2);
      document.getElementById('summaryContainer4').appendChild(clone);
      document.getElementById('summaryContainer4').appendChild(clone3);
      document.getElementById('summaryContainer4').appendChild(clone4);
 
 
      
  populateEmergencySummary();
    });

    
  document.getElementById('nextBtn').addEventListener('click', () => {
   
      const template = document.getElementById('workDetailsSummaryTemplate');
      const template2=document.getElementById('personalDetailsSummaryTemplate');
      const template5=document.getElementById('uploadDetailsSummaryTemplate');
      const template6=document.getElementById('emergencyDetailsSummaryTemplate');

      const clone = template.content.cloneNode(true);
      const clone2=template2.content.cloneNode(true);
       const clone5=template5.content.cloneNode(true);
       const clone6=template6.content.cloneNode(true);
      document.getElementById('summaryContainer5').innerHTML = ''; // Clear old summary
      document.getElementById('summaryContainer5').appendChild(clone2);
      document.getElementById('summaryContainer5').appendChild(clone);
      document.getElementById('summaryContainer5').appendChild(clone5);
      document.getElementById('summaryContainer5').appendChild(clone6);
      
  populateEmergencySummary();
    });

// *********************************************  Option Selection for highlight start *********************************************
function selectOption(button, group) {
    const groupEl = button.parentElement;
    Array.from(groupEl.children).forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(group + 'Value').value = button.textContent;
}

// *********************************************  Option Selection for highlight End *********************************************

// ********************************************* Right Side Card Start *********************************************

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
// ********************************************* Right Side Card End *********************************************

// ****************************************** Gradient lines start ******************************************
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


// ****************************************** Gradient lines End ******************************************