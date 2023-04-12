const express = require("express");
const app = express();

const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("madeline", (filePath, options, callback) => {
  // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace("#image#", "<div><img src='" + options.image + "'></div>")
      .replace("#video#", "<div><iframe width='560' height='315' src='" + options.video + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></div>");
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the hypatia view engine

app.get("/", function (req, res) {
  res.render(
    "vtuberinfo", {title: "VTuber Info", message: "Top Hololive English VTubers to Watch", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-hololive-vtubers-hololive.jpg", content: "Includes: About the VTuber and their debut stream!<br>" + 
    "<ul>" + "<li>Gawr Gura</li>" + "<li>Hakos Baelz</li>" + "<li>Nanashi Mumei</li>" + "<li>Watson Amelia</li>" + "<li>Mori Calliope</li>" + "</ul>"}
  );
});

app.get("/gawrgura", function (req, res) {
    res.render(
      "vtuberinfo", {title: "Gawr Gura", message: "Gawr Gura", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/4/4f/Gawr_Gura_Portrait.png", content: "Gawr Gura (がうる・ぐら) is a female English-speaking Virtual YouTuber associated with hololive, debuting in 2020 as part of hololive English first generation alongside Ninomae Ina'nis, Takanashi Kiara, Watson Amelia and Mori Calliope.<br><br>Gura is currently the most subscribed VTuber worldwide with over 4 million YouTube subscribers, taking the #1 spot from industry pioneer Kizuna AI in 2021."}
    );
  });

  app.get("/gawrguradebut", function (req, res) {
    res.render(
      "vtuberdebut", {title: "Gawr Gura Debut", message: "Gawr Gura Debut Stream", video: "https://www.youtube.com/embed/dBK0gKW61NU"}
    );
  });

  app.get("/hakosbaelz", function (req, res) {
    res.render(
      "vtuberinfo", {title: "Hakos Baelz", message: "Hakos Baelz", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/a/a3/Hakos_Baelz_Portrait.png", content: "Hakos Baelz (ハコス・ベールズ) is an English speaking Virtual YouTuber associated with hololive. She debuted in 2021 as part of hololive -Council-, the second generation of members of hololive English, alongside Tsukumo Sana, Ceres Fauna, Ouro Kronii and Nanashi Mumei."}
    );
  });

  app.get("/hakosbaelzdebut", function (req, res) {
    res.render(
      "vtuberdebut", {title: "Hakos Baelz Debut", message: "Hakos Baelz Debut Stream", video: "https://www.youtube.com/embed/mJwpVT1WvLg"}
    );
  });

  app.get("/nanashimumei", function (req, res) {
    res.render(
      "vtuberinfo", {title: "Nanashi Mumei", message: "Nanashi Mumei", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/8/86/Nanashi_Mumei_Portrait.png", content: "Nanashi Mumei (七詩ムメイ) is an English-language Virtual YouTuber associated with hololive. She debuted in 2021 as part of hololive -Council-, the second generation of members of hololive English, alongside Tsukumo Sana, Ceres Fauna, Ouro Kronii and Hakos Baelz."}
    );
  });

  app.get("/nanashimumeidebut", function (req, res) {
    res.render(
      "vtuberdebut", {title: "Nanashi Mumei Debut", message: "Nanashi Mumei Debut Stream", video: "https://www.youtube.com/embed/M2gwJ-7s0Zo"}
    );
  });

  app.get("/watsonamelia", function (req, res) {
    res.render(
      "vtuberinfo", {title: "Watson Amelia", message: "Watson Amelia", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/9/97/Watson_Amelia_Portrait.png", content: "Watson Amelia (ワトソン・アメリア) is a female English-speaking Virtual YouTuber associated with hololive, debuting in 2020 as part of hololive English first generation alongside Ninomae Ina'nis, Takanashi Kiara, Mori Calliope and Gawr Gura."}
    );
  });

  app.get("/watsonameliadebut", function (req, res) {
    res.render(
      "vtuberdebut", {title: "Watson Amelia Debut", message: "Watson Amelia Debut Stream", video: "https://www.youtube.com/embed/MXrFrkIlE-0"}
    );
  });

  app.get("/moricalliope", function (req, res) {
    res.render(
      "vtuberinfo", {title: "Mori Calliope", message: "Mori Calliope", image: "https://static.wikia.nocookie.net/virtualyoutuber/images/3/39/Mori_Calliope_Portrait.png", content: "Mori Calliope (森 カリオペ) is a female English-speaking Virtual YouTuber associated with hololive, debuting in 2020 as part of hololive English first generation (Myth) alongside Ninomae Ina'nis, Takanashi Kiara, Watson Amelia and Gawr Gura."}
    );
  });

  app.get("/moricalliopedebut", function (req, res) {
    res.render(
      "vtuberdebut", {title: "Mori Calliope Debut", message: "Mori Calliope Debut Stream", video: "https://www.youtube.com/embed/M1_GeIfn48M"}
    );
  });

app.listen(3000,function(){
    console.log("I am a VTuber")
})
