import { LitElement, html } from 'https://cdn.skypack.dev/lit';

class WscDate extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    value: { type: String }
  }

  get date() {
    if(!this.value) { return new Date() }

    const timestampOrString = parseInt(this.value, 10) || this.value
    return new Date(timestampOrString);
  }

  get year() {
    return this.date.toLocaleString('en', { year: 'numeric' });
  }

  get month() {
    return this.date.toLocaleString('en', { month: 'short' });
  }

  get day(){
    return this.date.toLocaleString('en', {day: "2-digit"});
  }

  render() {
    return html`
      <div class="day">${this.day}</div>
      <div class="month">${this.month}</div>
      <div class="year">${this.year}</div>
    `;
  }
}

customElements.define('wsc-date', WscDate);
