import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { global, button, card } from 'shared-css';
import "example-child-component";

@customElement('example-component')
export class ExampleComponent extends LitElement {
  static override styles = [
    global,
    card,
    button,
    css`
    `,
  ];

  @state()
  private _inputtedValues : string[] = [];

  @property({ type: String })
  someInput = 'I am default someInput';

  override render() {
    return html`
    <div class="card">
      <h1>I am example component</h1>
      <example-child-component @child-input-updated="${this._inputUpdated}" someInput="${this.someInput}"></example-child-component>
      <div class="button_panel">
          <button @click=${this._clear} part="button">Clear!</button>
      </div>
    </div>
    <div ?hidden=${this._inputtedValues.length < 1}>
      <h3> Values </h3>
      <ul >
        ${this._randerInputtedValues()}
      </ul>
    </div>
    `;
  }

  // Demo of event lister from child event dispatch.
  private _inputUpdated = (event: CustomEvent) => {
    this._inputtedValues = [...this._inputtedValues, event.detail];
  }

  // Demo of button click event
  private _clear() {
    this._inputtedValues = []; 
  }

  // Demo of dynamically rendering to dom based on changing state
  private _randerInputtedValues() {
    return this._inputtedValues.map(
      (val, index) =>
        html`<li>${index} - ${val}</li>`
    );
  }
};
 
declare global {
  interface HTMLElementTagNameMap {
    'example-component': ExampleComponent;
  }
}
