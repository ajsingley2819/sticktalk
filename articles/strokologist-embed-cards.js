// Dynamically generate Strokologist article cards in the embedded section of sample-golf.html
(async function() {
  const articlesFolder = 'strokologist/';
  const articleFiles = ['The Open Preview (7_16_25).html'];
  const cardContainer = document.querySelector('.strokologist-articles-section .static-article-list');
  if (!cardContainer) return;
  cardContainer.innerHTML = '';
  for (const file of articleFiles) {
    try {
      const res = await fetch(articlesFolder + file);
      if (!res.ok) continue;
      const text = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const img = doc.querySelector('img');
      const imgSrc = img ? articlesFolder + file.replace(/[^/]+$/, '') + img.getAttribute('src') : '';
      const title = doc.querySelector('h1')?.textContent || file;
      const subject = doc.querySelector('h2')?.textContent || '';
      const card = document.createElement('a');
      card.className = 'uploaded-article-card';
      card.href = articlesFolder + file;
      card.target = '_blank';
      card.style.backgroundImage = imgSrc ? `url('${imgSrc}')` : '';
      card.innerHTML = `
        <div class="card-overlay">
          <h3>${title}</h3>
          <p>${subject}</p>
        </div>
      `;
      const li = document.createElement('li');
      li.appendChild(card);
      cardContainer.appendChild(li);
    } catch (e) {}
  }
})();
