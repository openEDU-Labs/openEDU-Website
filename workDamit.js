(function() {
    var videoHTML = '<video id="video" class="video_box video-js vjs-default-skin" controls data-setup=\'{ "techorder": ["youtube"], "sources": [{ "type": "video/youtube", "src":"'+urlParams.url+'"}] }\'> <p>your browser doesn\'t support video. please <a href="http://browsehappy.com/">upgrade your browser</a> to see the example.</p> </video>';
    document.querySelector("#videoBox").innerHTML= videoHTML;
    console.log(document.querySelector("#videoBox"));
})();

