const topnavHTML = `<ul class="topnav">
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
      <li><a href="/coding.html">Coding</a></li>
      <li><a href="/games.html">Games</a></li>
      <li><a href="/music.html">Music</a></li>
      <li><a href="/paper_craft.html">Paper Craft</a></li>
    </ul>
  </li>
</ul>`;
const footerHTML = `<div class="footer">
  <span>&copy; 2023 Yohan Min</span>
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
</div>`;

initPage();

function initPage() {
  // Insert navigation bar and footer
  const container = document.querySelector("div.container");
  container.insertAdjacentHTML("beforebegin", topnavHTML);
  container.insertAdjacentHTML("afterend", footerHTML);

  // Add bottom margin
  const footerHeight = document.querySelector("div.footer").offsetHeight;
  const marginLeft = window
    .getComputedStyle(container)
    .getPropertyValue("margin-left");
  container.style.marginBottom = `calc(${footerHeight}px + ${marginLeft} + 8px)`;

  // Highlight current page
  const href = document.querySelector("head").getAttribute("data-href");
  if (href) {
    document
      .querySelector(`ul.topnav li > a[href='${href}']`)
      .setAttribute("class", "active");
  }

  // Insert hash link
  container.querySelectorAll("h1, h2, h3").forEach((el) => {
    const id = el.getAttribute("id");
    if (id) {
      el.insertAdjacentHTML(
        "beforeend",
        `<a class="hash-link" href="#${id}">#</a>`
      );
    }
  });

  // Show page content
  container.style.display = "block";

  // Scroll to hash on load
  const hash = window.location.hash;
  if (hash) {
    let target = $(hash);
    $(window).on("load", () => {
      $("html").animate(
        {
          scrollTop: target.offset().top - target.find("a.hash-link").height(),
        },
        "fast"
      );
    });
  }

  // Scroll to hash on click
  $("a.hash-link").click(function () {
    $("html").animate(
      {
        scrollTop: $(this).parent().offset().top - $(this).height(),
      },
      "fast"
    );
  });

  // Adjust dropdown menu position
  const windowWidth = document.body.clientWidth;
  document.querySelectorAll("ul.dropdown-menu").forEach((el) => {
    const menuBound = el.getBoundingClientRect();
    if (menuBound.width + menuBound.x > windowWidth) {
      el.style.right = "0";
    }
    el.style.display = "none";
  });

  // Toggle dropdown menu on hover
  document.querySelectorAll("li.dropdown").forEach((el) => {
    const menu = el.querySelector("ul.dropdown-menu");
    el.onmouseover = () => {
      menu.style.display = "block";
    };
    el.onmouseout = () => {
      menu.style.display = "none";
    };
  });

  // Toggle hidden content on click
  document.querySelectorAll("a.hidden").forEach((el) => {
    el.onclick = () => {
      $(el).next().toggle("fast");
      return false;
    };
  });

  // Copy pre content on click
  document.querySelectorAll("pre").forEach((el) => {
    if (navigator.clipboard) {
      let wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      el.parentElement.insertBefore(wrapper, el);
      wrapper.appendChild(el);
      let button = document.createElement("button");
      button.innerText = "Copy";
      button.onclick = () => {
        navigator.clipboard.writeText(el.textContent);
      };
      el.parentElement.appendChild(button);
    }
  });

  // Animate icon style on hover
  const githubIcon = document.querySelector("div.icon-github");
  const githubPath = githubIcon.querySelector("svg path");
  githubIcon.onmouseover = () => {
    githubPath.setAttribute("fill", "#fff");
    githubPath.nextElementSibling.setAttribute("fill", "url(#gradient-github)");
  };
  githubIcon.onmouseout = () => {
    githubPath.setAttribute("fill", "var(--bgcolor-1)");
    githubPath.nextElementSibling.setAttribute("fill", "#fff");
  };
}
