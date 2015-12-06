var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
//       console.log(window.location.search);
//       console.log(document);
//       var videoHTML = '<video id="video" class="video_box video-js vjs-default-skin" controls data-setup=\'{ "techorder": ["youtube"], "sources": [{ "type": "video/youtube", "src":"'+urlParams.url+'"}] }\'> <p>your browser doesn\'t support video. please <a href="http://browsehappy.com/">upgrade your browser</a> to see the example.</p> </video>';
//       document.querySelector("#videoBox").innerHTML= videoHTML;
    
})();
