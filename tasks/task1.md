# Task 1 - WSC Date view

We already have HTML and CSS ready in `index.html` and `style.css` but now we want to create it as a component.

## TODO

  * `<wsc-date value="Mon, 02 Sep 2021"></wsc-date>`

  * In `components/wsc-date.js` you will find empty component which is already included in page

  * Date component should accept any string from which we can parse a `Date`

  * Adjust CSS selectors in `style.css`

  * Remove plain date-view divs an keep only web components


### Bonus

  * Component can also accept unixTimestamp
  * Use current date if value attribute is empty


## Hints:

### How to parse a Date in JS?

```js
new Date(string)
new Date(unixTimestamp)
```


### What can be parsed as Date?

```js
// Try this in browser console
const date = new Date()
date.toDateString()
date.toGMTString()
date.toISOString()
date.toJSON()
date.getTime()
```


## Formatting
```js
// Year
date.toLocaleString('en', { year: 'numeric' });

// Month
date.toLocaleString('en', { month: 'short' });

// Day
date.toLocaleString('en', {day: "2-digit"});
```

