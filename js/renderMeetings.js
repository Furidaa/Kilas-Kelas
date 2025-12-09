(async function () {
  const data = await loadKilasData();
  const container = document.getElementById("tableSchedule");

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
          <td>${mk.kode}</td>
          <td>${mk.judul}</td>
          <td>${mk.sks}</td>
          <td>${mk.hari}</td>
          <td>${mk.jam}</td>
          <td>${mk.mode}</td>
          <td>${mk.pertemuan_ke}</td>
          <td>${mk.platform}</td>
          <td>${mk.link ? `<a href="${mk.link}" target="_blank">Buka</a>` : "-"}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  `;

  container.appendChild(table);
})();

  `;
})();

