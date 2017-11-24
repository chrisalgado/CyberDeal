$(document).ready(function(){
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length, //accede a banner, y cuenta cuántos hijos (img) con la clase .slide existen
        posicion: 1
    }
    
    banner.padre.children('.slide').first().css({ //cambiar código css al primer hijo
        'left': 0
    }); 
    
    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();
        
        banner.padre.css({
            'height': alto + 'px'
        });
    }
    
    altoBanner();
    
    $(window).resize(function(){ //la función se ejecuta cuando hay un cambio en la ventana
       altoBanner(); 
    });
    
    
    
    
    //Boton Siguiente
    $('#banner-next').on('click', function(e){ //al darle click, genere la función
        e.preventDefault(); //evita que en la URL aparezca que se ha dado click al boton 
        
        if(banner.posicion <banner.numeroSlides){
            banner.padre.children().not('.active').css({ //Hijos que no tengan la clase active, cambia su css
               'left': '100%' 
            });
    
            $('#banner .active').removeClass('active').next().addClass('active').animate({//colocar clase active en el siguiente elemento
            'left': '0'
            });
            
            $('#banner .active').prev().animate({ //Al hijo que anteriormente haya tenido la clase active, cambia su css
               'left': '-100%'
            });
            
            banner.posicion = banner.posicion + 1;
        } else{
            $('#banner .active').animate({ //para el último hijo
               'left': '-100%'
            });
            
             banner.padre.children().not('.active').css({ //Se posicionan a la derecha siempre
               'left': '100%' 
            });
            
            $('#banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({ //regresa la clase active al primer hijo
                'left': 0
            });
            
            banner.posicion = 1;
        }
        
        
    });
    
    //Boton Anterior
    $('#banner-prev').on('click', function(e){
        e.preventDefault();
        
        if(banner.posicion > 1){
            
            banner.padre.children().not('.active').css({
            'left': '-100%'
            });

            $('#banner .active').animate({
               'left': '100%'
            });
            
            $('#banner .active').removeClass('active').prev().addClass('active').animate({
               'left': 0 
            });
            
            banner.posicion = banner.posicion -1;
        } else{
            banner.padre.children().not('.active').css({
                'left': '-100%'
            });  
            
            $('banner .active').animate({
                'left': '100%'
            });
            
            $('banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
               'left':0 
            });
            
            banner.posicion = banner.numeroSlides;
        }
        
        
    });
});
