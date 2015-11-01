# Flexgrid
Flexgrid is a flexbox based CSS Layout System. It's simple and easy to use and can be used on it's own or with any other CSS framework.

##Installation
Installing Flexgrid can be done very easily using bower.

```
bower install flxgrid --save
```

##Usage
To use Flexgrid, all you need to do is embed the compiled CSS within your web page.

```html
<link rel="stylesheet" href="/dist/flexgrid.min.css" />
```

##Getting Started
To get started using the flex features you can create a parent flex container using the `flex` class

```html
<div class="flex">
  <!-- Some random content -->
</div>
```

To align the child elements in rows or columns, you can make use of the `row-layout` and `column-layout` classes respectively.

```html
<div class="flex row-layout">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

To arrange child elements in a column
```html
<div class="flex column-layout">
  <div>Stacked element</div>
  <div>Stacked element</div>
</div>
```

##Child Element Positioning
To make use of child element positioning available in Flexgrid, you can make use of one of the `align-<vertical>-<horizontal>` classes where `<vertical>` can be one of `top`, `middle` and `bottom` and `<horizontal>` can be one of `left`, `center` and `bottom`.

What this means is that, for instance, to get that vertical centered div you've been looking for, all you need to do is this.
```html
<div class="flex row-layout align-middle-left">
  <div>DIV 1</div>
  <div>DIV 2</div>
</div>
```
Doing this aligns DIV1 and DIV2 side by side and vertically centered within the parent `div`. 

The classes above are shortcut classes for the much longer `<axis> <alignment>` classes, where `<axis>` can be one of `vertical` or `horizontal`, and represent the axis we are targetting to align child elements in. The `<alignment>` class depends on the `<axis>` class specified and for `vertical` can be `align-top`, `align-middle` and `align-bottom`. Specifying `vertical <alignment>` will align child elements to the top, middle or bottom depending on what `<alignment>` was specified.

*We could align child elements to the bottom doing this*
```html
<div class="flex row-layout vertical align-center">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

The same exact thing goes for horizontal alignment. You can specify `align-left`, `align-center` or `align-right` for the `<alignment>` in this case and it does exactly what you'd expect. Aligns the child elements left, center or right.

*We could align child elements to the right doing this*
```html
<div class="flex row-layout horizontal align-right">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

*We could align combine both like this to align child elements to middle right*
```html
<div class="flex row-layout horizontal align-right vertical align-center">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

At any point in time, if we need to make a child element fill up space in the parent, use the `fill` class. A typical example would be if we need to create a simple navigation bar with a logo and some other text. Using **Flexgrid** you could do this:

```html
<div class="flex row-layout">
  <div class="logo">Logo</div>
  <div class="fill">Side by side element</div>
</div>
```

In this example above, the `logo` div has a fixed size which is set in the CSS, while the other div is made to fill up all the remainder space in the parent div.

You can use this class to create different types of layouts. A typical example will be creating a 4 column grid with evenly sized columns. You can do this very easily with Flexgrid. All you need to do is set `fill` on all classes below the parent.

```html
<div class="flex row-layout">
  <div class="fill">Side by side element</div>
  <div class="fill">Side by side element</div>
  <div class="fill">Side by side element</div>
  <div class="fill">Side by side element</div>
</div>
```