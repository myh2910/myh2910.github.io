// Initialize
InitHeader();
InitLoader();
// InitCode();
InitFooter();
InitBody();

CheckCurrLink();
DropdownClick();
TextClick();
IconHover();

function InitHeader() {
	$('.page-container').prepend(
`<div class="header">
	<h1><a href="index.html">My Personal Website</a></h1>
</div>
<ul class="topnav">
	<li><a class="inactive" href="index.html">Home</a></li>
	<li class="dropdown">
		<a class="a-dropdown" href="#">Math Olympiad</a>
		<ul class="dropdown-content">
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
}

function InitLoader() {
	$('body').prepend(
`<div class="loader"></div>
<div class="loader-container">
	<span class="loader-text">Loading...</span>
	<div class="loader-circle"></div>
</div>`
	);
}

function InitBody() {
	$('.page-content').css('display', 'block');
	var text_width = $('.loader-text').width();
	var text_height = $('.loader-text').height();
	var my_left = 'calc(50% - .5*' + String(text_width) + 'px)';
	var my_top= 'calc(50% - .5*' + String(text_height) + 'px)';
	$('.loader-text').css('top', my_top);
	$('.loader-text').css('left', my_left);
	var hide_time = 300;
	var interval = 40;
	var header_height = String($('.header').height()) + 'px';
	$(window).on('load', function() {
		$('.loader-container').get(0).animate(
			[{'transform': 'scale(.001)', 'opacity': '0'}],
			{duration: hide_time + interval, easing: 'linear'}
		);
		$('.loader').get(0).animate(
			[{'background': 'var(--header-bgcolor)', 'height': header_height}],
			{duration: hide_time + interval, easing: 'linear'}
		);
		setTimeout(function() {
			$('.loader-container').remove();
			$('.loader').remove();
			$('.page-content').css('opacity', '1');
			$('.header').css('display', 'block');
			$('.topnav').css('display', 'flex');
			$('.footer').css('display', 'block');
		}, hide_time);
	});
}

function InitCode() {
	codes = $('.code-hover code');
	source = codes.attr('src');
	$.get(source, function(data) {
		codes.append(data);
	});
}

function InitFooter() {
	$('.footer').html(
`&copy; 2022 Yohan Min
<div class="icon icon-github">
	<a target="_blank" href="https://github.com/myh2910">
		<svg viewBox="0 0 16 16" aria-hidden="true">
			<defs>
				<linearGradient id="gradient-github" x1="50%" x2="50%" y1="97.0782153%" y2="0%">
					<stop offset="0%" stop-color="black"></stop>
					<stop offset="100%" stop-color="#24292e"></stop>
				</linearGradient>
			</defs>
			<path fill="var(--footer-bgcolor)" d="M5.47 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38z"></path>\
			<path fill="var(--footer-color)" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
		</svg>
	</a>
</div>
<div class="icon icon-facebook">
	<a target="_blank" href="https://www.facebook.com/myh2910">
		<svg viewBox="0 0 36 36" aria-hidden="true">
			<defs>
				<linearGradient id="gradient-facebook" x1="50%" x2="50%" y1="97.0782153%" y2="0%">
					<stop offset="0%" stop-color="#0062E0"></stop>
					<stop offset="100%" stop-color="#19AFFF"></stop>
				</linearGradient>
			</defs>
			<path fill="var(--footer-color)" d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
			<path fill="var(--footer-bgcolor)" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
		</svg>
	</a>
</div>`
	);
}

// Check if the current link matches with one of the links in navigation bar
function CheckCurrLink() {
	$('.topnav li a.inactive').each(function() {
		link = $(this);
		url = link.attr('href');
		curr_url = window.location.href;
		if (curr_url.indexOf(url) >= 0) {
			link.attr('class', 'active');
		} else if (curr_url.slice(-5) !== '.html') {
			var new_link;
			if (curr_url === 'https://myh2910.github.io/') {
				new_link = 'index.html';
			} else if (curr_url.slice(-2) === '/#') {
				new_link = curr_url.slice(0, -1) + 'index.html';
			} else if (curr_url.slice(-1) === '#') {
				new_link = curr_url.slice(0, -1) + '.html';
			} else {
				new_link = curr_url + '.html';
			}
			if (new_link.indexOf(url) >= 0) {
				link.attr('class', 'active');
			}
		}
	});
}

function DropdownClick(){
	$('.a-dropdown').click(function() {
		link = $(this);
		link.next().slideToggle('fast');
		return false;
	});
}

function TextClick(){
	$('.span-hover').click(function() {
		link = $(this);
		link.next().toggle('fast');
		link.toggleClass('span-hover color-hover');
		return false;
	});
}

function IconHover() {
	$('.icon-facebook').hover(function() {
		link = $(this).find('svg path');
		link.attr('fill', 'url(#gradient-facebook)');
		link.next().attr('fill', 'white');
		$(this).css('transform', 'scale(1.25)');
	}, function() {
		link = $(this).find('svg path');
		link.attr('fill', 'var(--footer-color)');
		link.next().attr('fill', 'var(--footer-bgcolor)');
		$(this).css('transform', 'scale(1)');
	});
	$('.icon-github').hover(function() {
		link = $(this).find('svg path');
		link.attr('fill', 'white');
		link.next().attr('fill', 'url(#gradient-github)');
		$(this).css('transform', 'scale(1.25)');
	}, function() {
		link = $(this).find('svg path');
		link.attr('fill', 'var(--footer-bgcolor)');
		link.next().attr('fill', 'var(--footer-color)');
		$(this).css('transform', 'scale(1)');
	});
}
