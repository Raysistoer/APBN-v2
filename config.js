/* APBN settings: paste your Apps Script Web app URL (ends with /exec) between the quotes. */
window.APBN_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbw04CSbyTl9ZtJxHE3BCplzLJcMrhfkNMKWo2YGbrIRy_r0NtM5IISb29wcQPBn6pOnlQ/exec"
};
if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(window.APBN_CONFIG.apiUrl)) window.APBN_CONFIG.apiUrl = "";
