import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-checkbox/paper-checkbox.js";

    class Checkbox extends PolymerElement {
      static get template(){
        return `
        <h3> Checkbox </h3>
            <paper-checkbox>Ready to deploy!</paper-checkbox>
        `
        }
    }

    customElements.define('my-checkbox', Checkbox);
  

