// This script will scan both puckfessor and strokologist folders, find all HTML articles, sort them by last modified date, and display the three newest as Top Stories on the homepage.
(async function() {
  // Manually list your articles here
  const articlesList = [
    { folder: 'articles/puckfessor/', file: 'Example Document.html' },
    { folder: 'articles/strokologist/', file: 'The Open Preview (7_16_25).html' },
    { folder: 'articles/strokologist/', file: 'Dr Strokologist.html' }, // <-- Add this line
    // Add more articles as needed
  ];

  let articles = [];
  for (const { folder, file } of articlesList) {
    try {
      const url = folder + file;
      const res = await fetch(url);
      if (!res.ok) continue;
      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const img = doc.querySelector('img');
      const imgSrc = img ? url.replace(/[^/]+$/, '') + img.getAttribute('src') : '';
      const title = doc.querySelector('h1')?.textContent || file;
      const subject = doc.querySelector('h2')?.textContent || '';
      // Try to get last modified date from HTTP header
      let date = null;
      try {
        const headRes = await fetch(url, { method: 'HEAD' });
        if (headRes.ok) {
          date = new Date(headRes.headers.get('last-modified'));
        }
      } catch {}
      articles.push({ url, imgSrc, title, subject, date });
    } catch {}
  }
  // Sort by date, fallback to order if no date
  articles.sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));
  const topStories = articles.slice(0, 3);
  const container = document.getElementById('top-stories-cards');
  if (!container) return;
  for (const art of topStories) {
    const card = document.createElement('a');
    card.className = 'uploaded-article-card';
    card.href = art.url;
    card.target = '_blank';
    card.style.backgroundImage = art.imgSrc ? `url('${art.imgSrc}')` : '';
    card.innerHTML = `
      <div class="card-overlay">
        <h3>${art.title}</h3>
        <p>${art.subject}</p>
      </div>
    `;
    container.appendChild(card);
  }
})();
