
		function changeImage() 
		{
		x = (x === images.length - 1) ? 0 : x + 1;
		document.getElementById("img").src = images[x];
		}
		function startTimer() 
		{
		setInterval(changeImage, 2500);
		}
		var images = [], x = -1;
		images[0] = "images/book1.jpg";
		images[1] = "images/img3.jpg";
		images[2] = "images/img4.jpg";
        images[3] = "images/img5.jpg";
        images[4] = "images/img6.jpg";
