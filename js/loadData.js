let KILAS_DATA = null;

async function loadKilasData() {
  if (KILAS_DATA) return KILAS_DATA;
  const res = await fetch("data.json?v=" + Date.now());
  KILAS_DATA = await res.json();
  return KILAS_DATA;
}
