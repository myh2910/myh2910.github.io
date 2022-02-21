$('div.container').before(
`<div class="header">
	<h1><a href="index.html">My Personal Website</a></h1>
</div>
<ul class="topnav">
	<li><a class="inactive" href="index.html">Home</a></li>
	<li class="dropdown">
		<a class="dropdown" href="#">Math Olympiad</a>
		<ul class="dropdown">
			<li><a class="inactive" href="websites.html">Websites</a></li>
			<li><a class="inactive" href="handouts.html">Handouts</a></li>
			<li><a class="inactive" href="theorems.html">Theorems</a></li>
			<li><a class="inactive" href="problems.html">Problems</a></li>
		</ul>
	</li>
	<li><a class="inactive" href="python.html">Python</a></li>
	<li><a class="inactive" href="paper_craft.html">Paper Craft</a></li>
	<li><a class="inactive" href="music.html">Music</a></li>
</ul>`
);
$('div.container').after(
`<div class="footer">
	<span>&copy; 2022 Yohan Min</span>
	<div class="icon icon-github">
		<a href="https://github.com/myh2910" target="_blank">
			<svg viewBox="0 0 16 16" aria-hidden="true">
				<defs>
					<linearGradient id="gradient-github" x1="50%" x2="50%" y1="97.0782153%" y2="0%">
						<stop offset="0%" stop-color="#000"></stop>
						<stop offset="100%" stop-color="#24292e"></stop>
					</linearGradient>
				</defs>
				<path fill="var(--footer-bgcolor)" d="M5.47 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38z"></path>
				<path fill="var(--footer-color)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
			</svg>
		</a>
	</div>
	<div class="icon icon-facebook">
		<a href="https://www.facebook.com/myh2910" target="_blank">
			<svg viewBox="0 0 36 36" aria-hidden="true">
				<defs>
					<linearGradient id="gradient-facebook" x1="50%" x2="50%" y1="97.0782153%" y2="0%">
						<stop offset="0%" stop-color="#0062e0"></stop>
						<stop offset="100%" stop-color="#19afff"></stop>
					</linearGradient>
				</defs>
				<path fill="var(--footer-color)" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
				<path fill="var(--footer-bgcolor)" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
			</svg>
		</a>
	</div>
</div>`
);
const footerHeight = $('div.footer').outerHeight();
$('div.container').css('margin-bottom', `calc(${footerHeight}px + ${$('div.container').css('marginLeft')})`);
const topnavHeight = $('ul.topnav').outerHeight();
$('ul.topnav li a').each(function() {
	if (!$(this).parent().parent().hasClass('dropdown')) {
		$(this).outerHeight(topnavHeight);
	}
});
$('div.footer div.icon').each(function() {
	$(this).css('bottom', 0.5 * (footerHeight - $(this).height()));
});
$('div.container').css('opacity', '1');

CheckLocation();
HashLinkClick();
DropdownClick();
HideContentClick();
IconHover();

function CheckLocation() {
	const hash = window.location.hash;
	if (hash) {
		let target = $(hash);
		$(window).on('load', () => {
			$('html').animate({
				scrollTop: target.offset().top - target.find('a.hash-link').height()
			}, 'fast');
		});
	}
	const href = window.location.href;
	$('ul.topnav li a.inactive').each(function() {
		let link = $(this);
		const url = link.attr('href');
		if (href.indexOf(url) >= 0) {
			link.attr('class', 'active');
		} else if (href.slice(-5) !== '.html') {
			let new_link;
			if (href === 'https://myh2910.github.io/') {
				new_link = 'index.html';
			} else if (href.slice(-2) === '/#') {
				new_link = `${href.slice(0, -1)}index.html`;
			} else if (href.slice(-1) === '#') {
				new_link = `${href.slice(0, -1)}.html`;
			} else {
				new_link = `${href}.html`;
			}
			if (new_link.indexOf(url) >= 0) {
				link.attr('class', 'active');
			}
		}
	});
}

function HashLinkClick() {
	$('div.container').find('h1, h2, h3').each(function() {
		const id = $(this).attr('id');
		if (id) {
			$(this).append(`<a class="hash-link" href="#${id}">#</a>`);
		}
	});
	$('a.hash-link').click(function() {
		$('html').animate({
			scrollTop: $(this).parent().offset().top - $(this).height()
		}, 'fast');
	});
}

function DropdownClick() {
	$('a.dropdown').click(function() {
		$(this).next().slideToggle('fast');
		return false;
	});
}

function HideContentClick() {
	$('a.hide-content').click(function() {
		$(this).next().toggle('fast');
		return false;
	});
}

function IconHover() {
	$('div.icon-facebook').hover(function() {
		let link = $(this).find('svg path');
		link.attr('fill', 'url(#gradient-facebook)');
		link.next().attr('fill', '#fff');
	}, function() {
		let link = $(this).find('svg path');
		link.attr('fill', 'var(--footer-color)');
		link.next().attr('fill', 'var(--footer-bgcolor)');
	});
	$('div.icon-github').hover(function() {
		let link = $(this).find('svg path');
		link.attr('fill', '#fff');
		link.next().attr('fill', 'url(#gradient-github)');
	}, function() {
		let link = $(this).find('svg path');
		link.attr('fill', 'var(--footer-bgcolor)');
		link.next().attr('fill', 'var(--footer-color)');
	});
}
