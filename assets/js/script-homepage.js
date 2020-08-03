$('#btn-error').show();


$(()=>{
/* animation phrase home */
    $('.titre-home').hide();
    $('.text-fixe').show();
    animationText();

    function animationText(){

    $('.text-1').fadeIn( 1500, function() {
        $( '.text-1' ).fadeOut( 1000,()=>{
            $('.text-2').fadeIn( 1500, ()=>{
                $( '.text-2' ).fadeOut( 1000,()=>{
                    $('.text-3').fadeIn( 1500, ()=>{
                        $( '.text-3' ).fadeOut( 1000,  animationText)
                            });
                        });
                    });
                });
            });


};

/* fin animation */

$( ".container-kantdev" ).hover(
    function() {
      $( this ).removeClass(".container-kantdev" )
      $(".card-img-kantdev, .resume-card-kantdev").show();
    },()=> {
        $( this ).addClass( ".container-kantdev" )
        $(".card-img-kantdev, .resume-card-kantdev").hide();
      }
  );
});


