function selisihHari(tanggal) {
  const today = new Date();
  const due = new Date(tanggal);
  const diff = due - today;
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

  data.tugas.forEach((tugas) => {
    const sisa = selisihHari(tugas.tanggal_kumpul);
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

  // data untuk chart (hitung jumlah per level)
  const counts = { urgent: 0, high: 0, normal: 0, later: 0 };
  data.tugas.forEach((t) => {
    counts[levelFromDays(selisihHari(t.tanggal_kumpul))]++;
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
    bar.style.height = (counts[c.key] / maxVal) * 100 + "%";
    bar.innerHTML = `<span>${c.label}</span>`;
    chart.appendChild(bar);
  });
})();
