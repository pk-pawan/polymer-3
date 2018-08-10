import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-button/paper-button.js";

    class Button extends PolymerElement {
      static get template(){
        return `
        <style>
           paper-button {
             font-family: 'Roboto', 'Noto', sans-serif;
            font-weight: normal;
            font-size: 14px;
            background: cadetblue;
            color: antiquewhite;
        }
        </style>
        <h3> Displaying Button </h3>
            <paper-button>link</paper-button>
        `
        }
    }

    customElements.define('my-button', Button);
  

