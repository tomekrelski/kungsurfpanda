// components.js

class KungFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer>
        <div class="social">
          <a href="https://wa.me/+34610017397" target="_blank">WhatsApp</a>
          <a href="mailto:tomekrelsi@gmail.com">E-mail</a>
          <a href="https://www.instagram.com/kung_surf_panda/" target="_blank">Instagram</a>
        </div>
        <p>&copy; 2025 Kung Surf Panda</p>
      </footer>
    `;
    }
}

customElements.define('ks-footer', KungFooter);


// used in index.html
class KungGallery extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section gallery">
        <a href="kite.html">
            <img src="../assets/images/kite.jpg" alt="Kitesurfing" />
            <p>Kite</p>
        </a>
        <a href="surf.html">
            <img src="../assets/images/Surf.jpg" alt="Surfing" />
            <p>Surf</p>
        </a>
        <a href="prana.html">
            <img src="../assets/images/prana.jpg" alt="Prana" />
            <p>Prana</p>
        </a>
      </div>
    `;
  }
}

customElements.define('ks-gallery', KungGallery);

class KungNav extends HTMLElement {
  connectedCallback() {
    const page = this.getAttribute('page') || 'index';
    const lang = this.getAttribute('lang') || 'en';

    const basePaths = {
      en: { pl: `../pl/${page}.html`, es: `../es/${page}.html` },
      pl: { en: `../en/${page}.html`, es: `../es/${page}.html` },
      es: { en: `../en/${page}.html`, pl: `../pl/${page}.html` }
    };

    const homeLabels = {
      en: 'Home',
      pl: 'Strona główna',
      es: 'Inicio'
    };

    const navPages = [
      { name: homeLabels[lang] || 'Home', page: 'index' },
      { name: 'Kite', page: 'kite' },
      { name: 'Surf', page: 'surf' },
      { name: 'Prana', page: 'prana' },
      { name: 'Blog', page: 'blog' }
    ];

    const navLinks = navPages
      .filter(p => p.page !== page)
      .map(p => `<li><a href="${p.page}.html">${p.name}</a></li>`)
      .join('');

    let langLinks = '';
    if (basePaths[lang]) {
      for (let [otherLang, href] of Object.entries(basePaths[lang])) {
        const label = otherLang === 'pl' ? 'Polski' : otherLang === 'es' ? 'Español' : 'English';
        langLinks += `<li><a href="${href}" class="lang-link">${label}</a></li>`;
      }
    }

    this.innerHTML = `
      <nav>
        <a href="index.html" class="logo">Kung Surf Panda</a>
        <div class="hamburger" onclick="toggleMenu()">&#9776;</div>
        <ul class="nav-links">
          ${navLinks}
          ${langLinks}
        </ul>
      </nav>
    `;
  }
}

customElements.define('ks-nav', KungNav);





class KungNavPost extends HTMLElement {
  connectedCallback() {
    const lang = this.getAttribute('lang') || 'en';
    const post = this.getAttribute('post') || 'post1';

    // Dynamic language links
    const langPaths = {
      en: {
        pl: `../../pl/blog/${post}.html`,
        es: `../../es/blog/${post}.html`
      },
      pl: {
        en: `../../en/blog/${post}.html`,
        es: `../../es/blog/${post}.html`
      },
      es: {
        en: `../../en/blog/${post}.html`,
        pl: `../../pl/blog/${post}.html`
      }
    };

    let langLinks = '';
    if (langPaths[lang]) {
      for (const [otherLang, href] of Object.entries(langPaths[lang])) {
        const label = otherLang === 'pl' ? 'Polski' : otherLang === 'es' ? 'Español' : 'English';
        langLinks += `<li><a href="${href}" class="lang-link">${label}</a></li>`;
      }
    }

    this.innerHTML = `
      <nav>
        <a href="../index.html" class="logo">Kung Surf Panda</a>
        <div class="hamburger" onclick="toggleMenu()">&#9776;</div>
        <ul class="nav-links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../kite.html">Kite</a></li>
          <li><a href="../surf.html">Surf</a></li>
          <li><a href="../prana.html">Prana</a></li>
          <li><a href="../blog.html">Blog</a></li>
          ${langLinks}
        </ul>
      </nav>
    `;
  }
}

customElements.define('ks-nav-post', KungNavPost);


class KungShare extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute('url') || window.location.href;

    this.innerHTML = `
      <p class="share-cta">💬 Enjoyed this post? Share it with your friends!</p>
      <img src="../../assets/images/share.png" alt="Share" id="shareBtn" style="cursor:pointer; width:100px;" />

      <div id="shareModal" class="modal-share">
        <div class="modal-share-content">
          <span class="modal-share-close">&times;</span>
          <div class="social-share">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank">Facebook</a>
            <a href="https://wa.me/?text=${encodeURIComponent(url)}" target="_blank">WhatsApp</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    `;

    // Modal functionality
    const modal = this.querySelector("#shareModal");
    const btn = this.querySelector("#shareBtn");
    const closeBtn = this.querySelector(".modal-share-close");

    btn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
}

customElements.define('ks-share', KungShare);