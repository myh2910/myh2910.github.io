InitPlaylist();

function InitPlaylist() {
	let current = 0;
	let audio = $('.audio-playlist');
	let playlist = $('.ol-playlist');
	let tracks = playlist.find('li a');
	let len = tracks.length;
	let link;
	audio[0].volume = 0.7;
	audio[0].play();
	playlist.find('a').click(function(e) {
		e.preventDefault();
		link = $(this);
		current = link.parent().index();
		RunPlaylist(link, audio[0]);
	});
	audio[0].addEventListener('ended', function(e) {
		current++;
		if (current === len) {
			current = 0;
			link = playlist.find('a')[0];
		} else {
			link = playlist.find('a')[current];
		}
		RunPlaylist($(link), audio[0]);
	});
}

function RunPlaylist(link, player) {
	player.src = link.attr('href');
	link.parent().addClass('audio-active').siblings().removeClass('audio-active');
	player.load();
	player.play();
}
