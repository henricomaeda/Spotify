document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener("scroll", () => {
    var pageYOffset = 384 + window.pageYOffset;
    var headerOpacity = "rgba(0, 0, 0, 0." + pageYOffset + ")";
    $("div.header").css("backgroundColor", headerOpacity);
});

const repeatElements = () => {
    const elements = document.querySelectorAll('[times]');
    if (elements) {
        for (var i = 0; i < elements.length; i++) {
            var c = elements[i].getAttribute("class");
            var t = elements[i].getAttribute("times");
            var p = elements[i].getAttribute("path");
            var local = document.getElementsByName(p);
            if (t && p && c && local.length > 0) {
                for (n = 0; n < t; n++) {
                    var panel = elements[i].cloneNode(true);
                    local[i].append(panel);
                }
            }
        }
    }
}

const loadDatabase = () => {
    const fetchDatabase = (c, s) => {
        var images = c.querySelectorAll('.content .img'),
        titles = c.querySelectorAll('.content .title'),
        subtitles = c.querySelectorAll('.content .subtitle');
    
        const addCard = (n, t = '', s = '', i) => {
            titles[n].innerHTML = t;
            subtitles[n].innerHTML = s;
    
            const path = "./assets/musics/" + i;
            $.ajax({
                url: path,
                type: 'HEAD',
                success: () => images[n].style.backgroundImage = "url('" + path + "')"
            });
        }
    
        for (var i = 0; i < titles.length; i++) {
            if (i == 0) addCard(i, "Peaceful Piano", "Relax and indulge with beautiful piano pieces", "ab67706f00000002ca5a7517156021292e5663a6.jpeg");
            else if (i == 1) addCard(i, "Deep Focus", "Keep calm and focus with ambient and post-rock music.", "ab67706f000000025551996f500ba876bda73fa5.jpeg");
            else addCard(i);
        }
    }

    var path = "body .main .component";
    var components = document.querySelectorAll(path);
    if (components) {
        for (var i = 0; i < components.length; i++) {
            var name = components[i].getAttribute("name");
            var search = components[i].getAttribute("search");
            components[i].getElementsByClassName("title")[0].innerHTML = name;
            fetchDatabase(components[i], search);
        }
    }
}

const fetchData = async () => {
    $(".header").load("./components/header.html");
    $(".footer").load("./components/footer.html");
    $(".navigator").load("./components/navigator.html");
    $("body .main .component").load("./components/component.html");

    $("html").hover(
        () => $("html").css("overflowY", "overlay"),
        () => $("html").css("overflowY", "hidden")
    );

    $(".navigator").hover(
        () => $("html").css("overflowY", "hidden"),
        () => $("html").css("overflowY", "overlay")
    );

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(20);
    
    repeatElements();
    loadDatabase();
}