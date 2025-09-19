// components.js

class KungFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer>
        <div class="social">
          <a href="https://wa.me/+34610017397" target="_blank">WhatsApp</a>
          <a href="mailto:tomekrelski@gmail.com">E-mail</a>
          <a href="https://www.instagram.com/kung_surf_panda/" target="_blank">Instagram</a>
        </div>
        <p>&copy; 2025 Kung Surf Panda</p>
        <p>Graphic made by <a href="https://www.instagram.com/prints.by.eni/" target="_blank" style="font-weight: bold; text-decoration: underline;">prints by eni</a></p>
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
          <img src="../assets/images/kite.webp" 
              alt="Kitesurfing lessons in Tarifa with Kung Surf Panda" 
              width="600" height="400" loading="lazy" />
          <p>Kite</p>
        </a>
        <a href="surf.html">
          <img src="../assets/images/surf.webp" 
              alt="Surfing in Tarifa with Kung Surf Panda – small groups and expert guidance" 
              width="600" height="400" loading="lazy" />
          <p>Surf</p>
        </a>
        <a href="prana.html">
          <img src="../assets/images/prana.webp" 
              alt="Morning prana and meditation with Kung Surf Panda on the beach in Tarifa" 
              width="600" height="400" loading="lazy" />
          <p>Prana</p>
        </a>
        <a href="tarifa.html">
          <img src="../assets/images/tarifa.webp" 
              alt="View of Tarifa Beach on a cloudy day with waves and distant mountains"
              width="600" height="400" loading="lazy" />
          <p>Tarifa</p>
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

    const collectionLabels = {
      en: 'Collection',
      pl: 'Kolekcja',
      es: 'Colección'
    };

    const navPages = [
      { name: homeLabels[lang] || 'Home', page: 'index' },
      { name: 'Kite', page: 'kite' },
      { name: 'Surf', page: 'surf' },
      { name: 'Prana', page: 'prana' },
      { name: 'Tarifa', page: 'tarifa' },
      { name: 'Blog', page: 'blog' },
      { name: collectionLabels[lang] || 'Collection', page: 'collection' }

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

    // Navbar HTML
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html" class="logo">
          <img src="../assets/images/logo/Panda4.svg" alt="Logo" class="logo-img" />
        </a>
        <div class="hamburger" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links">
          ${navLinks}
          ${langLinks}
          <li><a href="#" id="themeToggle" class="lang-link" role="button">🌑 Dark Mode</a></li>
        </ul>
      </nav>
    `;

    const toggleButton = this.querySelector('#themeToggle');
    const logoImg = this.querySelector('.logo-img');

    // Update UI: button text + logo swap
    const updateThemeUI = () => {
      const isDark = document.body.classList.contains('reverse-theme');
      toggleButton.textContent = isDark ? '🌕 Light Mode' : '🌑 Dark Mode';
      logoImg.src = isDark
        ? '../assets/images/logo/Panda2.svg' // dark mode logo
        : '../assets/images/logo/Panda4.svg'; // light mode logo
    };

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('reverse-theme');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('reverse-theme') ? 'dark' : 'light'
      );
      updateThemeUI();
    });

    // On page load: apply saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('reverse-theme');
    }
    updateThemeUI();
  }
}


customElements.define('ks-nav', KungNav);





class KungNavPost extends HTMLElement {
  connectedCallback() {
    const lang = this.getAttribute('lang') || 'en';
    const post = this.getAttribute('post') || 'post1';

    const langPaths = {
      en: { pl: `../../pl/blog/${post}.html`, es: `../../es/blog/${post}.html` },
      pl: { en: `../../en/blog/${post}.html`, es: `../../es/blog/${post}.html` },
      es: { en: `../../en/blog/${post}.html`, pl: `../../pl/blog/${post}.html` }
    };

    // Language links for navbar
    let langLinks = '';
    if (langPaths[lang]) {
      for (const [otherLang, href] of Object.entries(langPaths[lang])) {
        const label = otherLang === 'pl' ? 'Polski' : otherLang === 'es' ? 'Español' : 'English';
        langLinks += `<li><a href="${href}" class="lang-link">${label}</a></li>`;
      }
    }

    // Translate specific page labels
    const translations = {
      Home: { en: 'Home', pl: 'Strona główna', es: 'Inicio' },
      Collection: { en: 'Collection', pl: 'Kolekcja', es: 'Colección' }
    };

    const homeLabel = translations.Home[lang] || 'Home';
    const collectionLabel = translations.Collection[lang] || 'Collection';

    // Add navbar HTML
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html" class="logo">
          <img src="../../assets/images/logo/Panda4.svg" alt="Logo" class="logo-img" />
        </a>
        <div class="hamburger" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links">
          <li><a href="../index.html">${homeLabel}</a></li>
          <li><a href="../kite.html">Kite</a></li>
          <li><a href="../surf.html">Surf</a></li>
          <li><a href="../prana.html">Prana</a></li>
          <li><a href="../tarifa.html">Tarifa</a></li>
          <li><a href="../blog.html">Blog</a></li>
          <li><a href="../collection.html">${collectionLabel}</a></li>
          ${langLinks}
          <li><a href="#" id="themeToggle" class="lang-link" role="button">🌑 Dark Mode</a></li>
        </ul>
      </nav>
    `;

    // Theme toggle functionality
    const toggleButton = this.querySelector('#themeToggle');
    const logoImg = this.querySelector('.logo-img');

    const updateThemeUI = () => {
      const isDark = document.body.classList.contains('reverse-theme');
      toggleButton.textContent = isDark ? '🌕 Light Mode' : '🌑 Dark Mode';
      logoImg.src = isDark
        ? '../../assets/images/logo/Panda2.svg'
        : '../../assets/images/logo/Panda4.svg';
    };

    toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('reverse-theme');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('reverse-theme') ? 'dark' : 'light'
      );
      updateThemeUI();
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('reverse-theme');
    updateThemeUI();
  }
}

