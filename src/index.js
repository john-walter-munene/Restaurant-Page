import { contacts, info, menu, reviews, homeTitle, menuTitle, contactTitle } from "./pageContent";
import { loadMain, changeBtnCover } from "./pageLoad";

// Set globals.

let btnNames = ['home', 'menu', 'contact'];
let currentTab = btnNames[0];
let content = document.getElementById('content')

// Initial Home page
loadMain(currentTab, content, reviews, homeTitle, info);

// Set click events for tab navigation.
btnNames.forEach(btnName => {
    var btn = document.getElementById(btnName)
    btn.addEventListener('click', ()=>{
        currentTab = changeBtnCover(currentTab, btn.id);
        currentTab = changeBtnCover(currentTab, btn.id);
    if (btn.id == 'home') {
      loadMain(btn.id, content, reviews, homeTitle, info);
    } else if (btn.id == 'menu') {
      loadMain(btn.id, content, menu, menuTitle);
    } else {
      loadMain(btn.id, content, contacts, contactTitle);
    }
    })
})