// ==UserScript==
// @name         GMX send mail via shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hit CTRL+ENTER to send an email when using GMX web version
// @author       Sascha Meyer
// @match        https://*.gmx.net/mail/client/mail/compose/*
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
