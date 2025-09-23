const translations = {
  fr: {
    title: "Mon CV",
    education: "Master 2 Langues, Littératures et Civilisations…"
  },
  en: {
    title: "My Resume",
    education: "Master’s degree in Languages, Literatures and Civilizations…"
  }
};

let currentLang = "fr";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("lang-toggle");
  button.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    document.getElementById("title").textContent = translations[currentLang].title;
    document.getElementById("education").textContent = translations[currentLang].education;
    button.textContent = currentLang === "fr" ? "🇬🇧 English" : "🇫🇷 Version française";
  });
});
