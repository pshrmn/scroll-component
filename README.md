# scroll-component

When using [React Router v4](https://github.com/ReactTraining/react-router/tree/v4), you might have noticed that when you navigate, the page does not automatically scroll to the hash portion of the URI. With the `<ScrollIntoView>` component, you can pass it an `id` value which will identify an element in the page and scroll to it.

This uses [`element.scrollIntoView`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) to scroll. It supports the `alignToTop` argument because it is widely supported, but not the `scrollIntOViewOptions` because it is currently only supported by Firefox.

## `<ScrollIntoView>`

#### `id`

The `id` prop is the id of th element in the page that should be scrolled to. The `id` should begin with a `#`, for example `#scroll-to-me`.

```js
<ScrollIntoView id={id} />
```

#### `alignToTop`

By default, `element.scrollIntoView` will align the top of the identified element to the top of the page (or as near as it possibly can). If you would prefer to align the bottom of the identified element with the bottom of the page, set `alignToTop` to `false`.

```js
<ScrollIntoView alignToTop={false} />
```

The component can be used by itself or as a container.

```js
const PageOne = (props) => (
  <div>
    <ScrollIntoView id={props.location.hash} />
    <h1>Page One</h1>
  </div>
)

// or

const PageTwo = (props) => (
  <ScrollIntoView id={props.location.hash}>
    <h1>Page Two</h1>
  </ScrollIntoView>
)
```

### Example

React Router provides its matched components with a `location` prop. This is an object with the current location divided into its `pathname`, `search`, and most importantly `hash` properties. The `hash` value is the element identifier that you should pass to the `<ScrollIntoView>` component.

**Note:** This will not work with a hash history because the hash portion of the URL is being used for routing.

```js
import React from 'react'
import ScrollIntoView from 'scroll-component'

const FAQ = (props) => (
  <div>
    <ScrollIntoView id={props.location.hash} />
    <div id='who'>...</div>
    <div id='what'>...</div>
    <div id='where'>...</div>
    <div id='when'>...</div>
    <div id='why'>...</div>
    <div id='how'>...</div>
  </div>
)
```
