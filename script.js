const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }

    } catch(error) {
        console.log('whoops!, error here ' , error)
    }

}

button.addEventListener('click' ,async () => {
    //disable button 
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled =false;
})


//on Load
selectMediaStream()