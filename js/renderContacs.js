(async function () {
  const data = await loadKilasData();
  const info = document.getElementById("contactInfo");
  const list = document.getElementById("lecturerContacts");

  // ==========================
  // KETUA KELOMPOK
  // ==========================
  const k = data.kontak.ketua_kelompok;
  info.innerHTML = `
    <p><strong>Ketua Kelompok</strong></p>
    <p>${k.nama} (${k.nim})</p>
    <p class="small-text">WhatsApp: ${k.wa}</p>
    <p class="small-text">Email: ${k.email}</p>
    <p class="small-text">${k.catatan}</p>
  `;

  // ==========================
  // ANGGOTA KELOMPOK
  // ==========================
  data.kontak.anggota_kelompok.forEach((a) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>Anggota Kelompok</strong></p>
      <p>${a.nama}</p>
      <p class="small-text">Peran: ${a.peran}</p>
      <p class="small-text">WhatsApp: ${a.wa}</p>
      <p class="small-text">Email: ${a.email}</p>
    `;
    list.appendChild(card);
  });

  // ==========================
  // DOSEN PENGAMPU
  // ==========================
  data.kontak.dosen.forEach((d) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>Dosen Pengampu</strong></p>
      <p>${d.nama}</p>
      <p class="small-text">Mata Kuliah: ${d.mata_kuliah}</p>
      <p class="small-text">WhatsApp: ${d.wa}</p>
      <p class="small-text">Email: ${d.email}</p>
    `;
    list.appendChild(card);
  });
})();
