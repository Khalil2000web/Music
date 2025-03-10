---
layout: defualt
title: Khalil
---

{% if page.url == "/" %}

<style> header a[href="/"], header a[href="/"] { display: none; } </style>
{% endif %}

<style>body {padding-top:90px;padding-bottom:70px;overflow-x:hidden;}.song-list {max-width:95%;margin:0 auto;padding0;} .song {cursor: pointer;padding:10px;display:flex;align-items:top;justify-content:center;flex-direction:column;padding-bottom:20px;}.tit {display:flex;margin:0 auto;align-items:top;justify-content:center;}.song-number {text-align:right;}.song-title {word-wrap:break-word;text-align:center;font-size:1.1rem;}.platforms {display: none;gap:20px;justify-content:space-around;align-items:center;flex-direction:row;margin:0 auto;padding:0;padding-top:15px;padding-bottom:20px;flex-wrap:wrap;}.platforms a {cursor: pointer;color:transparent;}.platforms img {max-width: 30px;height:30px;margin:0;padding:0;pointer-events:none;}.song-title.text {font-size:1.4rem;}.dis {color:var(--text-color);font-family:var(--font-main);font-weight:300;text-align:center;text-transform:uppercase;font-size:0.7rem;margin:0;padding:0 20px;padding-top:60px;}#bold {font-family:var(--font-main-bold);font-weight:300;}</style>



<div class="toggle-container">
    <button id="toggleBtn" onclick="toggleExplicit()">Show Explicit</button>
</div>

<div class="song-list">
    <div class="song" onclick="togglePlatforms(this)" data-clean="https://music.apple.com/il/album/cuff-it/1630005298?i=1630005850" 
         data-explicit="https://music.apple.com/il/album/cuff-it-explicit/1630005298?i=1630005850">
        <div class="tit"><span class="song-title">1. CUFF IT</span></div>
        <div class="platforms">
            <a href="" target="_blank" class="song-link" data-platform="apple"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
            <a href="" target="_blank" class="song-link" data-platform="spotify"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
            <a href="" target="_blank" class="song-link" data-platform="amazon"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Amazon Music"></a>
            <a href="" target="_blank" class="song-link" data-platform="tidal"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="Tidal"></a>
        </div>
    </div>

    <div class="song" onclick="togglePlatforms(this)" data-clean="https://music.apple.com/il/album/break-my-soul/1630005298?i=1630005854" 
         data-explicit="https://music.apple.com/il/album/break-my-soul-explicit/1630005298?i=1630005854">
        <div class="tit"><span class="song-title">2. BREAK MY SOUL</span></div>
        <div class="platforms">
            <a href="" target="_blank" class="song-link" data-platform="apple"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
            <a href="" target="_blank" class="song-link" data-platform="spotify"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
            <a href="" target="_blank" class="song-link" data-platform="amazon"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Amazon Music"></a>
            <a href="" target="_blank" class="song-link" data-platform="tidal"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="Tidal"></a>
        </div>
    </div>
</div>

<script>
    let explicitMode = false;

    function togglePlatforms(songElement) {
        const platforms = songElement.querySelector(".platforms");
        const title = songElement.querySelector(".song-title");

        document.querySelectorAll(".platforms").forEach(p => p.style.display = "none");
        document.querySelectorAll(".song-title").forEach(t => t.classList.remove("text"));

        platforms.style.display = "flex";
        title.classList.add("text");

        updateSongLinks();
    }

    function toggleExplicit() {
        explicitMode = !explicitMode;
        document.getElementById("toggleBtn").innerText = explicitMode ? "Show Clean" : "Show Explicit";
        updateSongLinks();
    }

    function updateSongLinks() {
        document.querySelectorAll(".song").forEach(song => {
            const link = explicitMode ? song.getAttribute("data-explicit") : song.getAttribute("data-clean");
            song.querySelectorAll(".song-link").forEach(a => a.href = link);
        });
    }

    document.addEventListener("DOMContentLoaded", updateSongLinks);
</script>




<p class="dis">
<span id="bold">Disclaimer:</span> I do not own any rights to the songs shared here. All rights belong to the original artists and copyright holders. This page is for sharing my favorite music with links to official listening platforms.
</p>