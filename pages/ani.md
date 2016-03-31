---
layout: default
permalink: /완결애니/
---
{% for post in site.categories.ani %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div class="desc"><p style="text-align: center;">{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}<br>{{ post.date | date: "%b %-d, %Y" }}</p>
</div></a>
</div>
{% endfor %} 