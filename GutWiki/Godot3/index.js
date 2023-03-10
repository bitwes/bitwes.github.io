function loadWikiPage(pageUrl) {
    var theDiv = document.getElementById("wiki_page");
    theDiv.innerHTML='<object class="inner-page" type="text/html" data="' + pageUrl + '" ></object>';
}


function wireTocLink(link){
    link.onclick = function(e) {
        window.location = window.location.pathname + "?page=" + link.getAttribute("href")
        e.preventDefault();
        return false;
    };
}


function addStyleSheet(cssHref){
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssHref;
    document.getElementsByTagName('HEAD')[0].appendChild(link);
}


window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var loadPage = 'Home.html'
    if(urlParams.has('page')){
        loadPage = urlParams.get('page')
    }
    loadWikiPage(loadPage);

    var allTocLinks = document.getElementById("toc").querySelectorAll('a')
    for (let i = 0; i < allTocLinks.length; i++) {
        wireTocLink(allTocLinks[i]);
    }

    // cssEles = document.querySelectorAll('[id=maincss]');
    // for(let i = 0; i < cssEles.length; i ++){
    //     cssEles[i].setAttribute("href", 'github-markdown-dark.css');
    // }
}


