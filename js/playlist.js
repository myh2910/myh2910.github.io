$('audio.playlist').each(function() {
	let audio = this;
	let playlist = $(audio).next().children();

	const len = playlist.find('li a').length;
	const active = playlist.find('li.active-audio a');
	let curr = active.index();
	audio.src = active.attr('href');
	audio.volume = 0.75;

	audio.addEventListener('ended', () => {
		curr = (curr + 1) % len;
		PlayAudio($(playlist.find('a')[curr]), audio);
	});

	playlist.find('a').click(function(e) {
		e.preventDefault();
		curr = $(this).parent().index();
		PlayAudio($(this), audio);
	});
});

function PlayAudio(music, audio) {
	audio.src = music.attr('href');
	music.parent().addClass('active-audio').siblings().removeClass('active-audio');
	audio.load();
	audio.play();
}