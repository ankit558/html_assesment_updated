				$(document).ready(function()
				{
					var images = $('.image')
					imageindex = 0;
					images.hide();
					Rotator();
					function Rotator()
					{
						$(images[imageindex]).fadeIn('slow').delay(2500).fadeOut('slow');
						$(images[imageindex]).queue(function() 
						{
						    imageindex = imageindex < images.length - 1 ? imageindex + 1 : 0;
						    Rotator();
						    $(this).dequeue();
						});
					}
				});