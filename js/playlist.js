InitPlaylist();

function InitPlaylist() {
	current = 0;
	audio = $('.audio-playlist');
	playlist = $('.ol-playlist');
	tracks = playlist.find('li a');
	len = tracks.length;
	audio[0].volume = 0.7;
	audio[0].play();
	playlist.find('a').click(function(e) {
		e.preventDefault();
		link = $(this);
		current = link.parent().index();
		RunPlaylist(link, audio[0]);
	});
	audio[0].addEventListener('ended', function(e){
		current++;
		if (current == len) {
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
	par = link.parent();
	par.addClass('audio-active').siblings().removeClass('audio-active');
	audio[0].load();
	audio[0].play();
}
