import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-toolbar/paper-toolbar.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/paper-progress/paper-progress.js";
import "../node_modules/@polymer/iron-icons/iron-icons.js";


    class Toolbar extends PolymerElement {
      static get template(){
        return `
        <style>
        paper-toolbar.red {
    --paper-toolbar-background: red;
    --paper-toolbar-title: {
      font-style: italic;
      font-weight: bold;
    };
  }
    </style>

    <div class="card">
        <p>Toolbar</p>
      <paper-toolbar>
        <span slot="top" class="title">Title</span>
        </paper-toolbar>
    </div>

      <div class="card">
          <p>Style Toolbar</p>
      <paper-toolbar class="red">
        <span slot="top" class="title">Title</span>
        </paper-toolbar></div>

    <div class="card">
        <p>Toolbar with icon buttons</p>
       <paper-toolbar>
        <paper-icon-button slot="top" icon="menu"></paper-icon-button>
        <span slot="top" class="title">Title</span>
        <paper-icon-button slot="top" icon="refresh"></paper-icon-button>
        <paper-icon-button slot="top" icon="add">+</paper-icon-button>
        </paper-toolbar>
    </div>
    
    <div class="card">
        <p>Toolbar with sections</p>
        <paper-toolbar class="tall">
        <paper-icon-button slot="top" icon="menu"></paper-icon-button>
        <span class="title">Title</span>
        <paper-icon-button slot="top" icon="refresh"></paper-icon-button>
        <paper-icon-button slot="top" icon="add">+</paper-icon-button>

        <span slot="middle" class="title">Middle Title</span>

        <span slot="bottom" class="title">Bottom Title</span>
        <paper-icon-button slot="bottom" icon="content-cut"></paper-icon-button>
        <paper-icon-button slot="bottom" icon="content-copy"></paper-icon-button>
        <paper-icon-button slot="bottom" icon="content-paste"></paper-icon-button>
        </paper-toolbar>
    </div>

    <div class="card">
        <p>Toolbar with progress</p>
        <paper-toolbar class="medium-tall">
        <paper-icon-button icon="menu"></paper-icon-button>
        <div class="spacer"></div>
        <paper-icon-button icon="refresh"></paper-icon-button>
        <paper-icon-button icon="add">+</paper-icon-button>
        <div slot="middle" class="title">Title</div>
        <paper-progress slot="middle" class="fit" value="60"></paper-progress>
        </paper-toolbar>
    </div>
        `
        }
    }

    customElements.define('my-toolbar', Toolbar);
  

