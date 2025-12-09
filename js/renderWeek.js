function getHariIndonesia(date) {
  const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  ];
  return hari[date.getDay()];
}

function formatTanggalIndonesia(date) {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];
  return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

(async function () {
  const data = await loadKilasData();
  const box = document.getElementById("weekSummary");
  const note = document.getElementById("weekNotice");

  const m = data.minggu_ini;

  // ini tetap berdasarkan data.json → pekan ke-20, periode akhir Desember, dll
  box.innerHTML = `
    <p><strong>Pekan ke-${m.pekan_ke}</strong></p>
    <p>Periode: ${m.periode}</p>
    <p class="small-text">${m.keterangan}</p>
  `;

  // ini yang otomatis ikut tanggal hari ini
  const today = new Date();
  const hariSekarang = getHariIndonesia(today);
  const tanggalSekarang = formatTanggalIndonesia(today);

  if (note) {
    note.textContent = `Hari ini: ${hariSekarang}, ${tanggalSekarang}`;
  }
})();
