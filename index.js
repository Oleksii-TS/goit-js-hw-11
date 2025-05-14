import{a as p,S as m,i as n}from"./assets/vendor-DKtxmrwh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="50286619-c20e9afd7f4c04ec0a12478f1",y="https://pixabay.com/api/";function h(o){const i={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(y,{params:i}).then(r=>r.data).catch(r=>{console.error("Error fetching images:",r)})}const l=document.querySelector(".gallery");document.querySelector(".loader");let v=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const i=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:u})=>{const f=e.split(",").slice(0,5).join(", ");return`
      <li class="gallery-item">
        <a href="${a}" data-lightbox="gallery">
          <img class="gallery-image" src="${r}" alt="${f}" loading="lazy" />
        </a>
        <div class="info">
          <div class="image-info">
            <div class="info-item">
              <p class="info-title"><b>❤️ likes:</b></p>
              <p class="info-value">${t}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>👁️ views:</b></p>
              <p class="info-value">${s}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>💬 comments:</b></p>
              <p class="info-value">${d}</p>
            </div>
            <div class="info-item">
              <p class="info-title"><b>⬇️ downloads:</b></p>
              <p class="info-value">${u}</p>
            </div>
          </div>
        </div>
      </li>`}).join("");l.insertAdjacentHTML("beforeend",i),v.refresh()}function L(){document.getElementById("loader").hidden=!1}function q(){document.getElementById("loader").hidden=!0}function S(){l.innerHTML=""}const c=document.querySelector(".form"),w=c.querySelector("input[name='search-text']");c.addEventListener("submit",async o=>{o.preventDefault();const i=w.value.trim();if(!i){n.warning({message:"Please enter a search query.",position:"topRight"});return}S(),L();try{const r=await h(i);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(r.hits)}catch(r){n.error({message:`Error: ${r.message}`,position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
