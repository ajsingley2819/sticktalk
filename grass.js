// Dynamically generate a large number of grass blades for performance and maintainability
(function() {
  const NUM_BLADES = 300; // 100 blades for both mobile and desktop
  const grassContainer = document.querySelector('.grass-container');
  if (!grassContainer) return;

  // 12 unique blade SVG paths/colors, now a little taller (height 48)
  const bladeSvgs = [
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q7 28 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q3 28 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q8 18 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q2 18 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q6 40 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q4 40 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q9 36 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q1 36 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q8 47 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q2 47 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q5 34 5 0" stroke="#4a7c59" stroke-width="2" fill="none"/></svg>',
    '<svg viewBox="0 0 10 48"><path d="M5 48 Q5 18 5 0" stroke="#7bb661" stroke-width="2" fill="none"/></svg>'
  ];

  let bladesHtml = '';
  for (let i = 0; i < NUM_BLADES; i++) {
    bladesHtml += `<span class="blade">${bladeSvgs[i % 12]}</span>`;
  }
  grassContainer.innerHTML = bladesHtml;
})();
