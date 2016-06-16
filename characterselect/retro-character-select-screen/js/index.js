//Rebound of tutorial for Adobe AE by @lonearcherfilms
$('li').on('click',function(e){
  e.preventDefault();
  $('li').removeClass('active');
 
  $(this).addClass('active');
  var $blink = $(this);
  var i = 0;
 var b = setInterval(function() {
		$blink.toggleClass("blink");
     i++;
   if(i==6)
       clearInterval(b);
	}, 200);
   $('audio').remove();
  $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="http://nodws.com/cowabunga.ogg"  type="audio/ogg"> </audio>').appendTo('footer');
});