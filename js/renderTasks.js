function selisihHari(tanggal, baseDate) {
  // baseDate: tanggal acuan (misalnya dari data.minggu_ini.tanggal_hari_ini)
  const due = new Date(tanggal);
  const diff = due - baseDate;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function levelFromDays(days) {
  if (days <= 3) return "urgent";
  if (days <= 7) return "high";
  if (days <= 15) return "normal";
  return "later";
}

(async function () {
  const data = await loadKilasData();
  const container = document.getElementById("taskList");
  const chart = document.getElementById("taskChart");

  // Gunakan tanggal dari minggu_ini sebagai tanggal acuan
  const baseDate = new Date(data.minggu_ini.tanggal_hari_ini);

  // ==========================
  // KARTU TUGAS
  // ==========================
  data.tugas.forEach((tugas) => {
    const sisa = selisihHari(tugas.tanggal_kumpul, baseDate);
    const level = levelFromDays(sisa);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${tugas.mata_kuliah}</strong></p>
      <p>${tugas.judul}</p>
      <p class="small-text">Deadline: ${tugas.tanggal_kumpul} (${sisa} hari lagi)</p>
      <p class="small-text">Catatan: ${tugas.catatan}</p>
    `;
    container.appendChild(card);
  });

  // ==========================
  // DATA UNTUK DIAGRAM
  // ==========================
  const counts = { urgent: 0, high: 0, normal: 0, later: 0 };

  data.tugas.forEach((t) => {
    const sisa = selisihHari(t.tanggal_kumpul, baseDate);
    const level = levelFromDays(sisa);
    counts[level]++;
  });

  const maxVal = Math.max(...Object.values(counts), 1);

  const config = [
    { key: "urgent", label: "ST", class: "level-urgent" },
    { key: "high", label: "T", class: "level-high" },
    { key: "normal", label: "N", class: "level-normal" },
    { key: "later", label: "L", class: "level-later" }
  ];

  config.forEach((c) => {
    const bar = document.createElement("div");
    bar.className = `bar ${c.class}`;
    // Kalau count 0, beri sedikit tinggi supaya tetap kelihatan
    const height = counts[c.key] === 0 ? 6 : (counts[c.key] / maxVal) * 100;
    bar.style.height = height + "%";
    bar.innerHTML = `<span>${c.label}</span>`;
    chart.appendChild(bar);
  });
})();

