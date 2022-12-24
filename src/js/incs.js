const body = document.body;
const main = body.children.namedItem("main");

const tabs = main.children.namedItem("tabs");
const tabsHdr = tabs.children.namedItem("tabs-hdr");

const tabsBody = tabs.children.namedItem("tabs-body");
const contents = [
    {"text": "Tab 1", "disabled": false},
    {"text": "Tab 2", "disabled": true},
    {"text": "Tab 3", "disabled": true},
    {"text": "Tab 4", "disabled": true},                                                                
    {"text": "Tab 5", "disabled": true}
]; 

export { tabsHdr, tabsBody, contents };
