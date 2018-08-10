import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../node_modules/@polymer/iron-icon/iron-icon.js";
import "../node_modules/@polymer/paper-card/paper-card.js";
import "../node_modules/@polymer/paper-button/paper-button.js";

    class Card extends PolymerElement {
      static get template(){
        return `
            <paper-card heading="Card Element" image="http://placehold.it/350x150/FFC107/000000" alt="Emmental">
                    <div class="card-content">
                    Card Element Demo
                    </div>
                    <div class="card-actions">
                    <paper-button>Share</paper-button>
                    <paper-button>Explore!</paper-button>
                    </div>
                </paper-card>

            <paper-card image="./src/img/pasta.jpg">
        <div class="card-content">
            <div class="cafe-header">Cafe Basilico
            <div class="cafe-location cafe-light">
                <iron-icon icon="communication:location-on"></iron-icon>
                <span>250ft</span>
            </div>
            </div>
            <div class="cafe-rating">
            <iron-icon class="star" icon="star"></iron-icon>
            <iron-icon class="star" icon="star"></iron-icon>
            <iron-icon class="star" icon="star"></iron-icon>
            <iron-icon class="star" icon="star"></iron-icon>
            <iron-icon class="star" icon="star"></iron-icon>
            </div>
            <p>$・Italian, Cafe</p>
            <p class="cafe-light">Small plates, salads &amp; sandwiches in an intimate setting.</p>
        </div>
        <div class="card-actions">
            <div class="horizontal justified">
            <paper-icon-button icon="icons:event"></paper-icon-button>
            <paper-button>5:30PM</paper-button>
            <paper-button>7:30PM</paper-button>
            <paper-button>9:00PM</paper-button>
            <paper-button class="cafe-reserve">Reserve</paper-button>
            </div>
        </div>
        `
        }
    }

    customElements.define('my-card', Card);
  

