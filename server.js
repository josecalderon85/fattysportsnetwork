const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded());

var exampleData = {
    recentGames:[
        {
            teamOne: {
                name: "Celtics",
                imgURL:"https://logos-marcas.com/wp-content/uploads/2020/06/Boston-Celtics-logo.png",
                score:98
            },
            teamTwo:{
                name: "Lakers",
                imgURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png",
                score:110
            }
        },
        {
            teamOne: {
                name: "Mavericks",
                imgURL:"https://logodownload.org/wp-content/uploads/2021/07/dallas-mavericks-logo-1.png",
                score:120
            },
            teamTwo:{
                name: "Grizzlies",
                imgURL:"https://1000marcas.net/wp-content/uploads/2020/03/Vancouver-Grizzlies-Logo-2004.png",
                score:140
            }
        },
        {
            teamOne: {
                name: "Hawks",
                imgURL:"https://logos-marcas.com/wp-content/uploads/2020/06/Atlanta-Hawks-logo.png",
                score:114
            },
            teamTwo:{
                name: "Knicks",
                imgURL:"https://1000marcas.net/wp-content/uploads/2020/03/logo-new-york-knicks.png",
                score:104
            }
        },
        {
            teamOne: {
                name: "Bulls",
                imgURL:"https://logos-marcas.com/wp-content/uploads/2020/06/Chicago-Bulls-logo.png",
                score:113
            },
            teamTwo:{
                name: "Rockets",
                imgURL:"https://i.pinimg.com/originals/bc/b7/8a/bcb78a7fbfbbf763387b17658a2773c6.png",
                score:107
            }
        }
    ]
}

app.get('/football', (req, res) => {
  res.send(exampleData)
})
app.post("/addGame",(req,res)=>{
    console.log("we got this data", req.body)
    let teamOne = {
        name: req.body.teamOne,
        imgURL:req.body.urlOne,
        score:req.body.scoreOne
    }
    let teamTwo = {
        name: req.body.teamTwo,
        imgURL:req.body.urlTwo,
        score:req.body.scoreTwo
    }
exampleData.recentGames.push({
    teamOne:teamOne,
    teamTwo:teamTwo
})
    res.end("accepted")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})