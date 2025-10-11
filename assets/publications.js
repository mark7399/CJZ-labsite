(function () {
  const enhanceBibliography = () => {
    const heading = document.querySelector('.md-typeset h1#publications');
    if (!heading) {
      return;
    }

    document
      .querySelectorAll('.md-typeset .footnote ol > li > p')
      .forEach((paragraph) => {
        if (paragraph.classList.contains('pub-enhanced')) {
          return;
        }
        if (paragraph.querySelector('.publication-title')) {
          paragraph.classList.add('pub-enhanced');
          return;
        }

        const html = paragraph.innerHTML.trim();
        const match = html.match(/^(\s*[\s\S]*?\.\s+)([\s\S]*?\.)(\s*)(<[\s\S]*)$/);
        if (!match) {
          return;
        }

        const [, authorsPart, titlePart, spacer, remainder] = match;
        if (!titlePart.trim()) {
          return;
        }

        paragraph.innerHTML = `${authorsPart}<span class="publication-title">${titlePart}</span>${spacer}${remainder}`;
        paragraph.classList.add('pub-enhanced');
      });
  };

  const runEnhancement = () => {
    window.requestAnimationFrame(enhanceBibliography);
  };

  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(runEnhancement);
  } else {
    document.addEventListener('DOMContentLoaded', runEnhancement);
  }
})();
