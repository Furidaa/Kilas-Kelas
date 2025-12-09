(async function () {
  const data = await loadKilasData();
  const wrap = document.getElementById("tableSchedule");

  const rows = data.jadwal_mk
    .map(
      (mk) => `
    <tr>
      <td>${mk.kode}</td>
      <td>${mk.judul}</td>
      <td>${mk.sks}</td>
      <td>${mk.hari}<br/><span class="small-text">${mk.jam}</span></td>
      <td>${mk.mode}<br/><span class="small-text">${mk.platform}</span></td>
      <td>Pertemuan ke-${mk.pertemuan_ke}</td>
      <td><a href="${mk.link}" target="_blank">Buka</a></td>
    </tr>`
    )
    .join("");

  wrap.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Kode</th>
          <th>Mata Kuliah</th>
          <th>SKS</th>
          <th>Jadwal</th>
          <th>Mode</th>
          <th>Pertemuan</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
})();
