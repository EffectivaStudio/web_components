import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class WscDate extends LitElement {

  static properties = {
    value: { type: String }
  }

  static styles = css`
    :host {
      font-family: Arial, Helvetica, sans-serif;
      color:#333;
      display: block;
      background-color: #f8f8f8;
      border: 1px solid #ccc;
      padding:20px;
      border-radius: 6px;
      width: 100px;
      text-align: center;
      margin:5px;
      line-height:1.3em;
    }

    .day {
      line-height:1em;
      color: var(--dayColor);
      font-size:var(--dayFontSize, 2em);
    }
    .month{
      text-transform: uppercase;
      font-size:var(--monthFontSize, 1.2em);
      color: var(--monthColor, var(--primary, #009));
      font-weight: bold;
    }
    `

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
