/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="my-custom-item-default-theme">
  <template>
    <style>
      :host {
        padding: 4px;
        opacity: 0.7;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }

      [part="label"] {
        display: flex;
        flex: 1;
        padding: 5px 10px;
      }

      [part="icon"] {
        display: flex;
        align-items: center;
      }

      [part="icon"] ::slotted(*) {
        border-radius: 50%;
        max-width: 24px;
        max-height: 24px;
      }

      [part="badge"] {
        font-size: 75%;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
{
  /**
   * `<my-custom-item>` is a Polymer 2 element providing layout for items in tabs and menus.

   * It has 4 slots:
   *  - The `prefix` slot to add additional content at the left of the label.
   *  - The `icon` slot to provide an icon or image.
   *  - The `label` slot for the text of the item.
   *  - The `badge` slot for adding some thext the small area.
   *  - The `suffix` slot to add additional content at the right of the label.
   *
   * ### Styling
   *
   * The following shadow DOM parts are available for styling:
   *
   * Part name | Description | Theme for Element
   * ----------------|----------------|----------------
   * `icon` | The item icon | my-custom-item
   * `label` | The item label | my-custom-item
   * `badge` | For auxilary content | my-custom-item
   *
   * @memberof Vaadin
   * @mixes Vaadin.ThemableMixin
   */
  class MyCustomItemElement extends ThemableMixin(PolymerElement) {
    static get template() {
      return html`
    <style>
      :host {
        display: flex;
        position: relative;
        outline: none;
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
      }
    </style>
    <div class="container">
      <slot name="prefix"></slot>
      <div part="icon">
        <slot name="icon"></slot>
      </div>
      <div part="label">
         <slot></slot>
      </div>
      <div part="badge">
        <slot name="badge"></slot>
      </div>
      <slot name="suffix"></slot>
    </div>
`;
    }

    static get is() {
      return 'my-custom-item';
    }
  }

  customElements.define(MyCustomItemElement.is, MyCustomItemElement);

  Vaadin.MyCustomItemElement = MyCustomItemElement;
}
