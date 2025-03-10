---
layout: defualt
title: Khalil
---

{% if page.url == "/" %}

<style>header a[href="/"] { display: none; } </style>
{% endif %}

<style>body {padding-top:130px;padding-bottom:70px;overflow-x:hidden;}.song-list {max-width:95%;margin:0 auto;padding0;} .song {cursor: pointer;padding:10px;display:flex;align-items:top;justify-content:center;flex-direction:column;padding-bottom:20px;}.tit {display:flex;margin:0 auto;align-items:top;justify-content:center;}.song-number {text-align:right;}.song-title {word-wrap:break-word;text-align:center;font-size:1.1rem;}.platforms {display: none;gap:20px;justify-content:space-around;align-items:center;flex-direction:row;margin:0 auto;padding:0;padding-top:15px;padding-bottom:20px;flex-wrap:wrap;}.platforms a {cursor: pointer;color:transparent;}.platforms img {max-width: 30px;height:30px;margin:0;padding:0;pointer-events:none;}.song-title.text {font-size:1.4rem;}.dis {color:var(--text-color);font-family:var(--font-main);font-weight:300;text-align:center;text-transform:uppercase;font-size:0.7rem;margin:0;padding:0 20px;padding-top:60px;}#bold {font-family:var(--font-main-bold);font-weight:300;}</style>


<div class="toggle-container">
    <button id="cleanBtn" class="active" onclick="setFilter('clean')">Clean</button>
    <span>/</span>
    <button id="explicitBtn" onclick="setFilter('explicit')">Explicit</button>
</div>

<div class="song-list">
<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">1. CUFF IT</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/cuff-it/1630005298?i=1630005850" target="_blank" class="song-link" data-explicit="https://music.apple.com/il/album/cuff-it-explicit/1630005298?i=1630005850"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/1xzi1Jcr7mEi9K2RfzLOqS" target="_blank" class="song-link" data-explicit="https://open.spotify.com/track/explicit-version"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B4KN2RR8" target="_blank" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KN2RR8-explicit"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Amazon Music"></a>
<a href="https://tidal.com/browse/track/240189297" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/explicit-240189297"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="Tidal"></a>
</div>
</div>
</div>

<style>
    .toggle-container {
        position:fixed;
        top:70px;
        left:50%;
        transform:translateX(-50%);
        width:100%;
        display:flex;align-items:center;justify-content:center;
        text-align: center;
    }
    .toggle-container button {
        border: none;
        background: none;
        font-size: 19px;
        font-weight: normal;
        padding: 5px 15px;
        cursor: pointer;
        font-family:var(--font-main);
        color:white;
        text-underline-offset:5px;
        text-transform:uppercase;
    }
    
    .toggle-container span {
        color:white;
        margin:0;
        padding:0;
        font-size:19px;
    }
    .toggle-container button.active {
        text-decoration: underline;
    }
</style>

<script>
    let explicitMode = false;

    function setFilter(mode) {
        explicitMode = (mode === 'explicit');
        document.getElementById("cleanBtn").classList.toggle("active", !explicitMode);
        document.getElementById("explicitBtn").classList.toggle("active", explicitMode);
        updateSongLinks();
    }

    function togglePlatforms(songElement) {
        document.querySelectorAll(".platforms").forEach(p => p.style.display = "none");
        document.querySelectorAll(".song-title").forEach(t => t.classList.remove("text"));

        songElement.querySelector(".platforms").style.display = "flex";
        songElement.querySelector(".song-title").classList.add("text");
    }

    function updateSongLinks() {
        document.querySelectorAll(".song-link").forEach(link => {
            const cleanLink = link.getAttribute("href"); // Already set in the HTML
            const explicitLink = link.getAttribute("data-explicit");
            link.href = explicitMode ? explicitLink : cleanLink;
        });
    }
</script>



<p class="dis">
<span id="bold">Disclaimer:</span> I do not own any rights to the songs shared here. All rights belong to the original artists and copyright holders. This page is for sharing my favorite music with links to official listening platforms.
</p>