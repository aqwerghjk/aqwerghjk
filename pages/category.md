---
layout: page
title: category
permalink: /category/
---
{% for post in site.categories.2015-1 %}
    <li>{{ post.title }}</li>
{% endfor %}
	<div class="img">
	<a href="{{ post.url | prepend: site.baseurl }}">
	<img src="{{ post.img }}" alt="{{ post.title }}">
	<div class="desc">
	<span class="">{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}<br>
	{{ post.date | date: "%b %-d, %Y" }}</span>
	</div>
	</a>
	</div>