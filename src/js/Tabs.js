import Tab from "./Tab.js";
import { createBtnGroup } from "./DOMutils.js";

class Tabs {
    #tabs = [];
    #tabs_group;

    constructor(properties) {
	    for(let tabIndex = 1; tabIndex <= properties.length; tabIndex++) {                                
		   const tab = new Tab("tabs-hdr-btn-group-btn", "btn");
		   tab.text = properties[tabIndex-1].text;
		   tab.disabled = properties[tabIndex-1].disabled;
		   tab.width = `${100/properties.length}%`;
      
	       this.#tabs = [...this.#tabs, tab.tab];
	    }
		this.#tabs_group = createBtnGroup("tabs-hdr-btn-group", this.#tabs);
	}

    get tabs() {
	    return this.#tabs;
	}

    get tabsGroup() {
	    return this.#tabs_group;
	}

    setStyle() {
	    for(const tab of this.#tabs) {
		    if(tab.disabled) {
			   tab.style.borderTopStyle = "solid";
			   tab.style.borderRightStyle = "solid";
			   tab.style.borderLeftStyle = "solid";
			   tab.style.borderBottomStyle = "solid";
			} else {
			   tab.style.borderRightStyle = "dotted";
			}
		}
	}
}

export default Tabs;
