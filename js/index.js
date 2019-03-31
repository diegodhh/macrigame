// variables
const macri = document.querySelector(".macri"); 
const body = document.getElementsByTagName("BODY")[0];
const macriMap= { maxY: macri.style.top, 
    minY: macri.style.top + macri.style.height, 
    minX: macri.style.left, 
    maxX: macri.style.left + macri.style.width 
}
console.log(macriMap);


class ColisionMap {
    constructor (obj) {
        this.Area=[{obj}]
    }

    PushArea(obj) {
        this.Area.push(obj)
    }
    
    tryColisionMap(position={}) {
        
        Area.array.forEach(element => {
            if ( (position.x < element.maxX && position.x > element.minX ) && 
            (position.y < element.maxY && position.y > element.minY ) ) {
                return true;
            } 
        });
        
        return false;   
    }
}

const cMap= new ColisionMap(macriMap);

class Element {
    constructor(p, father) {
        
        this._parent = father;
        this._element = null;
        this._position = {x:p.x, y:p.y}; 
        this._size= {width: 200}
        this.setDomElement();
        this.styleElement(); 
        this.updateElement();
        }
        set size(width) {
            this._size.width = width;
        }
        get position() {
            return this._position;
        }
        set position(obj) {
            this._position= obj;
            this.updateElement(); 
        }
        updateElement() {
            this._element.style.top = this._position.y + "px";
            this._element.style.left = this._position.x + "px";
        }
        styleElement() {
            this._element.style.position= "absolute";    
            this._element.style.width = this._size.width + "px";
            this._element.style.transform = "scaleX(-1)";
        }
        SetDomElement() {
            this._element = document.createElement('img');
            this._element.setAttribute("src", "img/element.png");
            this._parent.appendChild(this._element);            
        }
       
      }



class Gun extends Element {
    constructor(p, father) {
        super(p,father)
    }
    setDomElement() {
        this._element = document.createElement('img');
        this._element.setAttribute("src", "img/gun.png");
        this._parent.appendChild(this._element);            
    }
    styleElement() {
        this._element.style.position= "absolute";    
        this._element.style.width = this._size.width + "px";
        this._element.style.transform = "scaleX(-1)";
        this._element.style.zIndex="100";
    }
    
    fire() {
        this.currentBullet = new Bullet(this.position,body);
        console.log("bbomom");
    }
}

class Bullet extends Element {
    constructor(p,father) {
        super(p,father)
        this.setTimeLife();
    }
    setDomElement() {
        this._element = document.createElement('img');
        this._element.setAttribute("src", "img/bullet.png");
        this._parent.appendChild(this._element);            
    }
    setTimeLife() {
       window.setInterval(this.moveMe.bind(this),100);
        window.setTimeout(this.killMe.bind(this),2000);
    }
    
    moveMe() {
        this._position.x = this._position.x - 100;
        this.updateElement();
        if (cMap.tryColisionMap(this._position)) {
            Console.log("colision");
        }

    }
   killMe() {
    console.log("killing time")   
    body.removeChild(this._element);
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

currentGun = new Gun({x:200,y:200},body);