function unitRenderer(hotInstance, td, row, col, prop, value, cellProperties) {
  const { unit } = cellProperties;
  let renderedValue = value;
  if (value && unit) {
    renderedValue += ` <span class="dh-unit-inner">${unit}</span>`;
  }
  td.classList.add('dh-unit-cell');
  td.innerHTML = renderedValue;
}

export default unitRenderer;
