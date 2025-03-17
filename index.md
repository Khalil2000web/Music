---
layout: defualt
title: Khalil
---
{% if page.url == "/" %}
<style>header a[href="/"] { display: none; } </style>
{% endif %}
<style>body {padding-top:180px;padding-bottom:70px;overflow-x:hidden;}.song-list {max-width:95%;margin:0 auto;padding0;} .song {cursor: pointer;padding:10px;display:flex;align-items:top;justify-content:center;flex-direction:column;padding-bottom:20px;}.tit {display:flex;margin:0 auto;align-items:top;justify-content:center;}.song-number {text-align:right;}.song-title {word-wrap:break-word;text-align:center;font-size:1.1rem;}.platforms {display: none;gap:20px;justify-content:space-around;align-items:center;flex-direction:row;margin:0 auto;padding:0;padding-top:15px;padding-bottom:20px;flex-wrap:wrap;}.platforms a {cursor: pointer;color:transparent;}.platforms img {max-width: 30px;height:30px;margin:0;padding:0;pointer-events:none;}.song-title.text {font-size:1.4rem;}.dis {color:var(--text-color);font-family:var(--font-main);font-weight:300;text-align:center;text-transform:uppercase;font-size:0.7rem;margin:0;padding:0 20px;padding-top:60px;}#bold {font-family:var(--font-main-bold);font-weight:300;}</style>

<div class="toggle-container">
<button id="cleanBtn" class="active" onclick="setFilter('clean')">Clean</button>
<span>/</span>
<button id="explicitBtn" onclick="setFilter('explicit')">Explicit</button>
</div>
<div class="song-list">

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">1. CUFF IT</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/cuff-it/1636789969?i=1636790292" target="_blank" class="song-link" data-explicit="https://music.apple.com/il/album/cuff-it/1630005298?i=1630005850"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/3IHaiorYWOcr8Kzs85PWF7?si=54w2Me0HSWilh8cMn0YRUQ" target="_blank" class="song-link" data-explicit="https://open.spotify.com/track/1xzi1Jcr7mEi9K2RfzLOqS?si=5oEzPY20QoyiydLpPm1eaA"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B7VLTTDS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_lv7HcUB4zIeDkA89pUZ2T6Jzn" target="_blank" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KN2RR8?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_WFmp7wULvMzalbtoPE1arIDSb"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Amazon Music"></a>
<a href="https://tidal.com/browse/track/240186974" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/240189297"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="Tidal"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">2. BREAK MY SOUL</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/break-my-soul/1636789969?i=1636790511" target="_blank" class="song-link" data-explicit="https://music.apple.com/il/album/break-my-soul/1630005298?i=1630005854" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/5pyoxDZ1PX0KxBxiRVxA4U?si=76e7c495a50d442c" target="_blank" class="song-link" data-explicit="https://open.spotify.com/track/5pyoxDZ1PX0KxBxiRVxA4U?si=WXoVsVyoSwup8A6sFpL4Ag" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B7VN9FP5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_0yPeMQZDaAj7cR34KXUUm2u9R" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KLP9JK?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_688HVsld9haqti1V5rzcCL5nx" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/240186976" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/240189302" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">3. PLASTIC OF THE SOFA</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/plastic-off-the-sofa/1636789969?i=1636790526" class="song-link" data-explicit="https://music.apple.com/il/album/plastic-off-the-sofa/1630005298?i=1630005858" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/2VOfPkpiJctQYXVYfnp0X8?si=woqL4SM3Tl2ilEBW9XWa3Q" class="song-link" data-explicit="https://open.spotify.com/track/6ufcuVInt0ocHrUimDjGlb?si=Vjz9mSdVQTWqh1iIHi8i3Q" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B7W7MQTW?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_expLvDKqFhi1GRh11eJ7HOocW" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KMFK5S?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NKobP2CY18VJdGS8y45WyJDtm" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/240186978" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/240189320" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">4. AMERICA HAS A PROBLEM</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/america-has-a-problem/1636789969?i=1636790823" class="song-link" data-explicit="https://music.apple.com/il/album/america-has-a-problem/1630005298?i=1630005872" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/2vpZvAaPRdcq2XX4Y07Xsk?si=-DlTHr2bRbOtoh9flCle0w" class="song-link" data-explicit="https://open.spotify.com/track/2XMAWynSTIst5KmLSv0Npf?si=xKtQOtcXQ_eJZWHtVUgPnA" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B7VHKNV5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4gVADJ0v6Hfd9T1D637C8FnWM" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KMR8QY?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_FvQJSx6chpzx2SYTJreulRclV" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/240186985" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/240189326" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">5. PURE/HONEY</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/pure-honey/1636789969?i=1636790826" class="song-link" data-explicit="https://music.apple.com/il/album/pure-honey/1630005298?i=1630006146" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/45bteDyQ303LFxmDiLE3m8?si=8M-nn4DZTpmjlt0PXPhHgw" class="song-link" data-explicit="https://open.spotify.com/track/4DByEumlGTZKSzuVEZ35eo?si=LnfM55MwRKOJJ_shvxtrNQ" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B0B7VZQ7M5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4a2jk4KL08wWsx8O8vV2GYaRl" class="song-link" data-explicit="https://music.amazon.com/tracks/B0B4KPHNSD?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_p60OU2QwOzJPd5GolUrGPBlIr" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/240186986" target="_blank" class="song-link" data-explicit="https://tidal.com/browse/track/240189327" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>



