// Mesa auth pages: show/hide password, live password rules, demo-only submit.
(() => {
  document.querySelectorAll('[data-toggle]').forEach(btn => {
    const input = document.getElementById(btn.dataset.toggle);
    btn.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.setAttribute('aria-pressed', String(show));
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });

  const rules = document.getElementById('rules');
  const pw = document.getElementById('password');
  if (rules && pw) {
    const checks = {
      len: v => v.length >= 8,
      num: v => /\d/.test(v),
      sym: v => /[^A-Za-z0-9]/.test(v)
    };
    const update = () => rules.querySelectorAll('[data-rule]').forEach(li => li.classList.toggle('ok', checks[li.dataset.rule](pw.value)));
    pw.addEventListener('input', update);
    update();
  }

  const form = document.getElementById('auth-form');
  const note = document.getElementById('demo-note');
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.hidden = false;
  });
  const forgot = document.getElementById('forgot');
  if (forgot) forgot.addEventListener('click', e => { e.preventDefault(); note.hidden = false; });
})();
