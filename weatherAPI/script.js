const button = document.getElementById("btn");
const apiKey="your_api_key";
button.addEventListener("click", () => {
  const city = document.getElementById("city").value;

  document.getElementById("status").textContent = "Loading...";
  document.getElementById("card").style.display = "block";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp + "°C";
      document.getElementById("desc").textContent = data.weather[0].description;
      document.getElementById("feels").textContent = "Feels like " + data.main.feels_like + "°C";
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("status").textContent = "";
    })
    .catch(() => {
      document.getElementById("status").textContent = "City not found";
    });
});
