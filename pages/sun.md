---
layout: default
permalink: /일/
---
<script>
	window.onload=function(){document.getElementById("msun").className="ctd"};
</script>
{% for page in site.pages %}
{% if page.categories contains 'sun' %}
<div class="img">
<a href="{{ page.url | prepend: site.baseurl }}">
<img src="{{ page.img }}" alt="{{ page.title }}">
<div class="desc"><p style="text-align: center;">{{ page.title }}{% if page.num %}<br>{{ page.num }}화{% endif %}<br>{{ page.date | date: "%b %-d, %Y" }}</p>
</div></a>
</div>
{% endif %}
{% endfor %}