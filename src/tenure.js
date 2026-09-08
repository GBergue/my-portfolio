// Tenure at SHX, computed from the start date so the site ages itself.
// Start: 10 Jan 2021. Month-granular (the day is not counted), so the version
// ticks over on the 1st of each month: Sep 2026 -> v5.8.0, Oct 2026 -> v5.9.0,
// Jan 2027 -> v6.0.0.
const START_YEAR = 2021;
const START_MONTH = 0; // January, 0-indexed

const monthsElapsed = (now = new Date()) =>
  (now.getFullYear() - START_YEAR) * 12 + (now.getMonth() - START_MONTH);

export const experienceVersion = (now = new Date()) => {
  const m = monthsElapsed(now);
  return `v${Math.floor(m / 12)}.${m % 12}.0`;
};

export const experienceTenure = (now = new Date()) => {
  const m = monthsElapsed(now);
  const years = Math.floor(m / 12);
  const months = m % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years === 1 ? "" : "s"}`);
  if (months) parts.push(`${months} month${months === 1 ? "" : "s"}`);
  return parts.join(", ") || "0 months";
};

export const experienceTenureShort = (now = new Date()) => {
  const m = monthsElapsed(now);
  return `${Math.floor(m / 12)} yr ${m % 12} mo`;
};

export const updatedLabel = (now = new Date()) =>
  now.toLocaleDateString("en-US", { month: "short", year: "numeric" });
