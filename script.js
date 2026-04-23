const output = document.getElementById("output");
const cmd = document.getElementById("cmd");
const audio = document.getElementById("audio");

cmd.disabled = true; // 🔒 bloqueado al inicio

const intro = [
"> iniciando life_with_Guillem...",
"> cargando núcleo emocional...",
"> inicializando sistema...",
"",
"> 2016 → Euroestudios",
"> 22/04 → evento no planificado 😏",
"> 23/04 → primer beso 💛",
"",
"> Denia detectado 🌊",
"> sistema emocional activado",
"",
"> Sener → sistema Respira desplegado",
"> equipo escalado",
"",
"> COVID → superado 🦠",
"> Fortnite mode → ON 🎮",
"",
"> Gabi 👶",
"> Oliver 👶",
"",
"> Cervellia fundada 🚀 (11/2025)",
"> equipo: 5 personas",
"",
"> sincronizando vida compartida...",
"",
"> te quiero 💛",
"",
"> sistema listo."
];

function typeLines(lines, i = 0) {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "<br>";

    setTimeout(() => typeLines(lines, i + 1), 40);

  } else {

    // 🧠 sistema activo
    setTimeout(() => {
      output.innerHTML += "<br>> INPUT SYSTEM ONLINE<br>";

      cmd.disabled = false;
      cmd.focus();

      // 💡 IMPORTANTE
      setTimeout(() => {
        const systemInfo = document.createElement("div");
        systemInfo.style.textAlign = "center";
        systemInfo.style.marginTop = "25px";
        systemInfo.style.fontSize = "13px";
        systemInfo.style.opacity = "0.8";

        systemInfo.innerHTML = `
          <strong>IMPORTANTE:</strong><br>
          ver README.md para entender el sistema completo 💛
        `;

        document.body.appendChild(systemInfo);

        // 🔗 link repo
        setTimeout(() => {
          const link = document.createElement("div");
          link.style.textAlign = "center";
          link.style.marginTop = "10px";
          link.style.fontSize = "12px";

          link.innerHTML = `
            <a href="https://github.com/silvia-fig/life_with_Guillem" target="_blank">
              acceder al sistema base (README.md)
            </a>
          `;

          document.body.appendChild(link);

        }, 800);

      }, 600);

    }, 500);
  }
}

typeLines(intro);

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = cmd.value;
    output.innerHTML += "<br>> " + value + "<br>";

    if (value === "open /denia") {
      output.innerHTML += "<img src='assets/denia.jpg'><br>";
    }

    if (value === "open /cancion") {
      output.innerHTML += "<br>🎶 reproduciendo Madre Tierra...<br>";
      audio.currentTime = 0;
      audio.play();
    }

    if (value === "te quiero") {
      setTimeout(() => {
        output.innerHTML += "<br>Este sistema no tiene rollback.<br>";
        output.innerHTML += "Porque cada decisión nos trajo aquí.<br>";
        output.innerHTML += "Y aquí es donde quiero estar siempre.<br>";
      }, 500);
    }

    cmd.value = "";
  }
});
