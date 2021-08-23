import { LitElement, html } from 'https://cdn.skypack.dev/lit';

class WscHello extends LitElement {
  createRenderRoot() { return this; }

  render() {
    return html`
      <div>
        <h1>Web Summer Camp 2021</h1>
        <p>September 2nd - 3rd 2021, ŠIBENIK, CROATIA</p>
      </div>
    `;
  }
}

customElements.define('wsc-hello', WscHello);
