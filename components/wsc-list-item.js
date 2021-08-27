import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class WscListItem extends LitElement {

  static properties = {
    collapsed: { type: Boolean, reflect: true }
  }

  static styles = css`
    main{
      border-top:2px solid var(--primary);
      margin-bottom:10px;
      padding:10px;
    }

    header{
      display:flex;
      align-items: center;
    }
    footer{
      border-top:1px dotted #999;
    }
    aside{
      flex:100%;
      padding:10px;
    }

    aside:last-child,
    aside:first-child{
      flex:2 200px;
    }

    aside:first-child{
      padding-left:0;
    }

    aside:last-child{
      text-align:right;
      padding-right:0;
    }

    footer.collapsed{
      display:none;
    }

    ::slotted(h1){
      color:var(--primary);
      font-size:2em;
    }

    button{
      background:var(--primary);
      padding:10px;
      width:80px;
      color:white;
      border:none;
      font-size:1.2em;
    }
  `

  render() {
    return html`
      <main>
        <header>
          <aside>Left</aside>
          <aside>Center</aside>
          <aside><button>Click Me!</button></aside>
        </header>

        <footer>
          Footer
        </footer>
      </main>
    `;
  }
}

customElements.define('wsc-list-item', WscListItem);
