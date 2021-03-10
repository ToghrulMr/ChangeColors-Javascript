function change_colors()
{
    colors = ["#008ae6","#ffd11a","#ff471a","#ff1aff","yellow"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = randomColor;

    setTimeout(change_colors, 1000);
}