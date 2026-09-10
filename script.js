const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async () => {
  const text = "אני מנסה לדבר יותר בטבעיות.";
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Gekopieerd ✓";
    setTimeout(() => {
      copyBtn.textContent = "Kopieer Hebreeuws";
    }, 1800);
  } catch {
    copyBtn.textContent = "Kopiëren lukt niet";
  }
});
