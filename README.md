# I want modal
This is a simple javascript modal window. There are no dependencies (no jQuery).

![I want modal](https://media.giphy.com/media/l49JJaOXJRJAkoaWc/giphy.gif)

## Usage
Download [iw-modal.js](https://raw.githubusercontent.com/kamgru/i-want-modal/master/dist/js/iw-modal.js) and [iw-modal.css](https://raw.githubusercontent.com/kamgru/i-want-modal/master/dist/css/iw-modal.css) and include them in your html.

```html
<link rel="stylesheet" src="iw-modal.css">
<script src="iw-modal.js"></script>
```

Add modal html - don't forget to set modal id.
```html
<div id="myModal" class="iw-modal">
  <div class="modal-content">
    <div class="modal-header">
      I want modal
      <button type="button" class="close" data-dismiss><span>&times;</span></button>
    </div>
    <div class="modal-body">
      <p>Hi, I'm a modal.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="button" data-dismiss>OK</button>
    </div>
  </div>
</div>
```

Instantiate new modal object and pass it your modal id.
```javascript
var modal = new IWantModal('myModal');
modal.show();
```
