import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-listbox/paper-listbox.js";
import "../node_modules/@polymer/paper-item/paper-item.js";

    class Listbox extends PolymerElement {
      static get template(){
        return `
        <div class="card">
        <p>Listbox not selected by defalt</p>
        <paper-listbox>
            <paper-item>Inbox</paper-item>
            <paper-item>Starred</paper-item>
            <paper-item>Sent mail</paper-item>
            <paper-item>Drafts</paper-item>
        </paper-listbox>
        </div>

        <div class="card">
        <p>Listbox selected by defalt</p>
        <paper-listbox selected="0">
            <paper-item>Inbox</paper-item>
            <paper-item disabled>Starred</paper-item>
            <paper-item>Sent mail</paper-item>
            <paper-item>Drafts</paper-item>
        </paper-listbox></div>

        <div class="card">
            <p>Multi select Listbox</p>
        <paper-listbox multi>
            <paper-item>Bold</paper-item>
            <paper-item>Italic</paper-item>
            <paper-item>Underline</paper-item>
            <paper-item>Strikethrough</paper-item>
            </paper-listbox>
        </div>
        `
        }
    }

    customElements.define('my-listbox', Listbox);
  

