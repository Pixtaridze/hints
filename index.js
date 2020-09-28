$("#address").suggestions({
    token: "cac0e271f9c33b71ca9932b10100f635a0196a68",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});
