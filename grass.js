// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  const NUM_BLADES = 300; // 100 blades for both mobile and desktop
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG paths/colors, now taller (height 40)
  const bladeSvgs = [
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q7 24 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q3 24 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q8 15 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q2 15 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q6 34 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q4 34 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q9 30 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q1 30 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q8 39 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q2 39 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q5 28 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 40"><path d="M5 40 Q5 15 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>'
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    bladesHtml += `<span class="blade">${bladeSvgs[i % 12]}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
