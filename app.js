const $ = (selector) => document.querySelector(selector);
const recordsEl = $('#records'), searchEl = $('#search'), categoryEl = $('#category'), phenomenonEl = $('#phenomenon'), availabilityEl = $('#availability'), pageSizeEl = $('#pageSize');
let currentPage = 1;
const recordedCount = samples.filter(x => x.kind === 'recorded' && x.file).length;
$('#totalCount').textContent = samples.length;
$('#audioCount').textContent = recordedCount;
$('#exampleCount').textContent = samples.length - recordedCount;
$('#heroCount').textContent = `${samples.length} 条目录 · ${recordedCount} 条真实音频`;
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
for (const category of new Set(samples.map(x => x.category))) categoryEl.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`);
for (const phenomenon of new Set(samples.flatMap(x => x.phenomena))) phenomenonEl.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(phenomenon)}">${escapeHtml(phenomenon)}</option>`);
function matches(sample) {
  const query = searchEl.value.trim().toLowerCase();
  const idQuery = /^u\d+$/i.test(query);
  const text = [sample.id, sample.originalId ? `原${sample.originalId}` : '', sample.text, sample.category, ...sample.phenomena].join(' ').toLowerCase();
  return (!query || (idQuery ? sample.id.toLowerCase() === query : text.includes(query)))
    && (categoryEl.value === 'all' || sample.category === categoryEl.value)
    && (phenomenonEl.value === 'all' || sample.phenomena.includes(phenomenonEl.value))
    && (availabilityEl.value === 'all' || sample.kind === availabilityEl.value);
}
function attachAudio(article, sample) {
  const audio = article.querySelector('audio'), play = article.querySelector('.play-button'), status = article.querySelector('.status');
  function ensureLoaded() {
    if (audio.dataset.loaded) return;
    audio.src = sample.file; audio.controls = true; audio.dataset.loaded = '1'; audio.load();
  }
  audio.addEventListener('loadedmetadata', () => { status.textContent = '音频已就绪'; status.className = 'status ready'; });
  audio.addEventListener('error', () => { status.textContent = '暂时无法播放，请重试或下载原文件'; status.className = 'status pending'; });
  audio.addEventListener('play', () => {
    document.querySelectorAll('audio').forEach(other => { if (other !== audio) other.pause(); });
    play.textContent = '暂停';
  });
  audio.addEventListener('pause', () => { play.textContent = '播放'; });
  audio.addEventListener('ended', () => { play.textContent = '播放'; });
  play.addEventListener('click', () => {
    if (!audio.paused) { audio.pause(); return; }
    ensureLoaded(); status.textContent = '正在加载音频…';
    audio.play().catch(() => { if (!audio.error) status.textContent = '请点击播放器重试，或下载原文件'; });
  });
}
function render() {
  document.querySelectorAll('audio').forEach(audio => audio.pause());
  const filtered = samples.filter(matches), size = Number(pageSizeEl.value);
  const pageCount = Math.max(1, Math.ceil(filtered.length / size));
  currentPage = Math.min(currentPage, pageCount);
  const start = (currentPage - 1) * size, visible = filtered.slice(start, start + size);
  recordsEl.replaceChildren(); $('#emptyState').hidden = filtered.length !== 0;
  $('#resultSummary').textContent = filtered.length ? `共 ${filtered.length} 条结果 · 显示第 ${start + 1}–${start + visible.length} 条` : '共 0 条结果';
  $('#pageInfo').textContent = `第 ${currentPage} / ${pageCount} 页`;
  $('#prevPage').disabled = currentPage === 1; $('#nextPage').disabled = currentPage === pageCount;
  $('#pageJump').max = pageCount; $('#pageJump').value = currentPage;
  for (const sample of visible) {
    const article = document.createElement('article'); article.className = 'record'; article.dataset.id = sample.id;
    const hasAudio = sample.kind === 'recorded' && Boolean(sample.file);
    const badge = hasAudio ? '<span class="tag recorded">真实音频</span>' : '<span class="tag example">文本示例</span>';
    const player = hasAudio
      ? `<audio playsinline preload="none" aria-label="${sample.id} 音频"></audio><div class="audio-actions"><button class="play-button" type="button" aria-label="播放 ${sample.id}">播放</button><a class="download-link" href="${escapeHtml(sample.file)}" download>下载原文件</a></div><div class="status">点击播放后加载</div>`
      : '<div class="no-audio"><strong>暂无音频</strong><span>生成的文本示例</span></div>';
    article.innerHTML = `<div class="record-id">${sample.id}${hasAudio ? `<span class="original-id">原编号 ${sample.originalId}</span>` : ''}</div><div class="record-main"><h2>${escapeHtml(sample.category)}</h2><p class="record-text">${escapeHtml(sample.text)}</p><div class="tags">${badge}${hasAudio ? `<span class="tag format">${escapeHtml(sample.format)}</span>` : ''}${sample.phenomena.map(item => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div></div><div class="record-player">${player}</div>`;
    recordsEl.appendChild(article); if (hasAudio) attachAudio(article, sample);
  }
}
function resetPage() { currentPage = 1; render(); }
[searchEl, categoryEl, phenomenonEl, availabilityEl, pageSizeEl].forEach(element => element.addEventListener('input', resetPage));
$('#clearFilters').addEventListener('click', () => { searchEl.value = ''; categoryEl.value = 'all'; phenomenonEl.value = 'all'; availabilityEl.value = 'all'; resetPage(); });
function navigate(page) { currentPage = page; render(); $('#resultsTop').scrollIntoView({block:'start'}); }
$('#prevPage').addEventListener('click', () => navigate(Math.max(1, currentPage - 1)));
$('#nextPage').addEventListener('click', () => navigate(currentPage + 1));
$('#jumpForm').addEventListener('submit', event => { event.preventDefault(); const page = Number($('#pageJump').value); if (Number.isInteger(page) && page >= 1) navigate(page); });
render();
