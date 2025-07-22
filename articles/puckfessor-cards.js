// This script will scan the puckfessor/ folder, extract the first image, title, and subject from each HTML file, and generate article cards dynamically.
(async function() {
  const articlesFolder = 'puckfessor/';
  // List of article HTML files (manually listed for now, can be automated with server-side or build tooling)
  const articleFiles = [
    'Example Document.html'
  ];
  const cardContainer = document.getElementById('article-cards');
  if (!cardContainer) return;
  for (const file of articleFiles) {
    try {
      const res = await fetch(articlesFolder + file);
      if (!res.ok) continue;
      const text = await res.text();
      // Parse HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      // Get first image
      const img = doc.querySelector('img');
      const imgSrc = img ? articlesFolder + file.replace(/[^/]+$/, '') + img.getAttribute('src') : '';
      // Get title and subject
      const title = doc.querySelector('h1')?.textContent || file;
      const subject = doc.querySelector('h2')?.textContent || '';
      // Create card
      const card = document.createElement('a');
      card.className = 'uploaded-article-card';
      card.href = articlesFolder + file;
      card.target = '_blank';
      card.style.backgroundImage = imgSrc ? `url('${imgSrc}')` : '';
      card.innerHTML = `
        <div class=\"card-overlay\">
          <h3>${title}</h3>
          <p>${subject}</p>
        </div>
      `;
      cardContainer.appendChild(card);
    } catch (e) {
      // Ignore errors for missing/corrupt files
    }
  }
})();
