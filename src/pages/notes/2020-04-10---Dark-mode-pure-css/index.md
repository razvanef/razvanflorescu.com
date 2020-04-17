---
title: Dark mode with pure css
date: "2020-04-10T11:30:00+03:00"
layout: note
draft: false
path: "/notes/dark-mode-css/"
category: "Web Dev"
tags:
  - "webdev"
  - "css"
description: "I've added a toggle button, in the right corner, for dark mode. The easiest way to create a dark theme is to invert all the colors."
---

I've added a toggle button, in the right corner, for dark mode. The easiest way to create a dark theme is to invert all the colors.

~~~~css
.dark-mode {
    filter: invert(100%) hue-rotate(80deg); //just play with the numbers to find the best result
    background-color: #333;
}
img, video, iframe, figure {
    filter: invert(100%) hue-rotate(-80deg); //reset the filter for images and videos
}
~~~~