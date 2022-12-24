import { tabsHdr, tabsBody, contents } from "./incs.js";
import { createBtn, createBtnGroup } from "./DOMutils.js";

let btns = [];
for(let btnIndex = 1; btnIndex <= contents.length; btnIndex++) {
   const btn = createBtn("tabs-hdr-btn-group-btn", "btn");
   btn.textContent = contents[btnIndex-1].text;
   btn.disabled = contents[btnIndex-1].disabled;
   btn.style.width = `${100/contents.length}%`;

   btns = [...btns, btn];
}

const tabsHdrBtnGroup = createBtnGroup("tabs-hdr-btn-group", btns);
tabsHdr.appendChild(tabsHdrBtnGroup);
