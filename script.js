const output = document.getElementById("output");
const cmd = document.getElementById("cmd");

const intro = [
"> iniciando life_with_Guillem...",
"> estado: en producción (10 años)",
"> cargando historia...",
"",
"> 2016 → Euroestudios",
"> 22/04 → evento no planificado 😏",
"> 23/04 → primer beso 💛",
"",
"> Denia detectado 🌊",
"> sistema emocional activado",
"",
"> convivencia iniciada",
"> gatos + perro integrados 🐱🐱🐶",
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
"> esperando input...",
"",
">",
"> IMPORTANTE:",
"> consulta README.md para entender el sistema completo 💛"
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

    if (value === "open /denia") {
      output.innerHTML += "<img src='assets/denia.jpg'><br>";
    }

    if (value === "open /qr") {
      output.innerHTML += "<img src='assets/madre_tierra_qr.png'><br>";
      output.innerHTML += "<br>🎶 escanéalo cuando toque.<br>";
    }

    if (value === "unlock /future") {
      setTimeout(() => {
        output.innerHTML += "<br>Este sistema no tiene rollback.<br>";
        output.innerHTML += "Porque cada decisión nos trajo aquí.<br>";
        output.innerHTML += "Y aquí es donde quiero estar siempre.<br>";
      }, 500);
    }

    cmd.value = "";
  }
});