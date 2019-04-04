// variable

import {GameState} from "./game_state.js";
import {Drawer} from "./drawer.js";
import {TimeMachine} from "./time_machine.js";
import {userEvents} from "./user_events.js"; 

const macri = document.querySelector(".macri"); 
const body = document.getElementsByTagName("BODY")[0];

macri.style.position = "absolute";
macri.style.top = "200px";

const user = new userEvents;
const game = new GameState;
const drawer = new Drawer;
const time = new TimeMachine(window, game.change, drawer.drawgame, user);
















