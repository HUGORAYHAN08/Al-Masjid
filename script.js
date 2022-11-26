const waktu = () => {
  const jam = document.getElementById("jam");
  const keterangan = document.getElementById("keterangan");
  let date = new Date();
  let format = `${date.getHours()}:${date.getMinutes()}`;
  // console.log(date);
  // console.log(format);
  jam.innerHTML = `<h1>${format}</h1>`;
  console.log(format);

  if (format >= "18:50" && format <= "23:59") {
    keterangan.innerHTML = `<h1>Sholat isyak</h1>`;
  } else if (format >= "00:01" && format <= "03:30") {
    keterangan.innerHTML = `<h1>Sholat isyak</h1>`;
  } else if (format >= "17:35" && format <= "18:49") {
    keterangan.innerHTML = `<h1> Sholat Magrib</h1>`;
  } else if (format >= "14:45" && format <= "17:34") {
    keterangan.innerHTML = `<h1>Sholat Ashar</h1>`;
  } else if (format >= "11:20" && format <= "14:44") {
    keterangan.innerHTML = `<h1>Sholat dhuhur</h1>`;
  } else if (format >= "3:40" && format <= "5:00") {
    keterangan.innerHTML = `<h1>Sholat subuh</h1>`;
  } else {
    keterangan.innerText = "Belum Waktunya Sholat";
  }
};
setInterval(waktu, 1000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
