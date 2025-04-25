---
title: "Markdown Syntax Guide"
date: 2025-04-24
draft: false
description: "A guide to using Markdown for writing blog posts"
tags: ["markdown", "syntax", "guide"]
categories: ["tutorials"]
author: "Linda Mohamed"
image: "images/6CD17D9C-9362-4A39-9E9E-C4C9AF08C6EE.png"
syntax: true
---

# Markdown Syntax Guide

This article offers a sample of basic Markdown syntax that can be used in Hugo content files. It also shows how basic HTML elements are decorated with CSS in this theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur?

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

## Code Blocks

### Code block with backticks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### Code block with syntax highlighting

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
def example_function():
    """
    This is an example function with Python syntax highlighting.
    """
    print("Hello, World!")
    return True
```

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

* List item
* Another item
* And another item

### Nested list

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## Links

[Assemble](https://assembleapp.co/)

[Using Markdown](https://www.markdownguide.org/)

## Images

![Digital Art Illustration](/images/6CD17D9C-9362-4A39-9E9E-C4C9AF08C6EE.png)

## Other Elements

### Horizontal Rule

---

### Abbreviations

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

### Subscript and Superscript

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

### Keyboard

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

### Mark

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
