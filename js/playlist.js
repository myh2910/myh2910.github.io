$('audio.playlist').each(function() {
	let audio = this;
	let curr = 0;
	let playlist = $(this).next().children();
	const len = playlist.find('li a').length;

	audio.volume = 0.75;
	// audio.play();

	playlist.find('a').click(function(e) {
		e.preventDefault();
		curr = $(this).parent().index();
		PlayAudio($(this), audio);
	});

	audio.addEventListener('ended', () => {
		curr++;
		if (curr === len) {
			curr = 0;
		}
		PlayAudio($(playlist.find('a')[curr]), audio);
	});
});

function PlayAudio(music, audio) {
	audio.src = music.attr('href');
	music.parent().addClass('active-audio').siblings().removeClass('active-audio');
	audio.load();
	audio.play();
}