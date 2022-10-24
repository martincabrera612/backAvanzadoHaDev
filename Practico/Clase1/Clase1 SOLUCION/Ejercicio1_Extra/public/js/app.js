async function multiply(event) {
  event.preventDefault(); // Evita que se recargue la página

  const num1 = document.getElementById("num1").value; //6
  const num2 = document.getElementById("num2").value; //2

  const response = await axios.post("/multiplicar", {
    num1,
    num2,
  });

  document.getElementById(
    "result"
  ).textContent = `El resultado es: ${response.data}`;
}
