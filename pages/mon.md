---
layout: page
---
{% for post in site.categories.mon %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">{% endif %}
<img src="{{ post.img }}" alt="{{ post.title }}">
<div class="desc"><span class="">{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}<br>{{ post.date | date: "%b %-d, %Y" }}</span></div></a>
</div>
{% endfor %} 