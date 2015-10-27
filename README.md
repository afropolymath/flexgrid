# Flexgrid
Flexgrid is a flexbox based CSS Layout System. It's simple and easy to use and can be used on it's own or with any other CSS framework.

##Usage
To use Flexgrid, all you need to do is embed the compiled CSS within your web page.

```html
<link rel="stylesheet" href="/dist/flexgrid.min.css" />
```

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

Some other operations you can perform include aligning child elements in the vertical and horizontal axes. To align the child elements in the vertical axis, you will be using a base class of `vertical`. This class is used in conjunction with another class which specifies how the alignment should be.

*Align Child Elements in the vertical center*
```html
<div class="flex row-layout vertical align-center">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

*Align Child Elements in the vertical top*
```html
<div class="flex row-layout vertical align-top">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

*Align Child Elements in the vertical bottom*
```html
<div class="flex row-layout vertical align-bottom">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

Horizontal alignment is similar to vertical alignment but we make use of a base class of `horizontal` along with another class that specifies the horizontal direction.

*Align Child Elements in the horizontal left*
```html
<div class="flex row-layout horizontal align-left">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

*Align Child Elements in the horizontal center*
```html
<div class="flex row-layout horizontal align-center">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

*Align Child Elements in the horizontal right*
```html
<div class="flex row-layout horizontal align-right">
  <div>Side by side element</div>
  <div>Side by side element</div>
</div>
```

At any point in time, if we need to make a child element fill up space in the parent, use the `fill-parent` class. A typical example would be if we need to create a simple navigation bar with a logo and some other text. Using **Flexgrid** you could do this:

```html
<div class="flex row-layout">
  <div class="logo">Logo</div>
  <div class="fill-parent">Side by side element</div>
</div>
```

In this example above, the `logo` div has a fixed size which is set in the CSS, while the other div is made to fill up all the remainder space in the parent div.
