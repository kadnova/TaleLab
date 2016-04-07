$(document).ready(function(){

	$('.add-new-data').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	
		$(function()
		{
			$('.scroll-pane').each(
				function()
				{
					$(this).jScrollPane(
						{
							showArrows: $(this).is('.arrow')
						}
					);
					var api = $(this).data('jsp');
					var throttleTimeout;
					$(window).bind(
						'resize',
						function()
						{
							if (!throttleTimeout) {
								throttleTimeout = setTimeout(
									function()
									{
										api.reinitialise();
										throttleTimeout = null;
									},
									50
								);
							}
						}
					);
				}
			)

		});
});

	
		
////-----------------------------------------НОВАЯ СTРОКА------------------------
//    $('#add').click(function(){
//        $('#counts').prepend('<p><input type="text" id="edit" /><button id="save">Сохранить</button></p>');
//        $('#edit').focus();
//        $('#save').click(function() {
//            var val = $('#edit').val();
//            $('#edit').parent().empty().html(val);
//            });
//    });
//        $('#counts').on('click','p', function(e){
//          var t = e.target || e.srcElement;
//
//          var elm_name = t.tagName.toLowerCase();
//          if(elm_name == 'p' && $(t).find('input').length != 0 )    {return false;}
//                  if (elm_name == 'input') {$(t).focus(); return false;
//          var val=$(this).html();
//          var code = '<input type="text" id="edit" value="'+val+'" /><button id="save">Сохранить</button>';
//          $(this).empty().append(code);
//          $('#edit').focus();
//			$('#save').click(function() {  
//                var val = $('#edit').val();
//                $('#edit').parent().empty().html(val);
//            });
//
//        });
//});
