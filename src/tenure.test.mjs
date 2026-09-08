// Self-check for the tenure math. Run: node src/tenure.test.mjs
import assert from "node:assert/strict";
import {
  experienceVersion,
  experienceTenure,
  experienceTenureShort,
  updatedLabel,
} from "./tenure.js";

// Sep 2026 -> 5 years, 8 months
const sep2026 = new Date(2026, 8, 8);
assert.equal(experienceVersion(sep2026), "v5.8.0");
assert.equal(experienceTenure(sep2026), "5 years, 8 months");
assert.equal(experienceTenureShort(sep2026), "5 yr 8 mo");
assert.equal(updatedLabel(sep2026), "Sep 2026");

// month rollover on the 1st
assert.equal(experienceVersion(new Date(2026, 9, 1)), "v5.9.0");

// year rollover -> patch resets, minor drops
const jan2027 = new Date(2027, 0, 1);
assert.equal(experienceVersion(jan2027), "v6.0.0");
assert.equal(experienceTenure(jan2027), "6 years");

// at the start
const jan2021 = new Date(2021, 0, 15);
assert.equal(experienceVersion(jan2021), "v0.0.0");
assert.equal(experienceTenure(jan2021), "0 months");

// singulars
assert.equal(experienceTenure(new Date(2022, 1, 1)), "1 year, 1 month");

console.log("tenure.test.mjs: all assertions passed");
