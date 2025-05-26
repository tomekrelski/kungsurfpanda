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

