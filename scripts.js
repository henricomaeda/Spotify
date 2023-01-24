document.addEventListener('contextmenu', event => event.preventDefault());
const fetchData = () => {
    if (history.length > 1) document.getElementById("previous").style.cursor = "pointer";
    if (history.length > 1) document.getElementById("next").style.cursor = "pointer";

    // <div class="header"></div>
    $(".header").load("header.html");
    $(".footer").load("footer.html");

    document.querySelectorAll('.content .item .title')[0].value = 'Título 1';
    document.querySelectorAll('.content .item .title')[1].value = 'Título 2';
    document.querySelectorAll('.content .item .title')[2].value = 'Título 3';
    
    document.querySelectorAll('.content .item .subtitle')[0].value = 'SubTítulo 1';
    document.querySelectorAll('.content .item .subtitle')[1].value = 'SubTítulo 2';
    document.querySelectorAll('.content .item .subtitle')[2].value = 'SubTítulo 3';
}
