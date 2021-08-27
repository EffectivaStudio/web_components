import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class WscTrack extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    start: { type: String },
    end: { type: String },
    title: { type: String },
    author: { type: String },
    company: { type: String },
    description: { type: String },
    note: { type: String },
    href: { type: String }
  }

  renderNote() {
    return this.note && html`<div class="note">${this.note}</div>`
  }

  renderDescription() {
    return this.description && html`<div class="description">${this.description}</div>`
  }

  renderBy() {
    return this.author && html`<div class="by">by <a href="https://2021.websummercamp.com/js#speakers" class="author">${this.author}</a>, ${this.company}</div>`
  }

  renderLink() {
    return html `<a href="https://2021.websummercamp.com${this.href}">${this.title}</a>`
  }

  render() {
    return html`
      <div class="col">
        <div class="time">${this.start} - ${this.end}</div>
        ${this.renderNote()}
      </div>
      <div class="col">
        <h1 class="title">
          ${this.href ? this.renderLink() : this.title }
        </h1>
        ${this.renderBy()}
        ${this.renderDescription()}
      </div>
    `;
  }
}

customElements.define('wsc-track', WscTrack);
