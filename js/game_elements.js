export class Element {
    constructor(p, father) {
        
        this._parent = father;
        this._element = null;
        this._position = {x:p.x, y:p.y}; 
        this._size= {width: 200}
        this._setDomElement();
        this._styleElement(); 
        this._updateElement();
        }
        set size(width) {
            this._size.width = width;
        }
        get position() {
            return this._position;
        }
        set position(obj) {
            this._position= obj;
            this._updateElement(); 
        }
        _updateElement() {
            this._element.style.top = this._position.y + "px";
            this._element.style.left = this._position.x + "px";
        }
        _styleElement() {
            this._element.style.position= "absolute";    
            this._element.style.width = this._size.width + "px";
            this._element.style.transform = "scaleX(-1)";
        }
        _setDomElement() {
            this._element = document.createElement('img');
            this._element.setAttribute("src", "img/element.png");
            this._parent.appendChild(this._element);            
        }
       
      }



export class Gun extends Element {
    constructor(p, father) {
        super(p,father)
    }
    _setDomElement() {
        this._element = document.createElement('img');
        this._element.setAttribute("src", "img/gun.png");
        this._parent.appendChild(this._element);            
    }
    _styleElement() {
        this._element.style.position= "absolute";    
        this._element.style.width = this._size.width + "px";
        this._element.style.transform = "scaleX(-1)";
        this._element.style.zIndex="100";
    }
    
    fire() {
        this.currentBullet = new Bullet(this.position,this._parent);
        console.log("bbomom");
    }
}

export class Bullet extends Element {
    constructor(p,father) {
        super(p,father)
        this._setTimeLife();
    }
    _setDomElement() {
        this._element = document.createElement('img');
        this._element.setAttribute("src", "img/bullet.png");
        this._parent.appendChild(this._element);            
    }
    _setTimeLife() {
       window.setInterval(this.moveMe.bind(this),100);
        window.setTimeout(this.killMe.bind(this),2000);
    }
    
    moveMe() {
        this._position.x = this._position.x - 100;
        this._updateElement();
        //if (cMap.tryColisionMap(this._position)) {
        //    Console.log("colision");
        //}

    }
   killMe() {
    console.log("killing time")   
    this._parent.removeChild(this._element);
   }

}
 