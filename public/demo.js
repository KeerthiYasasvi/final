$(function ($) {
       $('#handleCounter1').handleCounter({
    minimum: 1,
    maximize: 100,
   
           
    })
          
        $('#handleCounter2').handleCounter({
    minimum: 1,
    maximize: 100,
             
           })
       
     
       
       });
      
   

//for datepicker

addEventListener('DOMContentLoaded', function () {
	

   
    
	pickmeup('.range', {
		mode : 'range',
        separator: '    to   ',
        position :'bottom',
//        hide_on_select : true,
        format: 'd b-y',
      
	});
//pickmeup('.range').show();


    
});


// map
function initMap() {
        var uluru = {lat:  19.735121, lng: -155.014044};  
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
