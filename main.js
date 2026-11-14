(() => {
  'use strict';
  const cfg = window.FABE_CONFIG || {};
  const safeUrl = (value) => {
    try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : null; }
    catch { return null; }
  };
  const site = safeUrl(cfg.site);
  const ig = safeUrl(cfg.instagram);
  for (const id of ['link-loja', 'footer-site']) {
    const item = document.getElementById(id);
    if (item) { if (site) item.href = site; else { item.removeAttribute('href'); item.setAttribute('aria-disabled','true'); } }
  }
  const instagram = document.getElementById('footer-instagram');
  if (instagram) { if (ig) instagram.href = ig; else { instagram.removeAttribute('href'); instagram.setAttribute('aria-disabled','true'); } }
  const whats = String(cfg.whatsapp || '').replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(whats)) return; // Sem WhatsApp confirmado = sem link quebrado.
  const messages = {
    personalizar: 'Olá! Vim pela bio da FABÊ e gostaria de personalizar uma peça com pedrarias.',
    suporte: 'Olá! Vim pela bio da FABÊ e preciso de atendimento.',
    footer: 'Olá! Vim pela bio do Instagram da FABÊ.'
  };
  for (const a of document.querySelectorAll('[data-wa]')) {
    const kind = a.dataset.wa;
    a.href = `https://wa.me/${whats}?text=${encodeURIComponent(messages[kind] || messages.footer)}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.removeAttribute('aria-disabled');
    a.classList.remove('is-pending');
    a.title = 'Abrir WhatsApp da FABÊ';
    const status = a.querySelector('[data-wa-status]');
    if (status) status.textContent = kind === 'personalizar' ? 'Atendimento via WhatsApp' : 'Atendimento via WhatsApp';
    if (kind === 'footer') a.setAttribute('aria-label', 'WhatsApp oficial da FABÊ');
  }
})();
