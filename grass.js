// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  const NUM_BLADES = 1200; // Reduced from 2400 to 1200
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG paths/colors
  const bladeSvgs = [
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q7 16 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q3 16 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q8 10 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q2 10 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q6 24 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q4 24 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q9 20 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q1 20 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q8 27 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q2 27 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q5 18 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 28"><path d="M5 28 Q5 10 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>'
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    bladesHtml += `<span class="blade">${bladeSvgs[i % 12]}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
