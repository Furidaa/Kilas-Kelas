let KILAS_DATA = null;

async function loadKilasData() {
  // kalau sudah pernah dimuat, langsung pakai ulang
  if (KILAS_DATA) return KILAS_DATA;

  try {
    const res = await fetch("data.json?v=" + Date.now());

    if (!res.ok) {
      console.error("Gagal memuat data.json", res.status, res.statusText);
      throw new Error("Gagal memuat data.json");
    }

    KILAS_DATA = await res.json();
    return KILAS_DATA;
  } catch (err) {
    console.error("Error saat memuat / parsing data.json:", err);
    throw err;
  }
}
