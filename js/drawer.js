export class Drawer {
    constructor(parentNode) {
        this._parentNode = parentNode;
        this._domMap = new DomMapping;
    }
    drawGame(elements) {
         elements.forEach(element => {
            let domElement = this._domMap.getDomElement(element) 
            if (!domElement) {
                domElement = this._createElement(element);
            } 
            this._drawElement(domElement,element)
            domElement = null;
         })
    }
    _createElement (element) {
        const justCreated = element.DrawingStyle.create(this._parentNode, element)
        this._domMap.setMap(element,justCreated);
        return justCreated;
    }
    _drawElement(domElement,element) {
        element.DrawingStyle.update(domElement,element)
    }
   
}


export class DomMapping {
    constructor() {
         this._elementMap = new Map();            
     }
    
     getDomElement(element) {
         
        return this._elementMap.get(element);
     } 
     setMap(element, domElement) {
        this._elementMap.set(element, domElement);
     }
     
}