import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";


    class IconButton extends PolymerElement {
      static get template(){
        return `
        <style>
       paper-icon-button.giant {
        width: 100px;
        height: 100px;
        }

        paper-icon-button.pink {
        color: var(--paper-pink-500);
        --paper-icon-button-ink-color: var(--paper-indigo-500);
        }
        paper-icon-button.pink:hover {
        background-color: var(--paper-pink-500);
        color: white;
        }

        paper-icon-button.blue {
        --paper-icon-button-ink-color: var(--paper-orange-500);
        background-color: var(--paper-light-blue-500);
        color: white;
        border-radius: 3px;
        padding: 2px;
        }
    </style>

    <div class="card">
     <p>Icon button</p>
     <paper-icon-button icon="favorite" title="heart"></paper-icon-button>
    <paper-icon-button src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" alt="octocat" title="octocat"></paper-icon-button>
    <paper-icon-button disabled icon="reply" title="reply"></paper-icon-button>
    </div>

    <div class="card">
        <p>Customise icon button</p>
        <paper-icon-button icon="alarm-on" title="wake up" class="giant"></paper-icon-button>
        <paper-icon-button icon="favorite" title="heart" class="pink"></paper-icon-button>
        <paper-icon-button icon="flight-takeoff" title="take off" class="blue"></paper-icon-button>
    </div>
        `
        }
    }

    customElements.define('my-icon-button', IconButton);
  

