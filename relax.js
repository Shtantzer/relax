//NAPRAVIT DA KAD TEKST DODE U MAX SIZE, PRETVARA SE U IZDAHNI I TAKO SVE U LOOP X 3
//NAKON 3. IZDAHA JAVLJA SE ""OTVORI OCI" I POSTAVLJA SE 


/*const gumbJezika = document.getElementById('gumbJezika');
const jezikDiv = document.getElementById('jezikDiv');


gumbJezika.addEventListener('click', function() {
    clearContent();
  });

  function clearContent() {
    jezikDiv.innerHTML = '';*/

    const contentDiv = document.getElementById('contentDiv')
    
    const paragraf = document.createElement('p');
    paragraf.textContent = "Ovo je vodič za trenutno opuštanje tijela i prelazak uma u prirodnu ekstazu mira. \r\n";
    paragraf.textContent += "\r\n";
    paragraf.textContent += "Povećajte glasnoću 🔊 te pritisnite dolje za početak:";
  


    const gumbZapocni = document.createElement('button');
    gumbZapocni.innerHTML = "";

    contentDiv.appendChild(paragraf);
    contentDiv.appendChild(gumbZapocni);

    gumbZapocni.addEventListener("click", function() {
        startCountdown(paragraf, gumbZapocni, contentDiv);
    });


function startCountdown(paragraf, gumbZapocni, contentDiv) {
    
    let count = 3
    const videoDiv = document.getElementById("videoDiv");
    
    const countdownInterval = setInterval(() => {
    paragraf.textContent = count;
    count--;

        if (contentDiv.contains(gumbZapocni)) {
            contentDiv.removeChild(gumbZapocni);
        }

        if (count < 0) {
            clearInterval(countdownInterval);
            paragraf.textContent = "opusti se :)";

            if (contentDiv.contains(paragraf)) {
                contentDiv.removeChild(paragraf);
            }

            /*contentDiv.appendChild(udahni);
            
        if (contentDiv.contains(udahni)) {
            contentDiv.removeChild(udahni);
        }*/

        const jumpscare = document.createElement("video");
        const overlayVideo = document.getElementById("overlayVideo");
        overlayVideo.width = window.innerWidth; // Same as the width in CSS
        overlayVideo.height = window.innerHeight; // Same as the height in CSS

        jumpscare.src = "jumpscare2.mp4"
        jumpscare.type = "video/mp4";
        jumpscare.autoplay = true;
        jumpscare.loop = true;

        openFullscreen();

        videoDiv.appendChild(jumpscare);
        overlayVideo.style.display = "block";
    }
}, 1000);

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
}

        /*jumpscare.addEventListener("play", () => {
            if (jumpscare.requestFullscreen) {
                jumpscare.requestFullscreen();
            } else if (jumpscare.mozRequestFullScreen) { // Firefox
                jumpscare.mozRequestFullScreen();
            } else if (jumpscare.webkitRequestFullscreen) { // Chrome, Safari and Opera
                jumpscare.webkitRequestFullscreen();
            } else if (jumpscare.msRequestFullscreen) { // Internet Explorer and Edge
                jumpscare.msRequestFullscreen();
            }
        
        videoDiv.appendChild(jumpscare);
    
        })
        
    }}, 1000);

}



    
const jumpscare = document.createElement("video");

jumpscare.src = "C:\Users\RUDA FELKER\OneDrive - Veleučilište Velika Gorica\LUDE WEB STRANICE\RELAX\jumpscare.mp4"
jumpscare.type = "video/mp4";
jumpscare.autoplay = true;

/*contentDiv.appendChild(jumpscare);*/
