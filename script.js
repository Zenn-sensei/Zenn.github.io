// Agregá tus enlaces cuando los tengas. No inventamos direcciones.
const socialLinks = {
  instagram: "https://www.instagram.com/sensei.zen9/", // Ejemplo: https://www.instagram.com/tu_usuario/
  whatsapp: "https://whatsapp.com/channel/0029VbDnRZDHltYISMMoxL35", // Canal oficial de WhatsApp
  youtube: ""    // Ejemplo: https://www.youtube.com/@tu_canal
};

const hint = document.getElementById("hint");
document.querySelectorAll("[data-link]").forEach((button) => {
  const key = button.dataset.link;
  const url = socialLinks[key];

  if (url && /^https:\/\/\S+/i.test(url)) {
    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.removeAttribute("aria-label");
  } else {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const labels = {
        instagram: "Instagram",
        whatsapp: "Tu canal de WhatsApp",
        youtube: "YouTube"
      };
      hint.textContent = `${labels[key]}: falta agregar el enlace.`;
    });
  }
});
