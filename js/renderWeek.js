(async function () {
  const data = await loadKilasData();
  const box = document.getElementById("weekSummary");
  const note = document.getElementById("weekNotice");

  const m = data.minggu_ini;

  box.innerHTML = `
    <p><strong>Pekan ke-${m.pekan_ke}</strong></p>
    <p>Periode: ${m.periode}</p>
    <p class="small-text">${m.keterangan}</p>
  `;

  if (note) {
    note.textContent = `Hari ini: ${m.hari_ini}, ${m.tanggal_hari_ini}`;
  }
})();
