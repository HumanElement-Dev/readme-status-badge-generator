const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const output = document.getElementById("output");

const colors = {
  active: "brightgreen",
  experimental: "orange",
  paused: "yellow",
  archived: "red"
};

generateBtn.addEventListener("click", () => {
  const project = document.getElementById("project").value || "project";
  const status = document.getElementById("status").value;
  const color = colors[status];

  const badge = `![status](https://img.shields.io/badge/status-${status}-${color})`;

  output.textContent = badge;
  copyBtn.hidden = false;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy to Clipboard"), 1500);
});
