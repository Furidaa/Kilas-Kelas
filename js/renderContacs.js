// Helper untuk mengubah nomor 08xx jadi link wa.me/62xxx
function buildWaLink(number) {
  if (!number) return "#";
  const digits = number.replace(/[^0-9]/g, "");
  if (!digits) return "#";

  // Kalau sudah mulai 62 biarkan, kalau 0 di depan ganti 62
  let normalized = digits;
  if (digits.startsWith("0")) {
    normalized = "62" + digits.slice(1);
  }
  return "https://wa.me/" + normalized;
}

(async function () {
  const data = await loadKilasData();
  const info = document.getElementById("contactInfo");
  const list = document.getElementById("lecturerContacts");

  // ==========================
  // KETUA KELOMPOK
  // ==========================
  const k = data.kontak.ketua_kelompok;
  info.classList.add("contact-card");
  info.innerHTML = `
    <div class="contact-header">
      <div>
        <p class="contact-name">${k.nama}</p>
        <p class="contact-role chip-role">Ketua Kelompok</p>
      </div>
    </div>
    <div class="contact-body">
      <p class="small-text">
        <span class="contact-label">WhatsApp</span>${k.wa}
      </p>
      <p class="small-text">
        <span class="contact-label">Email</span>${k.email}</p>
      <p class="small-text">${k.catatan || ""}</p>
    </div>
    <div class="contact-actions">
      <a href="${buildWaLink(k.wa)}" target="_blank" class="btn-contact">
        💬 Chat WhatsApp
      </a>
      <a href="mailto:${k.email}" class="btn-contact btn-contact-secondary">
        ✉️ Kirim Email
      </a>
    </div>
  `;

  // ==========================
  // ANGGOTA KELOMPOK
  // ==========================
  data.kontak.anggota_kelompok.forEach((a) => {
    const card = document.createElement("div");
    card.className = "card contact-card";
    card.innerHTML = `
      <div class="contact-header">
        <div>
          <p class="contact-name">${a.nama}</p>
          <p class="contact-role chip-role">Anggota Kelompok</p>
        </div>
      </div>
      <div class="contact-body">
        <p class="small-text">
          <span class="contact-label">WhatsApp</span>${a.wa}
        </p>
        <p class="small-text">
          <span class="contact-label">Email</span>${a.email}</p>
      </div>
      <div class="contact-actions">
        <a href="${buildWaLink(a.wa)}" target="_blank" class="btn-contact">
          💬 Chat WhatsApp
        </a>
        <a href="mailto:${a.email}" class="btn-contact btn-contact-secondary">
          ✉️ Kirim Email
        </a>
      </div>
    `;
    list.appendChild(card);
  });

  // ==========================
  // DOSEN PENGAMPU
  // ==========================
  data.kontak.dosen.forEach((d) => {
    const card = document.createElement("div");
    card.className = "card contact-card";
    card.innerHTML = `
      <div class="contact-header">
        <div>
          <p class="contact-name">${d.nama}</p>
          <p class="contact-role chip-role">Dosen Pengampu</p>
        </div>
        <span class="contact-mk">${d.mata_kuliah}</span>
      </div>
      <div class="contact-body">
        <p class="small-text">
          <span class="contact-label">WhatsApp</span>${d.wa}
        </p>
        <p class="small-text">
          <span class="contact-label">Email</span>${d.email}</p>
      </div>
      <div class="contact-actions">
        <a href="${buildWaLink(d.wa)}" target="_blank" class="btn-contact">
          💬 Chat WhatsApp
        </a>
        <a href="mailto:${d.email}" class="btn-contact btn-contact-secondary">
          ✉️ Kirim Email
        </a>
      </div>
    `;
    list.appendChild(card);
  });
})();

