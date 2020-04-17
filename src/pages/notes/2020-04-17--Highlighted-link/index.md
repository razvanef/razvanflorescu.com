---
title: Highlighted link css
date: "2020-04-17T19:01:00+03:00"
layout: note
draft: false
path: "/posts/highlighted-link-css/"
category: "Web Dev"
tags:
  - "webdev"
  - "css"
description: "A simple way to identificate the links in a page"
---

A simple way to identificate the links in a page
~~~~css
a.highlighted {
    background: linear-gradient(to right, #FFEA2A, #FFEA2A);
    background-size: 300% 40%;
    background-repeat: no-repeat;
    background-position: 0% 100%;
}
~~~~

<a style="background: linear-gradient(to right, #FFEA2A, #FFEA2A);
    background-size: 300% 40%;
    background-repeat: no-repeat;
    background-position: 0% 100%;
    text-decoration: none;
    color: #000;"
    href="#">There's nothing here</a>