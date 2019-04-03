// variables
import {Gun} from "./game_elements.js";

const macri = document.querySelector(".macri"); 
const body = document.getElementsByTagName("BODY")[0];

macri.style.position= "absolute";
macri.style.top = "200px";


class ColisionMap {
    constructor (obj) {
        this.area=[{obj}]
    }

    pushArea(obj) {
        this.area.push(obj)
    }
    
    tryColisionMap(position={}) {
        
        area.array.forEach(element => {
            if ( (position.x < element.maxX && position.x > element.minX ) && 
            (position.y < element.maxY && position.y > element.minY ) ) {
                return true;
            } 
        });
        
        return false;   
    }
}





//
(function styling() {  
   
    
})();

//Event listener
(function AddingEvents() {  
    body.addEventListener('mousemove', moveGun);
    body.addEventListener('click', fireGun);
})();

//eventos
function moveGun(e) {
    
    currentGun.position={x: e.clientX, y: e.clientY};
    //arma.style.left = e.clientX + "px";
    //arma.style.top = e.clientY + "px";
    
};

function fireGun(e) {
    
    currentGun.fire();

};

function moveMe() {
    console.log("se mueve")
}

const currentGun = new Gun({x:200,y:200},body);