import { LitElement } from 'https://cdn.skypack.dev/lit';

class WscLazyLoad extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    href: { type: String }
  }

  loadHTML() {
    return fetch(this.href).then(response => response.text());
  }

  render() {
    this.loadHTML().then((html) => {
      setTimeout(() => { this.innerHTML = html }, 500);
    })
  }

}

customElements.define('wsc-lazy-load', WscLazyLoad);
