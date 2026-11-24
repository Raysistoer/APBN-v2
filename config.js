/* APBN settings: paste your Apps Script Web app URL (ends with /exec) between the quotes. */
window.APBN_CONFIG = {
  apiUrl: "PASTE_YOUR_EXEC_URL_HERE"
};
if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(window.APBN_CONFIG.apiUrl)) window.APBN_CONFIG.apiUrl = "";
