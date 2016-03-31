---
layout: default
permalink: /금/
---
<script>
	window.onload=function(){document.getElementById("mfri").className="ctd"};
</script>
{% for page in site.pages %}
{% if page.categories contains 'fri' %}
<div class="img">
<a href="{{ page.url | prepend: site.baseurl }}">
<img src="{{ page.img }}" alt="{{ page.title }}">
<div class="desc"><p style="text-align: center;">{{ page.title }}{% if page.num %}<br>{{ page.num }}화{% endif %}<br>{{ page.date | date: "%b %-d, %Y" }}</p>
</div></a>
</div>
{% endif %}
{% endfor %}