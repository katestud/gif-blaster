function isTeamDiscussion() {
  return document.querySelectorAll("div.team-discussions-container").length >= 1;
}

function gifBlasterButtonAlreadyLoaded() {
  return document.querySelectorAll("button#gif-blaster").length >= 1;
}

function createGifBlasterButton() {
  const blasterButton = document.createElement("button");
  blasterButton.id = "gif-blaster";
  blasterButton.className = "UnderlineNav-item no-wrap"
  blasterButton.innerHTML = "Blast Gifs";

  return blasterButton;
}

function blastGifs() {
  // H/T to @lseppala for this :)
  [].forEach.call(document.images, function(img) { if (/gif$/i.test(img.dataset.canonicalSrc) || /gif$/i.test(img.src) ) img.remove() } )
}

if (isTeamDiscussion() && !gifBlasterButtonAlreadyLoaded()) {
  var discussionNav = document.querySelectorAll("div#js-pjax-container nav.UnderlineNav-body")[0];

  var blasterButton = createGifBlasterButton();
  discussionNav.insertAdjacentElement("afterbegin", blasterButton);

  blasterButton.addEventListener('click', function(event){
    blastGifs();
    event.target.remove();
});
}
