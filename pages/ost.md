---
layout: default
permalink: /ost/
---
{% for post in site.categories.ost %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div class="desc"><p>{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}</p>
</div></a>
</div>
{% endfor %} 