(function () {
  const isPublicationsPage = () => /\/publications\//.test(location.pathname);

  // Enhance titles inside list items for better readability
  const enhanceBibliography = () => {
    if (!isPublicationsPage()) return;
    document
      .querySelectorAll('.md-typeset ul > li > p, .md-typeset ol > li > p')
      .forEach((paragraph) => {
        if (paragraph.classList.contains('pub-enhanced')) return;
        if (paragraph.querySelector('.publication-title')) {
          paragraph.classList.add('pub-enhanced');
          return;
        }
        const html = paragraph.innerHTML.trim();
        const match = html.match(/^(\s*[\s\S]*?\.\s+)([\s\S]*?\.)(\s*)([\s\S]*)$/);
        if (!match) return;
        const [, authorsPart, titlePart, spacer, remainder] = match;
        if (!titlePart.trim()) return;
        paragraph.innerHTML = `${authorsPart}<span class="publication-title">${titlePart}</span>${spacer}${remainder}`;
        paragraph.classList.add('pub-enhanced');
      });
  };

  // Wrap sections per H2 heading for robust year filtering (supports ranges like 2019-2016)
  const wrapYearSections = () => {
    const root = document.querySelector('.md-typeset');
    if (!root) return [];
    const h2s = Array.from(root.querySelectorAll('h2'));
    const wrappers = [];
    const extractKey = (h2) => {
      const raw = (h2.textContent || '').replace(/\u00B6/g, '').trim(); // remove '¶'
      const normalized = raw
        .replace(/\s+/g, '')
        .replace(/[–—]/g, '-')
        .replace(/[^0-9\-]/g, '');
      if (/^20\d{2}(-20\d{2})?$/.test(normalized)) return normalized;
      if (/^20\d{2}$/.test(normalized)) return normalized;
      return null;
    };
    h2s.forEach((h2) => {
      const key = extractKey(h2);
      if (!key) return; // only year or range
      if (h2.parentElement && h2.parentElement.classList.contains('pub-year-section')) {
        wrappers.push(h2.parentElement);
        return;
      }
      const section = document.createElement('div');
      section.className = 'pub-year-section';
      section.setAttribute('data-year', key.toLowerCase());
      const parent = h2.parentNode;
      parent.insertBefore(section, h2);
      section.appendChild(h2);
      // Move following siblings until next H2 into this wrapper
      while (
        section.nextSibling &&
        section.nextSibling.nodeType === 1 &&
        !section.nextSibling.matches('h2')
      ) {
        section.appendChild(section.nextSibling);
      }
      wrappers.push(section);
    });
    return wrappers;
  };

  // Build year tabs (static list) and link to dedicated year pages
  const buildYearTabs = (wrappers) => {
    if (document.getElementById('pub-year-tabs')) return; // avoid duplicates
    const root = document.querySelector('.md-typeset');
    if (!root) return;
    const firstH2 = root.querySelector('h2');
    const tabs = document.createElement('div');
    tabs.id = 'pub-year-tabs';
    tabs.className = 'pub-tabs';

    const isZh = document.documentElement.lang === 'zh';
    const labels = isZh
      ? ['全部', '2024', '2023', '2022', '2021', '2020', '2019-2016']
      : ['All', '2024', '2023', '2022', '2021', '2020', '2019-2016'];
    const baseMatch = location.pathname.match(/^(.*\/publications\/)/);
    const base = baseMatch ? baseMatch[1] : location.pathname;
    const makeYearURL = (label) => {
      const key = (label || '').toLowerCase();
      if (key === 'all' || key === '全部') return base;
      return base + encodeURIComponent(label) + '/';
    };
    labels.forEach((label) => {
      const a = document.createElement('a');
      a.className = 'pub-tab';
      const key = (label || '').toLowerCase();
      a.setAttribute('data-year', key === '全部' ? 'all' : key);
      a.textContent = label;
      a.href = makeYearURL(label);
      tabs.appendChild(a);
    });

    // Insert tabs BEFORE the first year wrapper to avoid being hidden
    const anchor = wrappers && wrappers.length ? wrappers[0] : firstH2 || root.firstChild;
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(tabs, anchor);
    } else {
      root.insertBefore(tabs, root.firstChild);
    }

    bindTabs(wrappers);
  };

  const applyFilter = (wrappers, year) => {
    const showAll = year === 'all';
    wrappers.forEach((section) => {
      const key = (section.getAttribute('data-year') || '').toLowerCase().replace(/\s+/g, '');
      const visible = showAll || key === year;
      section.style.display = visible ? '' : 'none';
    });
  };

  const bindTabs = (wrappers) => {
    const tabs = document.querySelectorAll('#pub-year-tabs .pub-tab');
    const baseMatch = location.pathname.match(/^(.*\/publications\/)/);
    const base = baseMatch ? baseMatch[1] : location.pathname;
    const keyPath = location.pathname.slice(base.length).replace(/\/$/, '');
    const currentKey = keyPath || 'all';
    tabs.forEach((t) => {
      const key = t.getAttribute('data-year');
      if (key === currentKey) t.classList.add('active');
      else t.classList.remove('active');
    });
    // No filtering: each page is a dedicated year view (or All)
  };

  const run = () => {
    if (!isPublicationsPage()) return;
    window.requestAnimationFrame(() => {
      enhanceBibliography();
      const wrappers = wrapYearSections();
      buildYearTabs(wrappers);
    });
  };

  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener('DOMContentLoaded', run);
  }
})();
