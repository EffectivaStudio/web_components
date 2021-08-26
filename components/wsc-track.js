import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class WscTrack extends LitElement {

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

  static styles = css`
    :host {
      font-size:1.4em;
      color: var(--primary);
      border:1px solid #ccc;
      border-width: 1px 0;
      margin-top:-1px;
      display: flex;
    }

    a {
      color: var(--primary);
      position: relative;
      text-decoration: none;;
    }

    a::before {
      content: "";
      display: block;
      position: absolute;
      width: calc(100% + .1em);
      height: .33em;
      left: -.05em;
      bottom: .1em;
      -webkit-transition: all .15s ease;
      transition: all .15s ease;
      background-color: #f8d84b;
      z-index: -1;
    }

    a:hover::before {
      height:1em;
    }

    .note, .description {
      margin:0.5em 0;
      font-style: italic;
    }

    .col {
      padding:16px;
      flex:100%;
    }

    .col:first-child {
      flex:1 200px;
    }

    .author {
      font-weight: bold;
    }

    .title {
      font-size:1.4em;
      margin:0 0 0.5em;
    }

    .time {
      margin-bottom:1em;
    }
  `

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
