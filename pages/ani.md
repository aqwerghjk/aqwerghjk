---
layout: default
permalink: /�ϰ�ִ�/
---
{% for post in site.categories.ani %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div class="desc"><span class="">{{ post.title }}{% if post.num %}<br>{{ post.num }}ȭ{% endif %}<br>{{ post.date | date: "%b %-d, %Y" }}</span></div></a>
</div>
{% endfor %} 