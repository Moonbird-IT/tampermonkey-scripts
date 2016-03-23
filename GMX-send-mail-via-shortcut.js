// ==UserScript==
// @name         GMX send mail via shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hit CTRL+ENTER to send an email when using GMX web version
// @author       Sascha Meyer
// @match        https://navigator.gmx.net/navigator/show?sid=7d5ff7a0f8e59903d9754a6e6daa8a542ddac6fe4373e049d77392ab0179b70af40ee8730d0b375417629eb29b0d3b39#mail
// @grant        feel free to use, update, share, whatever
// ==/UserScript==
/* jshint -W097 */
'use strict';

window.ctrlKeyPushed= false;

window.addEventListener('keydown', function(e) {
    if (e.which == 17) {
        window.ctrlKeyPushed= true;   
    };
});

window.addEventListener('keyup', function(e) {
    if (e.which == 17) {
        window.ctrlKeyPushed= false;   
    };
    if (e.which === 13 && window.ctrlKeyPushed) { // Ctrl+Enter
        jQuery('button[name="composeHeader:buttonSend"]').click();
    }
});