customElements.define('ks-nav-post', KungNavPost);


class KungShare extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute('url') || window.location.href;
    const message = this.getAttribute('message') || '💬 Enjoyed this post? Share it with your friends!';

    this.innerHTML = `
      <p class="share-cta">${message}</p>
      <img src="../../assets/images/share.png" alt="Share" id="shareBtn" style="cursor:pointer; width:100px;" />

      <div id="shareModal" class="modal-share">
        <div class="modal-share-content">
          <span class="modal-share-close">&times;</span>
          <div class="social-share">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}" target="_blank">Facebook</a>
            <a href="https://wa.me/?text=${encodeURIComponent(url)}" target="_blank">WhatsApp</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}" target="_blank">LinkedIn</a>
            <button id="copyLinkBtn" style="margin-top:10px; padding:6px 12px; border-radius:6px; border:none; cursor:pointer; background:#000; color:#fff;">
              Copy Link
            </button>
            <span id="copyFeedback" style="display:none; margin-left:8px; font-size:0.9rem; color:green;">✅ Copied!</span>
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

    // Copy Link functionality
    const copyBtn = this.querySelector("#copyLinkBtn");
    const feedback = this.querySelector("#copyFeedback");

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(url);
        feedback.style.display = "inline";
        setTimeout(() => {
          feedback.style.display = "none";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
        copyBtn.textContent = "❌ Error";
      }
    });
  }
}



customElements.define('ks-share', KungShare);


class CollectionShare extends HTMLElement {
  connectedCallback() {
    const shareLinks = JSON.parse(this.getAttribute('share-links') || '[]');
    const defaultMessage = this.getAttribute('message') || '💬 Check this product!';
    let currentUrl = shareLinks.length ? shareLinks[0].url : window.location.href;

    this.innerHTML = `
      <div class="collection-share" style="margin-top:8px; display:flex; justify-content: center; gap:8px;">
        ${shareLinks.length > 1 ? `<select id="shareSelect" style="padding:4px 6px; font-size:0.85rem;">${shareLinks.map(link => `<option value="${link.url}">${link.label}</option>`).join('')}</select>` : ''}
        <img src="../../assets/images/share.png" alt="Share" id="shareBtn" style="cursor:pointer; width:24px; height:24px;" />
      </div>

      <div id="shareModal" class="modal-share" style="display:none;">
        <div class="modal-share-content">
          <span class="modal-share-close" style="cursor:pointer; font-size:1.5rem;">&times;</span>
          <p>${defaultMessage}</p>
          <div class="social-share" style="display:flex; flex-direction:column; gap:8px;">
            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}" target="_blank">Facebook</a>
            <a href="https://wa.me/?text=${encodeURIComponent(currentUrl)}" target="_blank">WhatsApp</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}" target="_blank">LinkedIn</a>
            <button id="copyLinkBtn" style="padding:6px 12px; border-radius:6px; border:none; cursor:pointer; background:#000; color:#fff;">
              Copy Link
            </button>
            <span id="copyFeedback" style="display:none; font-size:0.9rem; color:green;">✅ Copied!</span>
          </div>
        </div>
      </div>
    `;

    const modal = this.querySelector("#shareModal");
    const btn = this.querySelector("#shareBtn");
    const closeBtn = this.querySelector(".modal-share-close");
    const copyBtn = this.querySelector("#copyLinkBtn");
    const feedback = this.querySelector("#copyFeedback");

    btn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(currentUrl);
        feedback.style.display = "inline";
        setTimeout(() => feedback.style.display = "none", 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
        copyBtn.textContent = "❌ Error";
      }
    });

    if (shareLinks.length > 1) {
      const select = this.querySelector("#shareSelect");
      select.addEventListener("change", () => {
        currentUrl = select.value;
        const links = this.querySelectorAll(".social-share a");
        links[0].href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        links[1].href = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
        links[2].href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`;
      });
    }
  }
}

customElements.define('collection-share', CollectionShare);


