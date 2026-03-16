// data.js : injecte les chiffres depuis le CSV
async function loadChiffres() {
  const response = await fetch('/assets/csv/data.csv');
  const text = await response.text();
  const lines = text.trim().split('\n');
  const data = lines.slice(1).map(line => {
    const [label, value] = line.split(';');
    return { label, value: parseInt(value, 10) };
  });

  const container = document.getElementById('encart-chiffres');
  container.innerHTML = data.map((item, idx) => `
    <div class="encart-chiffre">
      <span class="encart-chiffre-value" data-count="${item.value}">0</span>
      <span class="encart-chiffre-label">${item.label}</span>
    </div>
  `).join('');

  animateChiffres();
}

function animateChiffres() {
  document.querySelectorAll('.encart-chiffre-value').forEach(span => {
    const target = +span.getAttribute('data-count');
    let current = 0;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      span.textContent = Math.floor(progress * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        span.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  });
}

window.addEventListener('DOMContentLoaded', loadChiffres);
