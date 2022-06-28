# LightWindCSS code explication

The code has two main part of working for the paramered functions what do that we input a value which cannot be read by the CSS.

## 1. All classes detection

First think that the LightWindCSS do, it detect all the classes to create a style tag which create all the paramered classes. For example:

```html
<div class="p-[10px]"></div>
```

The html div, have a paramered padding, defined by the `[]` what do that a class is created which say that the element with the class `p-[10px]` has a padding of 10px.

## 2. Classes observation

After creating all the classes, the code observe the body to know if a new paramered class is not definied, what shout mean a new class to create in the style tag.
