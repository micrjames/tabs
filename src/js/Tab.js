import { createBtn } from "./DOMutils.js";

class Tab {
    #tab;

    constructor(idName, className) {
		this.#tab = createBtn(idName, className);
	}

    set text(value) {
	    this.#tab.textContent = value;
	}

    set disabled(value) {
	    this.#tab.disabled = value;
	}
    get disabled() {
	    return this.#tab.disabled;
	}

    set width(value) {
	    this.#tab.style.width = value;
	}

    get tab() {
	    return this.#tab;
	}
    setBorder() {
	    if(this.#tab.disabled) {
            this.#tab.style.borderTopStyle = "solid";
            this.#tab.style.borderRightStyle = "solid";
            this.#tab.style.borderLeftStyle = "solid";
        }  
	}
}

export default Tab;
