---
layout: default
permalink: /완결애니/
---
{% for post in site.categories.ani %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div id="img_text">{{ post.title }}
<div class="img_text">{% if post.num %}회차수: {{ post.num }}{% endif %}</div>
<div class="img_text">갱신일: {{ post.date | date: "%b %-d, %Y" }}</div></div>
</div></a>
</div>
{% endfor %} 