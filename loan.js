function showStep(stepNumber) {
  console.log('Switching to step:', stepNumber);

  const circles = document.querySelectorAll('.step-circle');
  circles.forEach((circle, index) => {
    if (index === stepNumber - 1) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  for (let i = 1; i <= 5; i++) {
    const content = document.getElementById('step' + i);
    if (content) {
      if (i === stepNumber) {
        content.classList.remove('d-none');
        if(i === 5){
         document.getElementById("step5").classList.replace("d-none", "d-block");
    resizeCanvas();
        }
        if(i===2||i===3||i===4||i===5){
          document.getElementById('step1line').classList.add('d-none');
        }
      } else {
        content.classList.add('d-none');
      }
    } else {
      console.warn(`Missing div with id="step${i}"`);
    }
  }
}