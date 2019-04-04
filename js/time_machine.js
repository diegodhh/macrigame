class TimeMachine {
    constructor(parentElement, gameChange,drawGame, userEvents) {
        this._parent = parentElement;
        this._gameChange = gameChange;
        this._drawGame = drawGame;
        this._timeStart();     
    }

    _timeStart() {
        this._parent.setInterval(this.timeLife.bind(this),120);
    }
    timeLife() {
        //Change date elements
        const updateElements = this._gameChange(userEvents);
        // Drawing elements
        if (updateElements) {
        this._drawGame(updateElements);
        }
    }

}