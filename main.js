
//voglio che al clic si apra l'hamburger menu
$( ".header-right > a" ).click(function() {
    $( ".hamburger-menu" ).show();
});

//voglio che al clic si chiuda l'hamburger menu
$( ".close" ).click(function() {
    $( ".hamburger-menu" ).hide();
});
