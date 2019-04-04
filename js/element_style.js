export class ElementStyle {
  
        static update(domElement,element) {
           
            domElement.style.top = element.position.y + "px";
            domElement.style.left = element.position.x + "px";
        }
        static create(parent,element) {
            const domElement = document.createElement('img');
            domElement.setAttribute("src", "img/element.png");
            parent.appendChild(domElement);
            domElement.style.position= "absolute";    
            domElement.style.width = element.size.width + "px";
            domElement.style.transform = "scaleX(-1)"; 
            return domElement;
        }
        
}

export class WeaponStyle {

    static update(domElement,element) {
           
        domElement.style.top = element.position.y + "px";
        domElement.style.left = element.position.x + "px";
    }
    static create(parent,element) {
        const domElement = document.createElement('img');
        domElement.setAttribute("src", "img/gun.png");
        parent.appendChild(domElement);
        domElement.style.position= "absolute";    
        domElement.style.width = element.size.width + "px";
        domElement.style.transform = "scaleX(-1)"; 
        domElement.style.zIndex="100";
        return domElement;
    }

}

export class BulletStyle {

    static update(domElement,element) {
           
        domElement.style.top = element.position.y + "px";
        domElement.style.left = element.position.x + "px";
    }
    static create(parent,element) {
        const domElement = document.createElement('img');
        domElement.setAttribute("src", "img/bullet.png");
        parent.appendChild(domElement);
        domElement.style.position= "absolute";    
        domElement.style.width = element.size.width + "px";
        domElement.style.transform = "scaleX(-1)"; 
        domElement.style.zIndex="100";
        return domElement;
    }

}