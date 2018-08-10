import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-tabs/paper-tabs.js";
import "../node_modules/@polymer/paper-tabs/paper-tab.js";

    class Tabs extends PolymerElement {
      static get template(){
        return `
        <style>
            paper-tabs {
                background-color: var(--paper-blue-900);
                color: #fff;
            }
        </style>
        <div class="card">
        <p>Tabs</p>
        <paper-tabs selected="0">
        <paper-tab>The first tab</paper-tab>
        <paper-tab>Tab two</paper-tab>
        <paper-tab>The third tab</paper-tab>
        <paper-tab>Fourth tab</paper-tab>
        </paper-tabs>
    </div>
    <div class="card">
        <p>Tabs with no bar</p>
        <paper-tabs id="plain-tabs" selected="0" no-bar>
            <paper-tab>ITEM ONE</paper-tab>
            <paper-tab>ITEM TWO</paper-tab>
            <paper-tab>ITEM THREE</paper-tab>
          </paper-tabs>
    </div>
    <div class="card">
        <p>Tabs with no ink</p>
        <paper-tabs selected="0" noink>
            <paper-tab>ITEM ONE</paper-tab>
            <paper-tab>ITEM TWO</paper-tab>
            <paper-tab>ITEM THREE</paper-tab>
          </paper-tabs>
    </div>
    <div class="card">
        <p>Tabs with scrollable</p>
        <paper-tabs selected="0" scrollable>
            <paper-tab>NUMBER ONE ITEM</paper-tab>
            <paper-tab>ITEM TWO</paper-tab>
            <paper-tab>THE THIRD ITEM</paper-tab>
            <paper-tab>THE ITEM FOUR</paper-tab>
            <paper-tab>FIFTH</paper-tab>
            <paper-tab>THE SIXTH TAB</paper-tab>
            <paper-tab>NUMBER SEVEN</paper-tab>
            <paper-tab>EIGHT</paper-tab>
            <paper-tab>NUMBER NINE</paper-tab>
            <paper-tab>THE TENTH</paper-tab>
            <paper-tab>THE ITEM ELEVEN</paper-tab>
            <paper-tab>TWELFTH ITEM</paper-tab>
          </paper-tabs>
    </div>
        `
        }
    }

    customElements.define('my-tabs', Tabs);
  

