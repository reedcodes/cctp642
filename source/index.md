---
layout: layouts/default.njk
title: Home Page
home: true
---

{% for page in collections.nav -%}
- [{{ page.data.title }}]({{ page.data.dirPath }}{{ page.url }})
{%- endfor %}
