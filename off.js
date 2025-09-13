 const brands = [
    { img: "brand-1.png", name: "BMW", count: 3 },
    { img: "brand-2.png", name: "Daihatsu", count: 16 },
    { img: "brand-3.png", name: "Ford", count: 3 },
    { img: "brand-4.png", name: "Honda", count: 14 },
    { img: "brand-5.png", name: "Hyundai", count: 20 },
    { img: "brand-6.png", name: "Isuzu", count: 13 },
    { img: "brand-7.png", name: "Kia", count: 9 },
    { img: "brand-8.png", name: "Lexus", count: 26 },
    { img: "brand-9.png", name: "Mazda", count: 22 },
    { img: "brand-10.png", name: "Mercedes-Benz", count: 8 },
    { img: "brand-11.png", name: "Mini", count: 16 },
    { img: "brand-12.png", name: "Mitsubishi", count: 3 },
    { img: "brand-13.png", name: "Naza", count: 14 },
    { img: "brand-14.png", name: "Nissan", count: 20 },
    { img: "brand-15.png", name: "Perodua", count: 12 },
    { img: "brand-16.png", name: "Peugeot", count: 8 },
    { img: "brand-17.png", name: "Proton", count: 10 },
    { img: "brand-18.png", name: "Renault", count: 21 },
    { img: "brand-19.png", name: "Subaru", count: 11 },
    { img: "brand-20.png", name: "Suzuki", count: 6 },
    { img: "brand-21.png", name: "Toyota", count: 17 },
    { img: "brand-22.png", name: "Volkswagen", count: 14 }
  ];

  const brandContainer = document.getElementById("brandContainer");

  brandContainer.innerHTML = brands.map(brand => `
    <div class="col brand-item">
      <img src="images/${brand.img}" class="brand-logo" alt="${brand.name}">
      <div class="brand-label">${brand.name} (${brand.count})</div>
    </div>
  `).join('');

