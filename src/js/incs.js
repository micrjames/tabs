const body = document.body;
const main = body.children.namedItem("main");

const tabs = main.children.namedItem("tabs");
const tabsHdr = tabs.children.namedItem("tabs-hdr");

const tabsBody = tabs.children.namedItem("tabs-body");
const contents = [
    {"text": "Tab 1", "enabled": true},
    {"text": "Tab 2", "enabled": false},
    {"text": "Tab 3", "enabled": false},
    {"text": "Tab 4", "enabled": false},                                                                
    {"text": "Tab 5", "enabled": false}
]; 

export { tabsHdr, tabsBody, contents };
