---
layout: default
permalink: /금/
---
<script>
	window.onload=function(){document.getElementById("mfri").className="ctd"};
</script>
{% for page in site.pages %}
{% if page.categories contains 'fri' %}
	<div id="info">
	<a href="{{ page.url | prepend: site.baseurl }}">
	<img id="info" alt="{{ page.title }}" src="{{ page.img }}">
	</a>
	</div>
	<div id="info"><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></div>
{% endif %}
{% endfor %}