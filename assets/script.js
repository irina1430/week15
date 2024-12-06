const cities = ["Москва", "Сеул", "Пекин", "Токио", "Лондон"];
const temperatures = [];
const list = document.getElementById("list");

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  let temp;
  while (true) {
    const input = prompt(`Введите температуру для города ${city}`);
    temp = Number(input);
    if (!isNaN(temp)) {
      break;
    }
    alert("Пожалуйста, введите корректное число для температуры.");
  }
  temperatures.push(temp);
}
for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  const temp = temperatures[i];
  const text = document.createElement("li");
  list.appendChild(text);
  text.textContent = `Температура в городе ${city} составляет ${temp} °C`;
}
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");

const maxNumber = Math.max(...temperatures);
const minNumber = Math.min(...temperatures);
maxTemp.innerHTML = `${maxNumber} °C`;
minTemp.innerHTML = `${minNumber} °C`;
console.log(temperatures);
console.log(maxTemp);
console.log(minTemp);
