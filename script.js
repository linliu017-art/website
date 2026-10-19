const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
const toast = document.querySelector('.toast');
let toastTimer;

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '收起导航' : '展开导航');
  menuButton.textContent = open ? '收起 −' : '菜单 +';
  navigation.classList.toggle('open', open);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});

window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3600);
}

document.querySelectorAll('.copy-account').forEach(button => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('Alinix');
      showToast('已复制 Alinix，可在微信搜索公众号');
    } catch {
      showToast('请在微信搜索公众号：Alinix');
    }
  });
});
