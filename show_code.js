// ==UserScript==
// @name         nhentai_aid
// @namespace    https://github.com/LostALice
// @version      1.0
// @description  You no need to know how to use
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
            console.log(list_[i])
            if (list_[i]){
                var link = String(list_[i].href)
                link = link.replace(/[^0-9]/g, "")
                place[i].innerHTML = link + "|" + place[i].innerHTML
            }
        }
    },false)
})();
