// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  // Use 300 blades for mobile (<=600px), 800 for desktop
  const isMobile = window.innerWidth <= 600;
  const NUM_BLADES = isMobile ? 300 : 800;
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG path templates (with placeholders for Q control points)
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

  const maxHeight = 108; // All blades start at y = maxHeight (taller)
  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    // Randomize tip height between 0 and 44 for natural variation (taller range)
    const tipY = Math.floor(Math.random() * 45); // 0-44 px from the top
    const t = bladeTemplates[i % 12];
    // Path starts at (5, maxHeight), curves to (t.qx, t.qy + tipY), ends at (5, tipY)
    const svg = `<svg viewBox="0 0 10 ${maxHeight}"><path d="M5 ${maxHeight} Q${t.qx} ${t.qy + tipY} 5 ${tipY} T5 ${tipY}" stroke="${t.stroke}" stroke-width="2" fill="none"/></svg>`;
    bladesHtml += `<span class="blade">${svg}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
