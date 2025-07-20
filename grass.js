// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  const NUM_BLADES = 600; // Double the amount
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG path templates (with placeholders for height and Q control points)
  const bladeTemplates = [
    {stroke: '#4a7c59', qx: 7, qy: 36},
    {stroke: '#7bb661', qx: 3, qy: 36},
    {stroke: '#4a7c59', qx: 8, qy: 24},
    {stroke: '#7bb661', qx: 2, qy: 24},
    {stroke: '#4a7c59', qx: 6, qy: 54},
    {stroke: '#7bb661', qx: 4, qy: 54},
    {stroke: '#4a7c59', qx: 9, qy: 48},
    {stroke: '#7bb661', qx: 1, qy: 48},
    {stroke: '#4a7c59', qx: 8, qy: 63},
    {stroke: '#7bb661', qx: 2, qy: 63},
    {stroke: '#4a7c59', qx: 5, qy: 44},
    {stroke: '#7bb661', qx: 5, qy: 24}
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    // Randomize height between 44 and 68 for natural variation
    const height = 44 + Math.floor(Math.random() * 25); // 44-68 px
    const t = bladeTemplates[i % 12];
    // Path comes to a point at the top (5 0)
    const svg = `<svg viewBox="0 0 10 ${height}"><path d="M5 ${height} Q${t.qx} ${t.qy} 5 0 T5 0" stroke="${t.stroke}" stroke-width="2" fill="none"/></svg>`;
    bladesHtml += `<span class="blade">${svg}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
