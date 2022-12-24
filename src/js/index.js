import { tabsHdr, tabsBody, contents } from "./incs.js";
import Tabs from "./Tabs.js";

const tabs = new Tabs(contents);
tabs.setStyle();

tabsHdr.appendChild(tabs.tabsGroup);
