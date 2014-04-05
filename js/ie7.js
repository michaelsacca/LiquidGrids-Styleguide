/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'liquidweb-glyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icon_35084': '&#x40;',
		'icon-icon_34354': '&#x23;',
		'icon-icon_38737': '&#x24;',
		'icon-chart': '&#x31;',
		'icon-chart2': '&#x32;',
		'icon-thumbsup': '&#x33;',
		'icon-cog': '&#x34;',
		'icon-lifebuoy': '&#x21;',
		'icon-statistics': '&#x35;',
		'icon-cross': '&#x36;',
		'icon-history': '&#x37;',
		'icon-list': '&#x39;',
		'icon-arrow-down': '&#x38;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
