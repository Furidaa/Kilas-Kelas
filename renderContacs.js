(async function () {
  const data = await loadKilasData();
  const info = document.getElementById("contactInfo");
  const list = document.getElementById("lecturerContacts");

  const k = data.kontak.ketua_kelas;
  info.innerHTML = `
    <p><strong>Ketua Kelas</strong></p>
    <p>${k.nama} (${k.nim})</p>
    <p class="small-text">WhatsApp: ${k.wa}</p>
    <p class="small-text">Email: ${k.email}</p>
    <p class="small-text">${k.catatan}</p>
  `;

  data.kontak.dosen.forEach((d) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${d.mata_kuliah}</strong></p>
      <p>${d.nama}</p>
      <p class="small-text">WhatsApp: ${d.wa}</p>
      <p class="small-text">Email: ${d.email}</p>
    `;
    list.appendChild(card);
  });
})();
