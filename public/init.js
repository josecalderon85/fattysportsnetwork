console.log("I am runningz");
fetch("http://localhost:3000/football")
  .then((response) => response.json())
  .then((data) => {
    const main = document.getElementById("main");

    for (var i = data.recentGames.length -1 ; i >= 0 ; i--) {
        console.log("this is the array", data.recentGames[i].teamOne.name)
      const container = document.createElement("div");
      container.classList.add("container");
      container.classList.add("flex");

      const item = document.createElement("div");
      item.classList.add("item");
      container.appendChild(item);

      let img = document.createElement("img");
      img.src = data.recentGames[i].teamOne.imgURL;
      img.classList.add("logos");
      item.appendChild(img);

      let name = document.createElement("h4");
      name.innerHTML = data.recentGames[i].teamOne.name;
      item.appendChild(name);

      let score = document.createElement("h2");
      score.innerHTML = data.recentGames[i].teamOne.score;
      item.appendChild(score);

      const vs = document.createElement("div");
      vs.classList.add("item");
      container.appendChild(vs);

      let imgVs = document.createElement("img");
      imgVs.src = "./resources/vs.png";
      imgVs.classList.add("logos");
      vs.appendChild(imgVs);

      const item2 = document.createElement("div");
      item2.classList.add("item");
      container.appendChild(item2);

      let img2 = document.createElement("img");
      img2.src = data.recentGames[i].teamTwo.imgURL;
      img2.classList.add("logos");
      item2.appendChild(img2);

      let name2 = document.createElement("h4");
      name2.innerHTML = data.recentGames[i].teamTwo.name;
      item2.appendChild(name2);

      let score2 = document.createElement("h2");
      score2.innerHTML = data.recentGames[i].teamTwo.score;
      item2.appendChild(score2);

      main.appendChild(container);
    }
    // console.log("server response",data)
  });
