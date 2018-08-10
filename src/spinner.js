import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-spinner/paper-spinner.js";
import "../node_modules/@polymer/paper-spinner/paper-spinner-lite.js";

    class Spinner extends PolymerElement {
      static get template(){
        return `
        <style>
        paper-spinner, paper-spinner-lite {
          width: 50px;
          height: 50px;
        }

       paper-spinner.multi {
                --paper-spinner-layer-1-color: var(--paper-purple-500);
                --paper-spinner-layer-2-color: var(--paper-cyan-500);
                --paper-spinner-layer-3-color: var(--paper-blue-grey-500);
                --paper-spinner-layer-4-color: var(--paper-amber-500);
              }
        paper-spinner-lite.orange {
        --paper-spinner-color: var(--google-yellow-500);
        }
        paper-spinner-lite.green {
        --paper-spinner-color: var(--google-green-500);
        }
        paper-spinner-lite.thin {
        --paper-spinner-stroke-width: 1px;
        }
        paper-spinner-lite.thick {
        --paper-spinner-stroke-width: 6px;
        }
    </style>
        <div class="card">
      <paper-spinner class="multi" active>...</paper-spinner>
        <paper-spinner-lite active class="orange"></paper-spinner-lite>
        <paper-spinner-lite active class="green"></paper-spinner-lite>
        <paper-spinner-lite active class="thin"></paper-spinner-lite>
        <paper-spinner-lite active class="thick"></paper-spinner-lite> 
    </div>
        `
        }
    }

    customElements.define('my-spinner', Spinner);
  

