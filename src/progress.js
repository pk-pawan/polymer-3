import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-progress/paper-progress.js";

    class Progress extends PolymerElement {
      static get template(){
        return `
        <style>
            paper-progress.slow {
              --paper-progress-indeterminate-cycle-duration: 20s;
            }

            paper-progress.blue {
              --paper-progress-active-color: var(--paper-light-blue-500);
              --paper-progress-secondary-color: var(--paper-light-blue-100);
            }
            paper-progress.red {
              --paper-progress-active-color: var(--paper-red-500);
              --paper-progress-secondary-color: var(--paper-red-100);
            }
    </style>
        <div class="card">
            <paper-progress indeterminate class="blue"></paper-progress><br>
            <paper-progress indeterminate class="slow red"></paper-progress><br>
            <paper-progress value="40" secondary-progress="80"></paper-progress>
        </div>
        `
        }
    }

    customElements.define('my-progress', Progress);
  

