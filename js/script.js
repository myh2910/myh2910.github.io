$('div.container').before(
`<ul class="topnav">
	<li><a href="/index.html">Home</a></li>
	<li><a href="/blog.html">Blog</a></li>
	<li class="dropdown">
		<a class="dropdown">Math Olympiad <span class="caret"></span></a>
		<ul class="dropdown-menu">
			<li><a href="/websites.html">Websites</a></li>
			<li><a href="/handouts.html">Handouts</a></li>
			<li><a href="/theorems.html">Theorems</a></li>
			<li><a href="/problems.html">Problems</a></li>
		</ul>
	</li>
	<li class="dropdown">
		<a class="dropdown">Hobbies <span class="caret"></span></a>
		<ul class="dropdown-menu">
			<li><a href="/music.html">Music</a></li>
			<li><a href="/python.html">Python</a></li>
			<li><a href="/paper_craft.html">Paper Craft</a></li>
		</ul>
	</li>
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
				<path fill="var(--bgcolor-1)" d="M5.47 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38z"></path>
				<path fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
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
				<path fill="#fff" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
				<path fill="var(--bgcolor-1)" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
			</svg>
		</a>
	</div>
</div>`
);

InitPage();
HashLink();
CheckSpace();
HideContent();
IconHover();

function InitPage() {
	const footerHeight = $('div.footer').outerHeight();
	$('div.container').css('margin-bottom', `calc(${footerHeight}px + ${$('div.container').css('marginLeft')})`);
	const href = $('head').attr('data-href');
	if (href) {
		$(`ul.topnav li > a[href='${href}']`).attr('class', 'active');
	}
}

function HashLink() {
	$('div.container').find('h1, h2, h3').each(function() {
		const id = $(this).attr('id');
		if (id) {
			$(this).append(`<a class="hash-link" href="#${id}">#</a>`);
		}
	});
	$('div.container').css('display', 'block');
	const hash = window.location.hash;
	if (hash) {
		let target = $(hash);
		$(window).on('load', () => {
			$('html').animate({
				scrollTop: target.offset().top - target.find('a.hash-link').height()
			}, 'fast');
		});
	}
	$('a.hash-link').click(function() {
		$('html').animate({
			scrollTop: $(this).parent().offset().top - $(this).height()
		}, 'fast');
	});
}

function CheckSpace() {
	const windowWidth = document.body.clientWidth;
	$('ul.dropdown-menu').each(function() {
		let menuBound = this.getBoundingClientRect();
		if (menuBound.width + menuBound.x > windowWidth) {
			$(this).css('right', '0');
		}
		$(this).hide();
	});
	$('li.dropdown').hover(function() {
		$(this).find('ul.dropdown-menu').toggle();
	});
}

function HideContent() {
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
		link.attr('fill', '#fff');
		link.next().attr('fill', 'var(--bgcolor-1)');
	});
	$('div.icon-github').hover(function() {
		let link = $(this).find('svg path');
		link.attr('fill', '#fff');
		link.next().attr('fill', 'url(#gradient-github)');
	}, function() {
		let link = $(this).find('svg path');
		link.attr('fill', 'var(--bgcolor-1)');
		link.next().attr('fill', '#fff');
	});
}
