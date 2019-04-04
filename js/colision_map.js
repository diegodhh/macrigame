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