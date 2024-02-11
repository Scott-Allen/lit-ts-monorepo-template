import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { divStyle } from "shared-css";

@customElement('example-component')
export class ExampleComponent extends LitElement {
  static override styles = [
    divStyle,
    css`
    `,
  ];

  @property({ type: String })
  someInput = 'I am input ayee';

  override render() {
    return html`
    <div>${this.someInput}</div>
    `;
  }
};
 
declare global {
  interface HTMLElementTagNameMap {
    'example-component': ExampleComponent;
  }
}
