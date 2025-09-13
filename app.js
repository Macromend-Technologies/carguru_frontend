 document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function () {
      // Remove .active from all sidebar links
      document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
      // Add .active to the clicked link
      this.classList.add('active');
    });
  });

   document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
