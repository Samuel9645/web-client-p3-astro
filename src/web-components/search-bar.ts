import styles from '../styles/search-bar.css?inline';

const template = document.createElement('template');
template.innerHTML = `
<style>${styles}</style>
<input type="text" class="search-input" id="search-input" placeholder="Buscar especies..."/>
`;
export const searchEventName = 'species-search';

export interface SearchEventDetail {
    searchText: string;
}

declare global {
    interface HTMLElementEventMap {
        'species-search': CustomEvent<SearchEventDetail>;
    }
}

class SearchBar extends HTMLElement {
    private searchInput: HTMLInputElement;

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(template.content.cloneNode(true));
        this.searchInput =
            shadow.getElementById('search-input')! as HTMLInputElement;
    }

    connectedCallback() {
        this.searchInput.addEventListener('keydown', (event) => {
            const searchText = (event.target as HTMLInputElement).value;
            if (event.key === 'Enter') {
                this.emitSearchEvent(searchText.trim());
            }
        });
    }

    private emitSearchEvent(searchText: string): void {
        const searchEvent = new CustomEvent(searchEventName, {
            detail: {searchText}, bubbles: true, composed: true,
        });
        this.dispatchEvent(searchEvent);
    }
}

if (!customElements.get('search-bar')) {
    customElements.define('search-bar', SearchBar);
}
