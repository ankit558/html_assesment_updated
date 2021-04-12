    //Image Changes
                function changeImage() {
                x = (x === images.length - 1) ? 0 : x + 1;
                document.getElementById("img").src = images[x];
                }
                function startTime() {
                setInterval(changeImage, 5000);
                }
                var images = [], x = -1;
                images[0] = "images/img3.jpg";
                images[1] = "images/img4.jpg";
                images[2] = "images/img5.jpg";  