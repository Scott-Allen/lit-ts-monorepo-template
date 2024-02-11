import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { input } from "shared-css";

@customElement('example-child-component')
export class ExampleChildComponent extends LitElement {
  static override styles = [
    input,
    css`
    `,
  ];

  @property({ type: String })
  someInput = 'I am input ayee';

  override render() {
    return html`
    <div>
      <h2>I am example child component</h2>
      <input
          type="text"
          @change=${this._inputUpdated}
          value=${this.someInput}
        />
    </div>
    `;
  }

  private _inputUpdated(e: any) {
    const target: HTMLInputElement = e.target;
    this.dispatchEvent(new CustomEvent('child-input-updated', { detail: target.value }));
  }
};

 
declare global {
  interface HTMLElementTagNameMap {
    'example-child-component': ExampleChildComponent;
  }
}
