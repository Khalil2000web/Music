let explicitMode = false;

function setFilter(mode) {
  explicitMode = (mode === 'explicit');

  document.getElementById("cleanBtn").classList.toggle("active", !explicitMode);
  document.getElementById("explicitBtn").classList.toggle("active", explicitMode);

  document.querySelectorAll(".song").forEach(song => {
      const cleanLinks = song.querySelector(".platforms-clean");
      const explicitLinks = song.querySelector(".platforms-explicit");

      if (cleanLinks.style.display === "flex" || explicitLinks.style.display === "flex") {
          cleanLinks.style.display = explicitMode ? "none" : "flex";
          explicitLinks.style.display = explicitMode ? "flex" : "none";
      }
  });
}
function togglePlatforms(songElement) {
  document.querySelectorAll(".platforms").forEach(p => p.style.display = "none");
  document.querySelectorAll(".song-title").forEach(title => title.classList.remove("text"));

  songElement.querySelector(".song-title").classList.add("text");
  const cleanLinks = songElement.querySelector(".platforms-clean");
  const explicitLinks = songElement.querySelector(".platforms-explicit");

  if (explicitMode) {
      explicitLinks.style.display = "flex";
  } else {
      cleanLinks.style.display = "flex";
  }
}
