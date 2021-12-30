// ==UserScript==
// @name         nhentai_aid
// @namespace    https://github.com/LostALice
// @version      1.0
// @description  You should know how to use
// @author       Aki.no.Alice@Tyrant-Rex
// @match        https://nhentai.net/*
// @match        *://nhentai.net/*
// @connect      *
// ==/UserScript==

(function() {
    "use strict";
    window.addEventListener("load", function(){
        var list_ = document.querySelectorAll("#content [class=gallery] [class=cover]")
        var place = document.querySelectorAll("#content [class=gallery] [class=cover] [class=caption]")
        for (var i in list_){
            if (list_[i]){
                place[i].innerHTML = String(list_[i].href).replace(/[^0-9]/g, "") + "|" + place[i].innerHTML
            }
        }
    },false)
})();
