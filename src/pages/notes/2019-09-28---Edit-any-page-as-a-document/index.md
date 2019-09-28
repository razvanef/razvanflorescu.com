---
title: Edit any page as a document
date: "2019-09-28T11:33:44+03:00"
layout: note
draft: false
path: "/posts/edit-any-document/"
category: "Web Dev"
tags:
  - "webdev"
  - "javaScript"
description: "The html dom property `designMode` makes the entire document editable, and `contentEditable` allows you to control if a specific element (and all it's descendant nodes) is editable."
---

The html dom property `designMode` makes the entire document editable, and `contentEditable` allows you to control if a specific element (and all it's descendant nodes) is editable.

~~~~javascript
document.designMode = "on" || "off";
~~~~

~~~~javascript
element.contentEditable = true || false;
~~~~

~~~~html
<div contenteditable="true">
  Try edit this text!
</div>
~~~~

<p contenteditable="true">
  Try edit this text!
</p>