<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">6. TEXAS HOLD 'EM</span></div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>
<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">7. JOLENE</span></div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">8. DAUGHTER</span></div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">9. ALLIIGATOR TEARS</span>
</div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">10. II HANDS II HEAVEN</span>
</div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">11. TYRANT</span>
</div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">12. SWEET ★ HONEY ★ BUCKIIN'</span>
</div>
<div class="platforms">
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="http://beyonce.lnk.to/COWBOYCARTERCLEAN" class="song-link" data-explicit="https://beyonce.lnk.to/COWBOYCARTER" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>


<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">13. LIFT EV’RY VOICE AND SING <span style="font-size:0.7rem;">(HOMECOMING LIVE)</span></span>
</div>
<div class="platforms">
<a href="https://music.apple.com/il/album/lift-evry-voice-and-sing-homecoming-live/1459930448?i=1459930463" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/0QRxJvOohS8yiGC1n98uFM?si=b17c60ac15594fae" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B07QRTXYCB?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_HHUQb4OfQTlljc1bfiePNY5sl" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/107780090" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">14. SORRY <span style="font-size:0.7rem;">(HOMECOMING LIVE)</span></span>
</div>
<div class="platforms">
<a href="https://music.apple.com/il/album/sorry-homecoming-live/1459930448?i=1459930600" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/1GWk2MHsycvbyOFaWFiOMk?si=6d60aa0975a24124" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B07QQVQNV1?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_QhQSPYBnZ296aRcOqdoBPpycy" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/107780093" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">15. MI GENTE <span style="font-size:0.7rem;">(HOMECOMING LIVE)</span></span>
</div>
<div class="platforms">
<a href="https://music.apple.com/il/album/mi-gente-homecoming-live/1459930448?i=1459930809" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/2iGIBnofyVatf7cjtyIGlI?si=8320aa0f2eab4988" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B07QQVNKQZ?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_l4wRNdzaqm4l4RoXiuDHbUhIa" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/107780108" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">16. BABY BOY <span style="font-size:0.7rem;">(HOMECOMING LIVE)</span></span>
</div>
<div class="platforms">
<a href="https://music.apple.com/il/album/baby-boy-homecoming-live/1459930448?i=1459930901" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/06iMNM7Q9kX93yBKXb7K8H?si=45f15d0f179f462c" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B07QLNYKJ4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oKjT20Uut5qzoGkEg6zDgSIH8" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/107780109" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit">
<span class="song-title">17. BE ALIVE</span>
</div>
<div class="platforms">
<a href="https://music.apple.com/il/album/be-alive-original-song-from-the-motion-picture-king-richard/1594468367?i=1594468375" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/1RI4YQVFh7onQD07QuL8ND?si=870a44da672e4710" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B09LGPQGJK?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_OgjDx3XxecqumZASJOXlGMwwa" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/204510808" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">18. BITCH BETTER HAVE MY MONEY</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/bitch-better-have-my-money/985890722?i=985890936" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/0NTMtAO2BV4tnGvw9EgBVq?si=hhtIFd3kSg-8f7mbTUiWKA" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://tidal.com/browse/track/44128998" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">19. DIAMONDS</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/diamonds/1443232426?i=1443232440" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/6O20JhBJPePEkBdrB5sqRx?si=TMOfc0mPTYqIv16_CchsSw" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B009L5EOCU?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_pBCR6iJ3KmLrUySHJikoYW6Df" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/17369359" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">20. LISTEN</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/music-video/listen/585819824" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/album/3rK8SJ37rtNA2LzFpXq9NX?si=rt4keBOzSFScPL1-XqHfCw" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B001L4FWRA?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_bmqEGxBx1XWDajWuFTGNgZGi6" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/18005751" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">21. BROKEN-HEART</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/broken-hearted-girl/332706800?i=332707000" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/7zP67rufQgoODWFI45jntD?si=U3j2VNC_TTyOToS3SqCeLQ" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B001KR3M3Y?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ez9eyTvAZVtHp2uJdGXgh3quz" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/video/97376745" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>

<div class="song" onclick="togglePlatforms(this)">
<div class="tit"><span class="song-title">22. APESHIT</span></div>
<div class="platforms">
<a href="https://music.apple.com/il/album/apeshit/1400117883?i=1400118055" class="song-link" data-explicit="" target="_blank" aria-label="Apple Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/apple.svg" alt="Apple Music"></a>
<a href="https://open.spotify.com/track/62GXGpd73vslqIBHq8XqOx?si=gL02i64aQqawYJLHOmztEw" class="song-link" data-explicit="" target="_blank" aria-label="Spotify Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/spotify.svg" alt="Spotify"></a>
<a href="https://music.amazon.com/tracks/B07DT95T76?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_neTIZNb9RONqoZpSlaUghIo5a" class="song-link" data-explicit="" target="_blank" aria-label="Amazon Music Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/amazon.svg" alt="Apple Music"></a>
<a href="https://tidal.com/browse/track/90521282" class="song-link" data-explicit="" target="_blank" aria-label="Tidal Link" rel="noreferrer"><img src="https://raw.githubusercontent.com/Khalil2000web/Music/refs/heads/main/static/media/tidal.svg" alt="YouTube"></a>
</div>
</div>
</div>
<p class="dis"><span id="bold">Disclaimer:</span> I do not own any rights to the songs shared here. All rights belong to the original artists and copyright holders. This page is for sharing my favorite music with links to official listening platforms.</p>

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