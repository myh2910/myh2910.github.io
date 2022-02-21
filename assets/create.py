def create_new_page(filename, title, content=None, mathjax=False, playlist=False):
	"""
	Generate a new HTML Webpage.

	Parameters
	----------
	filename : str
		The HTML Document.
	title : str
		Webpage title.
	content : str or None, optional
		Webpage content.
	mathjax : bool, optional
		True if mathjax is necessary and False otherwise.
	playlist : bool, optional
		True if playlist.js is necessary and False otherwise.
	"""
	if not content:
		content = f"<h1>{title}</h1>\n\t\t\t<++>"

	with open(filename, "w", encoding="utf8") as file:
		file.write(
f"""<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>{title}</title>
	<link rel="icon" href="assets/favicon.png">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="container">
		{content}
	</div>
	<script src="js/jquery.min.js"></script>"""
		)

		if mathjax:
			file.write(
"""
	<script id="MathJax-script" async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
	</script>
	<script src="js/mathjax.js"></script>"""
			)

		if playlist:
			file.write(
"""
	<script src="js/playlist.js"></script>"""
			)

		file.write(
"""
	<script src="js/script.js"></script>
</body>
</html>"""
		)
