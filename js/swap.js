     //swapping images 1&2
        	function swap()
        	{
        		var image1,image2;
        		image1=document.getElementById('img1').src;
        		image2=document.getElementById('img2').src;
        		document.getElementById('img2').src=image1;
        		document.getElementById('img1').src=image2;
         	}
    //swapping images 1to4 and 2to3
         	function swapImage()
         	{
         		var image1,image2,image3,image4;
         		image1=document.getElementById('img1').src;
         		image4=document.getElementById('img4').src;
         		image2=document.getElementById('img2').src;
         		image3=document.getElementById('img3').src;
         		document.getElementById('img4').src=image1;
         		document.getElementById('img1').src=image4;
         		document.getElementById('img2').src=image3;
         		document.getElementById('img3').src=image2;
         	}