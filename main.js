//voglio che sia mostrato .header-right > a che rappresenta l'hamburger menu

$( ".header-right > a" ).show();


$( ".header-right > a" ).click(function() {
    $( ".hamburger-menu" ).show();
})
//$( ".hamburger-menu" ).show();

$( ".close" ).click(function() {
    $( ".hamburger-menu" ).hide();
})