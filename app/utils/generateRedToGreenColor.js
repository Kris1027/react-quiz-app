export function generateRedToGreenColor(step, totalSteps) {
  const r = Math.max(0, 255 - Math.round((255 / totalSteps) * step));
  const g = Math.min(255, Math.round((255 / totalSteps) * step));
  const b = 0;

  const hexR = r.toString(16).padStart(2, "0").toUpperCase();
  const hexG = g.toString(16).padStart(2, "0").toUpperCase();
  const hexB = b.toString(16).padStart(2, "0").toUpperCase();

  return `#${hexR}${hexG}${hexB}`;
}
