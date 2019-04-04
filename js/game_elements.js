import {ElementStyle, WeaponStyle,BulletStyle} from "./element_style.js";

export class Element {
    constructor(p) {              
        this.DrawingStyle = ElementStyle;
        this._position = {x:p.x, y:p.y}; 
        this._size = {width: 150}       
        }
        set size(width) {
            this._size.width = width;
        }
        get size() {
            return this._size;
        }
        get position() {
            return this._position;
        }
        set position(obj) {
            this._position= obj;             
        }
        action(userEvents) {
            
            userEvents.actionQueue.forEach(element => {
                this[element](userEvents);
            });
            return this;
            
        } 
        click(userEvents) {
            console.log("click");
            
        }
        mousemove(userEvents) {
            
            this._position = userEvents.mousePosition;
            userEvents.emptyActionQueue();
            console.log("mouve" + this._position.x);
        }       
        
}



export class Weapon extends Element {
    constructor(p) {
        super(p)
        this.DrawingStyle = WeaponStyle;
    }
   
    fire(userEvents,gameState) {
        this.currentBullet = new Bullet(this.position,this._parent);
        gameState.CreateElement(Bullet,stringify(userEvents.position));
        console.log("bbomom");
    }
}

export class Bullet extends Element {
    constructor(p) {
        super(p)
        this.DrawingStyle = BulletStyle;
    }  
    action(userEvents, gameState) {
        this._position.x = this._position.x - 100;
        return this;
    }

    killMe() {
        console.log("killing time")   
    
    }

}
 