document.addEventListener('contextmenu', event => event.preventDefault());
const fetchData = () => {
    $(".header").load("./components/header.html");
    $(".navigator").load("./components/navigator.html");
    $(".highlight").load("./components/highlight.html");
}

const fetchHighlight = () => {
    var images = document.querySelectorAll('.highlight .content .img'),
    titles = document.querySelectorAll('.highlight .content .title'),
    subtitles = document.querySelectorAll('.highlight .content .subtitle');

    const addCard = (n, t = '', s = '', i) => {
        titles[n].innerHTML = t;
        subtitles[n].innerHTML = s;

        const path = "./assets/" + i;
        $.ajax({
            url: path,
            type: 'HEAD',
            success: () => images[n].style.backgroundImage = "url('" + path + "')"
        });
    }

    for (var i = 0; i < titles.length; i++) {
        if (i == 0) addCard(i, "Peaceful Piano", "Relax and indulge with beautiful piano pieces", "icon.png");
        else if (i == 1) addCard(i, "Deep Focus", "Keep calm and focus with ambient and post-rock music.");
        else addCard(i);
    }
}

const repeat = (times, content, path) => {
    var panel = $(content).clone();
    for (i = 0; i < times; i++) {
        var new_panel = panel.clone();
        $(path).append(new_panel);
    }
}