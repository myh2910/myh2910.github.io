import re


def new_page(
	filename,
	title,
	content=None,
	home=None,
	mathjax=False,
	playlist=False,
	prettify=False
):
	if not content:
		content = f"<h1>{title}</h1>\n\t\t<++>"
	if not home:
		home = ""

	with open(filename, "w", encoding="utf8") as file:
		file.write(
f"""<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>{title}</title>
	<link rel="icon" href="{home}assets/favicon.png">"""
		)

		if prettify:
			file.write(
f"""
	<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/\
run_prettify.js"></script>
	<link rel="stylesheet" href="{home}css/prettify.css">"""
			)

		file.write(
f"""
	<link rel="stylesheet" href="{home}css/style.css">
</head>
<body>
	<div class="container">
		{content}
	</div>
	<script src="{home}js/jquery.min.js"></script>"""
		)

		if mathjax:
			file.write(
f"""
	<script id="MathJax-script" async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
	</script>
	<script src="{home}js/mathjax.js"></script>"""
			)

		if playlist:
			file.write(
f"""
	<script src="{home}js/playlist.js"></script>"""
			)

		file.write(
f"""
	<script src="{home}js/script.js"></script>
</body>
</html>"""
		)

def new_post(date, title, id, content=None, **kwargs):
	if not content:
		content = f"""<h1 id="{id}">{title}</h1>
		<div class="posted-date">{date}</div>
		<hr>
		<++>"""

	with open("posts.log", "a", encoding="utf8") as file:
		file.write(f"{date} {id}")

	new_page(f"blog/{date}-{id}.html", title, content, "../", **kwargs)

def update_blog(filename="blog.html", title="Blog"):
	content = f'<h1 id="blog">My Personal Blog</h1>\n\t\t<ul>'
	with open("posts.log", "r", encoding="utf8") as file:
		posts = [line.split() for line in file.readlines()[::-1]]

	for date, id in posts:
		post = f"blog/{date}-{id}.html"
		with open(post, "r", encoding="utf8") as file:
			search = re.search(f'<h1 id="{id}">(.*?)</h1>', file.read())
		content += f"""\n\t\t\t<li><a href="{post}">{search.group(1)}</a>\
<div class="small-box">{date}</div></li>"""
	content += "\n\t\t</ul>"

	new_page(filename, title, content)
