document.addEventListener("DOMContentLoaded", () => {
  try {
    const headerSelect = document.querySelector("header .md-header__option .md-select");
    const tabsGrid = document.querySelector("nav.md-tabs .md-grid");
    if (headerSelect && tabsGrid) {
      // Move the language selector into the tabs bar container
      tabsGrid.appendChild(headerSelect);
      headerSelect.classList.add("md-select--tabs");
    }
  } catch (e) {
    // no-op if structure differs
  }
});