function gameObject(){
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black","White"],
            "players": [{
                "name":"Ali",
                "number": 0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1
            },
            {
                "name":"Omar",
                "number": 30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7
            },
            {
                "name":"Maher",
                "number": 11,
                "shoe":17,
                "points":17,
                "rebounds":19,
                "assists":10,
                "steals":3,
                "blocks":1,
                "slamDunks":15
            },
            {
                "name":"David",
                "number": 1,
                "shoe":19,
                "points":26,
                "rebounds":12,
                "assists":6,
                "steals":3,
                "blocks":8,
                "slamDunks":5
            },
            {
                "name":"Johny",
                "number": 31,
                "shoe":15,
                "points":19,
                "rebounds":2,
                "assists":2,
                "steals":4,
                "blocks":11,
                "slamDunks":1
            },
        ]
        },
        "away":{
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": [{
                "name":"Danny",
                "number": 4,
                "shoe":18,
                "points":10,
                "rebounds":1,
                "assists":1,
                "steals":2,
                "blocks":7,
                "slamDunks":2
            },
            {
                "name":"Alan",
                "number": 0,
                "shoe":16,
                "points":12,
                "rebounds":4,
                "assists":7,
                "steals":7,
                "blocks":15,
                "slamDunks":10
            },
            {
                "name":"Matthew",
                "number": 2,
                "shoe":14,
                "points":27,
                "rebounds":12,
                "assists":12,
                "steals":4,
                "blocks":5,
                "slamDunks":5
            },
            {
                "name":"Josh",
                "number": 8,
                "shoe":15,
                "points":33,
                "rebounds":3,
                "assists":2,
                "steals":1,
                "blocks":1,
                "slamDunks":0
            },
            {
                "name":"Dan",
                "number": 33,
                "shoe":15,
                "points":6,
                "rebounds":12,
                "assists":12,
                "steals":22,
                "blocks":5,
                "slamDunks":12
            },
        ]
        }
    }
}

console.log(gameObject());

function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName());

function numPointsScored(palyerName){
    var players = gameObject();
    var playerPoints = undefined;
    for(let key in players){
        var awayPlayers = players[key]["players"];
        var pla = awayPlayers.find(player => {
            return player["name"] === palyerName;
        });
        playerPoints = pla === undefined ? undefined : pla["points"];

    }
    return playerPoints;
}

console.log(numPointsScored("Dan"));

function shoeSize(palyerName){
    var players = gameObject();
    var playerPoints = undefined;
    for(let key in players){
        var awayPlayers = players[key]["players"];
        var pla = awayPlayers.find(player => {
            return player["name"] === palyerName;
        });
        if(pla !== undefined){
            return pla["shoe"];
        }
    
    }
    return playerPoints;
}

console.log(shoeSize("David"));

function teamColors(teamName){
    var players = gameObject();
    for( let key in players){
        if(players[key]["teamName"] === teamName){
            return players[key]["colors"];
        }
    }
    return undefined;
}

console.log(teamColors("Charlotte Hornets"));


function teamNames(){
    var players = gameObject();
    var teamNames =[]
    for( let key in players){
        teamNames.push(players[key]["teamName"]);
    }
    return teamNames;
}
console.log(teamNames());

function playerNumbers(teamName){
    var players = gameObject();
    for( let key in players){
        if(players[key]["teamName"] === teamName){
           var numbersList = [];
           players[key]["players"].forEach(element => {
            numbersList.push(element.number);
           });
           return numbersList;
        }
    }
    return undefined;
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName){
    var players = gameObject();
    for( let key in players){
        var pla = players[key]["players"].find(element=>{
            return element.name === playerName;
        })
        if(pla !== undefined){
            return pla;
        }
    }
    return undefined;
}
console.log(playerStats("Matthew"));

function MaxPlayer(pla1,pla2){
    //debugger;
    if(pla1 == undefined && pla2 != undefined){
        return pla2;
    }
    else if(pla2 == undefined && pla1 != undefined){
        return pla1;
    }
    else if( pla1 == undefined && pla2 == undefined){
        return undefined;
    }
    var maxValue  = Math.max(pla1["shoe"],pla2["shoe"]);
    return pla1["shoe"] === maxValue ? pla1 : undefined;
}

function bigShoeRebounds(){
    var players = gameObject();
    var MaxPlayers =[];
    for( let key in players){
       // debugger;
        var eachMax = players[key]["players"].reduce((acc,curr)=>{
            //debugger;
            return MaxPlayer(acc,curr);
        });
        MaxPlayers.push(eachMax);
    }
    
    return MaxPlayer(MaxPlayers[0],MaxPlayers[1])["rebounds"];
}

console.log(bigShoeRebounds());