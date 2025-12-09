// renderMeetings.js
// Mengisi bagian "Jadwal & Informasi Pertemuan Mata Kuliah"

(async function () {
  try {
    const data = await loadKilasData();
    const container = document.getElementById("tableSchedule");
    if (!container) {
      console.error("Elemen #tableSchedule tidak ditemukan di halaman.");
      return;
    }

    // Pastikan data.jadwal_mk ada dan berupa array
    if (!data.jadwal_mk || !Array.isArray(data.jadwal_mk)) {
      console.error("data.jadwal_mk tidak ditemukan atau bukan array.", data);
      container.innerHTML = `<p class="small-text">Jadwal mata kuliah belum tersedia.</p>`;
      return;
    }

    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Kode</th>
          <th>Mata Kuliah</th>
          <th>SKS</th>
          <th>Hari</th>
          <th>Jam</th>
          <th>Mode</th>
          <th>Pertemuan</th>
          <th>Platform / Ruang</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        ${data.jadwal_mk
          .map(
            (mk) => `
          <tr>
            <td>${mk.kode || "-"}</td>
            <td>${mk.judul || "-"}</td>
            <td>${mk.sks != null ? mk.sks : "-"}</td>
            <td>${mk.hari || "-"}</td>
            <td>${mk.jam || "-"}</td>
            <td>${mk.mode || "-"}</td>
            <td>${mk.pertemuan_ke != null ? mk.pertemuan_ke : "-"}</td>
            <td>${mk.platform || "-"}</td>
            <td>
              ${
                mk.link
                  ? `<a href="${mk.link}" target="_blank" rel="noopener noreferrer">Buka</a>`
                  : "-"
              }
            </td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    `;

    container.innerHTML = "";
    container.appendChild(table);
  } catch (err) {
    console.error("Gagal merender jadwal pertemuan:", err);
    const container = document.getElementById("tableSchedule");
    if (container) {
      container.innerHTML =
        '<p class="small-text">Terjadi kesalahan saat memuat jadwal pertemuan.</p>';
    }
  }
})();
