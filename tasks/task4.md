# Task 4 - Wsc List Item (Slots)

Create a component that will be used as a skeleton with collapse functionality.

All of the CSS and HTML in file `components/wsc-list-item.js`.

## We will recreate program in following:

  * Left: `wsc-date`

  * Center: H1 with Day name as it is now

  * Right: Button that we'll attach some functionally

  * Footer: Will contain tracks

## TODO

  * Use named and unnamed slots to achieve this

  * On button click show/hide footer content and toggle wording Open/Closed

  * Component should be in collapsed state upon initialization

  * Create program with all existing components and remove extra html

## Hints

### How to define slots inside of a component?

```html
  <!-- Unnamed -->
  <slot></slot>

  <!-- Named -->
  <slot name="left"></slot>
```


### How to use slot outside of the component?

```html
  <my-component>
    <h1 slot="left">Hello</h1>

    <!-- Everything else will go to unamed slot -->
  </my-component>
```

### How to add an event in component?

```js
  handleClick(event){
    console.log(event);
    // Do something
  }
  render() {
    return html`
      <div @click=${this.handleClick}></div>
    `
  }
```

### How to set default value for property?

```js
  // use constructor
  constructor() {
    super();
    this.my_property = "Hello";
  }
```
