class IWantModal {
    constructor(id){
        this._element = document.getElementById(id);
        this._setAnimations();
        this._setBackdropOnclick();
        this._setDismissButtonsOnclick();
        this._buttons = document.querySelectorAll('#'+id+' button');
    }

    show() {
        this._setDisplay('block');
        this._element.classList.add('fade-in');

        if (this._onShow){
            this._onShow();
        } 
    }

    hide(){
        this._element.classList.add('fade-out');
    }

    toggle() {
        this._getDisplay()
            ? this.hide()
            : this.show();
    }

    onClick(fn) {
        this._buttons.forEach(x => {
            x.addEventListener('click', fn);
        })
    }

    onShow(fn) {
        this._onShow = fn;
    }

    onHide(fn) {
        this._onHide = fn;
    }

    _setDisplay(value){
        this._element.style.display = value;
    }

    _getDisplay() {
        return this._element.style.display;
    }

    _setBackdropOnclick() {
        this._element.onclick = evt => {
            if (evt.target === this._element){
                this.hide();
            }
        }
    }

    _setAnimations() {
        this._element.addEventListener('animationend', evt => {
            if (evt.animationName === 'fade-in-backdrop'){
                this._element.classList.remove('fade-in');
            }
            if (evt.animationName === 'fade-out-backdrop'){
                this._setDisplay('');
                this._element.classList.remove('fade-out');
                if (this._onHide) {
                    this._onHide();
                }
            }
        });
    }

    _setDismissButtonsOnclick() {
        const dismissButtons = this._element.querySelectorAll('button[data-dismiss]');
        for (let i = 0; i < dismissButtons.length; i++){
            dismissButtons[i].onclick = () => this.hide();
        }
    }
}
