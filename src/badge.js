import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-badge/paper-badge.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/iron-icons/communication-icons.js";
import "../node_modules/@polymer/iron-icons/social-icons.js";

    class Badge extends PolymerElement {
      static get template(){
        return `
        <style>
            .red {
            --paper-badge-background: var(--paper-red-300);
            }
            .blue {
            --paper-badge-background: var(--paper-light-blue-300);
        }
        
    </style>

        <div class="card">  
        <h3>Badges</h3>
            <paper-icon-button id="number" icon="communication:email" alt="inbox">
            </paper-icon-button>
            <paper-badge for="number" label="4">
            </paper-badge>

            <paper-icon-button id="icon" icon="account-box" alt="person">
            </paper-icon-button>
            <paper-badge icon="social:mood" for="icon" label="happy">
            </paper-badge>
        </div>
        <div class="card">
        <h3>Style Badges</h3>
        <paper-icon-button id="number2" icon="communication:email" alt="inbox">
            </paper-icon-button>
            <paper-badge for="number2" label="4" class="red">
            </paper-badge>

            <paper-icon-button id="icon2" icon="account-box" alt="person">
            </paper-icon-button>
            <paper-badge icon="social:mood" for="icon2" label="happy" class="blue">
            </paper-badge>
        </div>
        `
        }
    }

    customElements.define('my-badge', Badge);
  

