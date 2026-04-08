// Generate grass blades with a traveling wind-wave effect
(function() {
  const isMobile = window.innerWidth <= 600;
  const NUM_BLADES = isMobile ? 450 : 1600;
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  const colors = [
    '#4a7c59', '#5a8f69', '#3d6b4a', '#7bb661',
    '#6aaa50', '#3a6040', '#8fcc70', '#4e8a5e'
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Blade height: 35-65px, rooted at the bottom of the container
    const bladeH = Math.floor(Math.random() * 30) + 35;

    // Tip position: upper 10-55% of the blade height
    const tipY = Math.floor(bladeH * (0.10 + Math.random() * 0.45));

    // Control point: pulls the curve left or right for natural lean
    const qx = (Math.random() * 10) + 1;   // 1-11
    const qy = Math.floor(tipY + (bladeH - tipY) * 0.5);

    // Traveling wave: delay increases left→right so wind ripples across
    const waveDelay = ((i / NUM_BLADES) * 3.5 + (Math.random() * 0.4 - 0.2)).toFixed(2);
    const duration  = (2.5 + Math.random() * 1.5).toFixed(2);

    const svg = `<svg viewBox="0 0 12 ${bladeH}" preserveAspectRatio="none"><path d="M6 ${bladeH} Q${qx} ${qy} 6 ${tipY}" stroke="${color}" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>`;
    bladesHtml += `<span class="blade" style="height:${bladeH}px;animation-delay:${waveDelay}s;animation-duration:${duration}s">${svg}</span>`;
  }

  grassContainer.innerHTML = bladesHtml;
})();
