---
layout: page
title: category
permalink: /category/
---
{% for category in site.categories %}
    <h3>{{ category | first }}</h3>
    {% for post in page.categories.category %}
      {{ post.title }}<br>
    {% endfor %}            
{% endfor %}
{% for category in site.categories %}
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}