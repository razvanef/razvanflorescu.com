---
title: In JavaScript, functions are objects
date: "2019-11-09T23:46:37.121Z"
layout: note
draft: false
path: "/posts/in-javascript-functions-are-objects/"
category: "Web Dev"
tags:
  - "webdev"
  - "javaScript"
description: "In JS, we can create objects from a function using the new keyword. JavaScript functions are a special type of objects, called function objects."
---

In JS , we can create objects from a function using the new keyword.\
JavaScript functions are a special type of objects, called function objects.

~~~~javascript
function isObject() {
  console.log("This function is an object");
}
console.log(typeof isObject); // => function
console.log(isObject instanceof Object); // => true
~~~~