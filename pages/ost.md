---
layout: default
permalink: /ost/
---
{% for post in site.categories.ost %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div id="img_text">{{ post.title }}
<div class="img_text">갱신일: {{ post.date | date: "%b %-d, %Y" }}</div></div>
</div></a>
</div>
{% endfor %} 