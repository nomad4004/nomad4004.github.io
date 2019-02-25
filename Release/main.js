/*
All this code is copyright Nomad4002, 2019
Hello, and welcome to the joyous mess that is main.js. Code contained herein is not guaranteed to be good, consistent, or sane. Have a nice trip.
*/

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies, document.getElementById('cookies').innerHTML = cookies;
    if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors, document.getElementById('cursors').innerHTML = cursors;
    if (typeof savegame.farms !== "undefined") farms = savegame.farms, document.getElementById('farms').innerHTML = farms;
    if (typeof savegame.mines !== "undefined") mines = savegame.mines, document.getElementById('mines').innerHTML = mines;
    if (typeof savegame.portal !== "undefined") portal = savegame.portal, document.getElementById('portals').innerHTML = portal;
}

var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var farms = 0;

function buyfarm(){
    var farmCost = Math.floor(50 * Math.pow(1.1,farms));     //works out the cost of this cursor
    if(cookies >= farmCost){                                   //checks that the player can afford the cursor
        farms = farms + 1;                                   //increases number of farms
    	cookies = cookies - farmCost;                          //removes the cookies spent
        document.getElementById('farms').innerHTML = farms;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,farms));       //works out the cost of the next cursor
    document.getElementById('farmCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var mines = 0;

function buymine(){
    var mineCost = Math.floor(100 * Math.pow(1.1,mines));     //works out the cost of this cursor
    if(cookies >= mineCost){                                   //checks that the player can afford the cursor
        mines = mines + 1;                                   //increases number of farms
    	cookies = cookies - mineCost;                          //removes the cookies spent
        document.getElementById('mines').innerHTML = mines;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,mines));       //works out the cost of the next cursor
    document.getElementById('mineCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var portal = 0;

function buyportal(){
    var portalCost = Math.floor(250 * Math.pow(1.1,portal));     //works out the cost of this cursor
    if(cookies >= portalCost){                                   //checks that the player can afford the cursor
        portal = portal + 1;                                   //increases number of farms
    	cookies = cookies - portalCost;                          //removes the cookies spent
        document.getElementById('portals').innerHTML = portal;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(250 * Math.pow(1.1,portal));       //works out the cost of the next cursor
    document.getElementById('portalCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function save(){
    var save = {
        cookies: cookies,
        cursors: cursors,
        farms: farms,
        mines: mines,
        portal: portal
    }
    localStorage.setItem("save",JSON.stringify(save));
}

window.setInterval(function(){
	
    cookieClick(cursors);
    cookieClick(farms);
    cookieClick(mines);
    cookieClick(portal);

}, 1000);




