---
layout: default
permalink: /목/
---
<script>
	window.onload=function(){document.getElementById("mthu").className="ctd"};
</script>
{% for post in site.categories.thu %}
<div class="img">
<a href="{{ post.url | prepend: site.baseurl }}">
<img src="{{ post.img }}" alt="{{ post.title }}">
<div class="desc"><p style="text-align: center;">{{ post.title }}{% if post.num %}<br>{{ post.num }}화{% endif %}<br>{{ post.date | date: "%b %-d, %Y" }}</p>
</div></a>
</div>
{% endfor %} 