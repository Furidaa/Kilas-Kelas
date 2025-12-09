(async function () {
  const data = await loadKilasData();
  const box = document.getElementById("weekSummary");
  const note = document.getElementById("weekNotice");

  const m = data.minggu_ini;
  box.innerHTML = `
    <p><strong>Pekan ke-${m.pekan_ke}</strong></p>
    <p>Periode: ${m.periode}</p>
    <p>${m.keterangan}</p>
    <p style="margin-top:0.5rem;">Hari ini: <strong>${m.hari_ini}</strong>, ${m.tanggal_hari_ini}</p>
  `;
  
})();
