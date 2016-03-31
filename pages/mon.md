---
layout: default
permalink: /월/
---
<script>
	window.onload=function(){document.getElementById("mmon").className="ctd"};
</script>
{% for page in site.pages %}
{% if page.categories contains 'mon' %}
<div class="img">
<a href="{{ page.url | prepend: site.baseurl }}">
<img src="{{ page.img }}" alt="{{ page.title }}">
<div class="desc"><p style="text-align: center;">{{ page.title }}{% if page.num %}<br>{{ page.num }}화{% endif %}<br>{{ page.date | date: "%b %-d, %Y" }}</p>
</div></a>
</div>
{% endif %}
{% endfor %}