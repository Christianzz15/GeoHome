// Data detail 10 rumah
const houseData = {
  1: {
    title: "Rumah Green Valley",
    img: "img/rumah1.jpg",
    lb: "90 m²",
    lt: "120 m²",
    kt: 3,
    km: 2,
    carport: "1 Mobil",
    listrik: "2200 Watt",
    air: "PDAM",
    score_k: 8,
    score_f: 9,
    score_b: 8,
    desc: "Rumah nyaman dengan lingkungan hijau, akses dekat sekolah, pasar, dan sangat aman dari banjir."
  },
  2: {
    title: "Rumah Emerald Park",
    img: "img/rumah2.jpg",
    lb: "110 m²",
    lt: "140 m²",
    kt: 3,
    km: 2,
    carport: "2 Mobil",
    listrik: "3500 Watt",
    air: "Sumur Jetpump",
    score_k: 9,
    score_f: 8,
    score_b: 9,
    desc: "Rumah modern minimalis dengan fasilitas umum lengkap dan tingkat keamanan sangat tinggi."
  },

  // tambahkan sampai 10 rumah...
};

function openModal(id) {
  const h = houseData[id];

  document.getElementById("modal-img").src = h.img;
  document.getElementById("modal-title").innerText = h.title;

  document.getElementById("spec-lb").innerText = h.lb;
  document.getElementById("spec-lt").innerText = h.lt;
  document.getElementById("spec-kt").innerText = h.kt;
  document.getElementById("spec-km").innerText = h.km;
  document.getElementById("spec-carport").innerText = h.carport;
  document.getElementById("spec-listrik").innerText = h.listrik;
  document.getElementById("spec-air").innerText = h.air;

  // progress bar
  document.getElementById("score-sec").style.width = (h.score_k * 10) + "%";
  document.getElementById("score-fas").style.width = (h.score_f * 10) + "%";
  document.getElementById("score-ban").style.width = (h.score_b * 10) + "%";

  document.getElementById("modal-desc").innerText = h.desc;

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
