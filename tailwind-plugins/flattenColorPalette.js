// tailwind-plugins/flattenColorPalette.js
function flattenColorPalette(colors) {
  const result = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === "string") {
      result[key] = value;
    } else {
      for (const [subKey, subValue] of Object.entries(value)) {
        result[`${key}-${subKey}`] = subValue;
      }
    }
  }
  return result;
}

module.exports = flattenColorPalette;
