const $ = (s) => document.querySelector(s);
const recordsEl = $("#records"), emptyEl = $("#emptyState"), searchEl = $("#search"), categoryEl = $("#category"), phenomenonEl = $("#phenomenon");
const categories = [...new Set(samples.map(x=>x.category))];
const phenomena = [...new Set(samples.flatMap(x=>x.phenomena))];
categories.forEach(x=>categoryEl.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`));
phenomena.forEach(x=>phenomenonEl.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`));
$("#totalCount").textContent = samples.length;
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));}
function mimeFor(file){const ext=file.split('.').pop().toLowerCase();return ({mp3:'audio/mpeg',m4a:'audio/mp4',wav:'audio/wav'})[ext]||'audio/*';}
function matches(x){const q=searchEl.value.trim().toLowerCase(); const cat=categoryEl.value; const ph=phenomenonEl.value; const hay=[x.id,x.text,x.category,...x.phenomena].join(" ").toLowerCase(); return (!q||hay.includes(q))&&(cat==="all"||x.category===cat)&&(ph==="all"||x.phenomena.includes(ph));}
function updateReady(){$("#readyCount").textContent=[...document.querySelectorAll(".status.ready")].length;}
function render(){
  const list=samples.filter(matches); recordsEl.innerHTML=""; emptyEl.hidden=list.length!==0; $("#visibleCount").textContent=list.length;
  list.forEach(x=>{
    const el=document.createElement("article"); el.className="record"; const src=escapeHtml(x.file);
    el.innerHTML=`<div class="record-id">${escapeHtml(x.id)}</div><div class="record-main"><h2>${escapeHtml(x.category)}</h2><p class="record-text">${escapeHtml(x.text)}</p><div class="tags"><span class="tag category">${escapeHtml(x.category)}</span><span class="tag format">${escapeHtml(x.format||'音频')}</span>${x.phenomena.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}</div></div><div class="record-player"><audio controls playsinline preload="metadata"><source src="${src}" type="${mimeFor(x.file)}"><a href="${src}" download>下载音频</a></audio><div class="audio-actions"><button class="play-button" type="button">播放</button><a class="download-link" href="${src}" download>下载原文件</a></div><div class="status pending">正在检查音频…</div></div>`;
    const audio=el.querySelector("audio"), status=el.querySelector(".status"), play=el.querySelector(".play-button");
    audio.addEventListener("loadedmetadata",()=>{status.textContent="音频已就绪 · 可播放";status.className="status ready";updateReady()});
    audio.addEventListener("canplay",()=>{status.textContent="音频已就绪 · 点击播放";status.className="status ready";updateReady()});
    audio.addEventListener("error",()=>{status.textContent="暂时无法播放，可点击下载或更换浏览器";status.className="status pending"});
    audio.addEventListener("play",()=>{play.textContent="暂停"}); audio.addEventListener("pause",()=>{play.textContent="播放"}); audio.addEventListener("ended",()=>{play.textContent="播放"});
    play.addEventListener("click",()=>{if(audio.paused){const p=audio.play();if(p&&p.catch)p.catch(()=>{status.textContent="浏览器阻止播放，请使用上方播放器按钮"})}else audio.pause()}); recordsEl.appendChild(el);
  }); updateReady();
}
[searchEl,categoryEl,phenomenonEl].forEach(el=>el.addEventListener("input",render));
$("#clearFilters").addEventListener("click",()=>{searchEl.value="";categoryEl.value="all";phenomenonEl.value="all";render()}); render();
