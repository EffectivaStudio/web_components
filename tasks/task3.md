# Task 3 - WscHello Isolation and customization aka ShadowDOM

Isolate component so it can be used anywhere but allow some customization.

For this we are going to use existing `wsc-date.js`

## TODO

  * Move css from `styles.css` to the component

  * Use CSS variables insde of the component to allow customization



## Hints

### How to enable ShadowDOM?

```js
  // Remove following part wich enables LightDOM.
  createRenderRoot() { return this; }
```


### How to write css in component?

```js
  // Add css to imports
  import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

  class WscHello extends LitElement {

    // Add styles variable
    static styles = css`
      h1 { color: blue; }
    `
  }
```

### How to write css variable with default value?

```css
  h1 {
    color: var(--primary, blue)
  }
```


### How to target root element inside component with css?

```css
  :host {
    background: blue;
  }
```

### How to test customization?

Override variable that you have used in component with css class that
will be appied to a component.

```html
  <style>
    .special {
      --primary: red;
    }
  </style>

  <wsc-hello class="special"></wsc-hello>
```
