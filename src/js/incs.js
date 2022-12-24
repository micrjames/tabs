const body = document.body;
const main = body.children.namedItem("main");

const tabs = main.children.namedItem("tabs");
const tabsHdr = tabs.children.namedItem("tabs-hdr");

const tabsBody = tabs.children.namedItem("tabs-body");
const contents = [
    {"text": "Tab 1", "enabled": true, "content": "Tab 1 content"},
    {"text": "Tab 2", "enabled": false, "content": "Tab 2 content"},
    {"text": "Tab 3", "enabled": false, "content": "Tab 3 content"},
    {"text": "Tab 4", "enabled": false, "content": "Tab 4 content"},                                      
    {"text": "Tab 5", "enabled": false, "content": "Tab 5 content"}
]; 

export { tabsHdr, tabsBody, contents };
