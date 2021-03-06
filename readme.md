# Parallax

Move elements on the page at different speeds and rotations as a user scrolls.

## Install

###### Node
```
npm install @celsowhite/parallax --save
```

###### Browser
Download the library file from dist/parallax.umd.js and include it in your sites files.

## Setup

###### Node

```javascript
import parallax from '@celsowhite/parallax';
```

###### Browser

The script relies on [@celsowhite/element-in-view](https://www.npmjs.com/package/@celsowhite/element-in-view). When using the script in the browser you must include element-in-view before parallax.

```html
<script src="demo/vendor/element-in-view.umd.js"></script>
<script src="dist/parallax.umd.js"></script>
```

## Usage

**JS**  
Pass the element selector you want to parallax to the init function.
```js
// Init
parallax('.parallax-item');
```
**HTML**   
Add the selector class and data attribute options to your html.
```html
<div class="parallax-item" data-speed="1.5" data-rotate="40"></div>
<div class="parallax-item" data-speed=".5" data-rotate="-90"></div>
```

## Settings

##### Parameters

- `selector` {String} The css selector for the elements you'd like to parallax.

##### Data Attributes

Add the below data attributes directly to your html markup. Each attribute is optional.

- `data-speed` {Number} A number between 0-1 will slow the element down relative to other elements on the page. Any number above 1 will speed the element up. Negative numbers will move the element in the opposite direction of other elements on the page.
- `data-rotate` {Number} The number of degrees the element should rotate while it is in the viewport. Should be between 0-360 and can be negative to rotate in the opposite direction.

## License

MIT License © [Celso White](https://celsowhite.com)