"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IWantModal = /*#__PURE__*/function () {
  function IWantModal(id) {
    _classCallCheck(this, IWantModal);

    this._element = document.getElementById(id);

    this._setAnimations();

    this._setBackdropOnclick();

    this._setDismissButtonsOnclick();
  }

  _createClass(IWantModal, [{
    key: "show",
    value: function show() {
      this._setDisplay('block');

      this._element.classList.add('fade-in');

      if (this._onShow) {
        this._onShow();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this._element.classList.add('fade-out');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._getDisplay() ? this.hide() : this.show();
    }
  }, {
    key: "onShow",
    value: function onShow(fn) {
      this._onShow = fn;
    }
  }, {
    key: "onHide",
    value: function onHide(fn) {
      this._onHide = fn;
    }
  }, {
    key: "_setDisplay",
    value: function _setDisplay(value) {
      this._element.style.display = value;
    }
  }, {
    key: "_getDisplay",
    value: function _getDisplay() {
      return this._element.style.display;
    }
  }, {
    key: "_setBackdropOnclick",
    value: function _setBackdropOnclick() {
      var _this = this;

      this._element.onclick = function (evt) {
        if (evt.target === _this._element) {
          _this.hide();
        }
      };
    }
  }, {
    key: "_setAnimations",
    value: function _setAnimations() {
      var _this2 = this;

      this._element.addEventListener('animationend', function (evt) {
        if (evt.animationName === 'fade-in-backdrop') {
          _this2._element.classList.remove('fade-in');
        }

        if (evt.animationName === 'fade-out-backdrop') {
          _this2._setDisplay('');

          _this2._element.classList.remove('fade-out');

          if (_this2._onHide) {
            _this2._onHide();
          }
        }
      });
    }
  }, {
    key: "_setDismissButtonsOnclick",
    value: function _setDismissButtonsOnclick() {
      var _this3 = this;

      var dismissButtons = this._element.querySelectorAll('button[data-dismiss]');

      for (var i = 0; i < dismissButtons.length; i++) {
        dismissButtons[i].onclick = function () {
          return _this3.hide();
        };
      }
    }
  }]);

  return IWantModal;
}();