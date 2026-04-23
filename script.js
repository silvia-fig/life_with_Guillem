const output = document.getElementById("output");
const cmd = document.getElementById("cmd");
const audio = document.getElementById("audio");

const intro = [
"> iniciando life_with_Guillem...",
"> sistema en producción (10 años)",
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
"> sistema listo",
"",
"> comandos:",
"> open /cancion",
"> open /denia",
"> te quiero",
"",
"> IMPORTANTE:",
"> ver README.md para entender el sistema completo 💛",
"",
"> comando:",
"> open /readme"
];

function typeLines(lines, i = 0) {
  if (i < lines.length) {
    output.innerHTML += lines[i] + "<br>";
    setTimeout(() => typeLines(lines, i + 1), 25);
  }
}

typeLines(intro);

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = cmd.value;
    output.innerHTML += "<br>> " + value + "<br>";

    // 🌊 Denia
    if (value === "open /denia") {
      output.innerHTML += "<img src='assets/denia.jpg'><br>";
    }

    // 🎶 Canción (AUTOPLAY CONTROLADO)
    if (value === "open /cancion") {
      output.innerHTML += "<br>🎶 reproduciendo Madre Tierra...<br>";
      audio.currentTime = 0;
      audio.play();
    }

    // 💛 comando secreto
    if (value === "te quiero") {
      setTimeout(() => {
        output.innerHTML += "<br>Este sistema no tiene rollback.<br>";
        output.innerHTML += "Porque cada decisión nos trajo aquí.<br>";
        output.innerHTML += "Y aquí es donde quiero estar siempre.<br>";
      }, 500);
    }

    if (value === "open /readme") {
      window.open("https://github.com/silvia-fig/life_with_Guillem", "_blank");
    }

    cmd.value = "";
  }
});
