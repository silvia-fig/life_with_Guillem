const output = document.getElementById("output");
const cmd = document.getElementById("cmd");
const audio = document.getElementById("audio");

cmd.disabled = true;

// 🔥 boot system
output.innerHTML = "[boot] initializing AI console...<br>";

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
"> SYSTEM STATE: READY [OK]"
];

function typeLines(lines, i = 0) {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "<br>";
    setTimeout(() => typeLines(lines, i + 1), 35);
  } else {
    cmd.disabled = false;
    cmd.focus();
  }
}

typeLines(intro);

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = cmd.value;

    // 💻 estilo terminal real
    output.innerHTML += `<div style="opacity:0.6">user@system:~$ ${value}</div>`;

    // 🌊 Denia
    if (value === "open /denia") {
      output.innerHTML += "<img src='assets/denia.jpg'><br>";
    }

    // 🎶 canción
    if (value === "open /cancion") {
      output.innerHTML += "<br>🎶 reproduciendo Madre Tierra...<br>";
      audio.currentTime = 0;
      audio.play();
    }

    // 💛 evento emocional
    if (value === "te quiero") {
      output.innerHTML += "<br>[SYSTEM OVERRIDE DETECTED]<br>";

      setTimeout(() => {
        output.innerHTML += "<br>Este sistema no tiene rollback.<br>";
        output.innerHTML += "Porque cada decisión nos trajo aquí.<br>";
        output.innerHTML += "Y aquí es donde quiero estar siempre.<br>";
      }, 600);
    }

    cmd.value = "";
  }
});
