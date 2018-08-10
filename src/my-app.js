
import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/iron-pages/iron-pages.js";
import "../node_modules/@polymer/iron-selector/iron-selector.js";
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";

import "./button.js";
import "./checkbox.js";
import "./badge.js";
import "./card.js";
import "./icon-button.js";
import "./listbox.js";
import "./progress.js";
import "./spinner.js";
import "./tabs.js";
import "./toolbar.js";


export class MyApp extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }

       .hide {
        display: none;
      }
    </style>
      <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}"></app-route>

    <app-drawer-layout fullbleed narrow="{{visible}}">
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer">
        <app-toolbar>Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">

          <a name="button" href="/button">Button</a>
          <a name="checkbox" href="/checkbox">Checkbox</a>
          <a name="badge" href="/badge">Badge</a>
          <a name="listbox" href="/listbox">Listbox</a>
          <a name="toolbar" href="/toolbar">Toolbar</a>
          <a name="icon-button" href="/icon-button">Icon-Button</a>
          <a name="card" href="/card">Card</a>
          <a name="progress" href="/progress">Progress</a>
          <a name="spinner" href="/spinner">Spinner</a>
          <a name="tabs" href="/tabs">Tabs</a>
          
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout has-scrolling-region>

        <app-header slot="header" condenses reveals effects="waterfall">
          <app-toolbar>
            <paper-icon-button id="button" icon="myicons:menu" drawer-toggle></paper-icon-button>
            <div main-title>My App</div>
          </app-toolbar>
        </app-header>

        <iron-pages
            selected="[[page]]"
            attr-for-selected="name" role="main">

            <my-button name="button"></my-button>
            <my-checkbox name="checkbox"></my-checkbox>
            <my-badge name="badge"></my-badge>
            <my-listbox name="listbox"></my-listbox>
            <my-toolbar name="toolbar"></my-toolbar>
            <my-icon-button name="icon-button"></my-icon-button>
            <my-card name="card"></my-card>
            <my-progress name="progress"></my-progress>
            <my-spinner name="spinner"></my-spinner>
            <my-tabs name="tabs"></my-tabs>

        </iron-pages>
      </app-header-layout>
    </app-drawer-layout>
    `
  }

  constructor() {
    super();
    this.name = '3.0 preview';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }

  static get observers() {
        return [
          '_routePageChanged(routeData.page)',
        ];
      }


      _routePageChanged(page) {

        if (page === undefined) {
          return;
        }

        // If no page was found in the route data, page will be an empty string.
        // Deault to 'button' in that case.
        this.page = page || 'button';

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
          this.$.drawer.close();
        }
      }

      _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl('/' + page + '.html');
        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPage404.bind(this),
            true);
      }

      _showPage404() {
        this.page = 'button';
      }

}

customElements.define('my-app', MyApp);