import {Weapon,Element} from "./game_elements.js";


class GameState {
    constructor() {
        
        this.states = {sueldo: 1000, healthMacri: 100};
        this.elements.mainWeapon = new Weapon;
        this.elements.enemy = new Element;
        this.elements.sueldoClock = null;
       console.log('contructor game state');
        
    }
    change(userEvents) { 
        // mapea los elementos para ejecutar sus principales acciones
        const world = this._mapWorld();
        const updateElements = []

        world.forEach(element => {
            //pasa de referencia los eventos del usuario y el objeto al cual le tiene que pedir cosas de necesitarllo
            const updateElement = element.action(userEvents, this);
            if (updateElement) {
                updateElements.push(updateElement);
            }
        });
        userEvents.emptyActionQueue()
        return updateElements;
    }
    CreateElement(ElementClass,name) {
        this.elements[name] = new ElementClass;
    }
    DeleteElement(name) {
        this.elements[name] = null;
    }
    
    _mapWorld() {
        const world;
        for (const prop in this.elements) {
            
            world.push(this.elements[prop])
          } 
        return world;  
    }

}