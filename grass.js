// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  const NUM_BLADES = 600; // Double the amount
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG paths/colors, now even taller (height 64)
  const bladeSvgs = [
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q7 36 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q3 36 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q8 24 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q2 24 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q6 54 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q4 54 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q9 48 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q1 48 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q8 63 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q2 63 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q5 44 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 64"><path d="M5 64 Q5 24 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>'
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    bladesHtml += `<span class="blade">${bladeSvgs[i % 12]}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
