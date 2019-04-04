export class UserEvents {
    constructor() {
        this._actionQueue = [];
        this.mousePosition = {x: 100, y: 100};
        this._eventListeners()
    }
    _eventListeners() {
        document.addEventListener("click",  () => { this._enQueueAction("click") } );
        document.addEventListener("mousemove",  (e) => { 
            this._enQueueAction("mousemove");
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        } );
    }
    _enQueueAction(action) {
        this._actionQueue.push(action);
    }
    emptyActionQueue() {
        this._actionQueue = [];
    }
    get actionQueue() {
        return this._actionQueue;
    }


}


