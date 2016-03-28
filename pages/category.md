---
layout: page
title: category
permalink: /category/
---
{% for category in site.categories %}
  <li><a name="{{ category | first }}">{{ category | first }}</a>
    {% for posts in category %}
      {% for post in posts %}
        <div class="img">
			<a href="{{ post.url | prepend: site.baseurl }}">
			<img src="{{ post.img }}" alt="{{ post.title }}">
             <div class="desc"><span class="">{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}<br>{{ post.date | date: "%b %-d, %Y" }}</span></div></a>
			</div>
      {% endfor %}
    {% endfor %}
  </li>
{% endfor %}