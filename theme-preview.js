(() => {
  const themes = {
    festival: "Festival Bright",
    midnight: "Indigo & Gold",
    garden: "Garden Stage"
  };
  const selected = new URLSearchParams(window.location.search).get("theme");
  if (!themes[selected]) return;

  document.body.classList.add(`theme-${selected}`);

  const bar = document.createElement("nav");
  bar.className = "theme-preview-bar";
  bar.setAttribute("aria-label", "Color palette previews");

  const label = document.createElement("strong");
  label.textContent = "Color preview";
  bar.append(label);

  Object.entries(themes).forEach(([key, name]) => {
    const link = document.createElement("a");
    link.href = `index.html?theme=${key}`;
    link.textContent = name;
    if (key === selected) link.setAttribute("aria-current", "true");
    bar.append(link);
  });

  document.body.append(bar);
})();
