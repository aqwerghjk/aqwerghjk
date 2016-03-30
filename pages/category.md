---
layout: page
title: category
permalink: /category/
---
{% for post in site.categories.2015-4 %}
	<div class="img">
	<a href="{{ post.url | prepend: site.baseurl }}">
	<img src="{{ post.img }}" alt="{{ post.title }}">
	<div class="desc">
	<p>{{ post.title }}{% if post.num %}{{ post.num }}화{% endif %}
	{{ post.date | date: "%b %-d, %Y" }}</p>
	</div>
	</a>
	</div>
{% endfor %}