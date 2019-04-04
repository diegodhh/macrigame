
import {Element,Weapon,Bullet} from  "/../js/game_elements.js" 
import {Drawer} from  "/../js/drawer.js";
import {UserEvents} from "/../js/user_events.js";

/// elements and drowers
const body = document.getElementsByTagName("body")[0];
const p = {x:200,y:200};


const drawer = new Drawer(body)
const thing = new Element(p,body);
const aLot = [new Bullet({x:100,y:100}),new Element({x:200,y:200}),new Element({x:20,y:20}),new Element(p),
    new Element({x:0,y:90}),new Weapon({x:20,y:300}),new Weapon({x:20,y:20}),new Bullet(p)];

//drawer._drawElement(drawer._createElement(thing), thing);

drawer.drawGame(aLot);
drawer.drawGame(aLot);
drawer.drawGame(aLot);
console.log(aLot);
// drawer working great!!!!!

const user = new UserEvents;


window.setInterval(() => { aLot[1].action(user) }, 60);


 