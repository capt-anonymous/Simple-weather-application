 async function getWeather() {
      const city = document.getElementById("city").value;
      const apiKey = "a6bf74c65f26b137b1db7b031e77c0f0"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 

        if (data.cod === "404") {
          document.getElementById("city-name").innerText = "";
          document.getElementById("temp").innerText = "";
          document.getElementById("desc").innerText = "";
          document.getElementById("error").innerText = " City not found!";
        } else if (data.cod !== 200) {
          document.getElementById("error").innerText = " API Error: " + data.message;
        } else {
          document.getElementById("error").innerText = "";
          document.getElementById("city-name").innerText = data.name + " ";
          document.getElementById("temp").innerText = " Temperature: " + data.main.temp + "°C";
          document.getElementById("desc").innerText = " Weather: " + data.weather[0].description;
        }
      } catch (error) {
        document.getElementById("error").innerText = " Fetch failed: " + error;
      }
    }