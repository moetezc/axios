let express = require("express");
let axios = require("axios");
let app = express();


const PORT = process.env.PORT || 3000 ;
  app.listen(PORT, function () {
    console.log(
      "The server is running, " +
        " please, open your browser at http://localhost:%s",
      PORT
    );
  });


  app.get("/", (req, res) => {
    res.send("<h1>the open weather</h1>");
  });
  app.get("/:cityName", (req, res) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=6ca067ea444823b74226618d63afc0f5`
      )
      .then((result) => res.send(result.data));
  });