if (window.location.pathname === '/volvo.html') {
    const vredButton = document.getElementById("vred_button");
    const vblueButton = document.getElementById("vblue_button");
    const vtruckImage = document.getElementById("volvo_truck-image");
    const volvoEngine = document.getElementById("volvo_engine_audio");
    const volvoSoundButton = document.getElementById("volvo_sound");
    vtruckImage.src = "Images/Volvo VNL.jpg";

    vblueButton.addEventListener("click", function () {
        vtruckImage.src = "Images/BlueVolvo.jpg";
    });
    
    vredButton.addEventListener("click", function () {
        vtruckImage.src = "Images/RedVolvo.jpg";
    });

    volvoSoundButton.addEventListener("click", function () {
        volvoEngine.play();
    })

} 
if (window.location.pathname === '/mack.html') {
    const mblueButton = document.getElementById("mblue_button");
    const mredButton = document.getElementById("mred_button");
    const mackSoundButton = document.getElementById("mack_sound");
    const mackEngine = document.getElementById("mack_engine_audio");
    const mtruckImage = document.getElementById("mack-truck-image");
    mtruckImage.src = "Images/Mack Anthem.jpg";



    mblueButton.addEventListener("click", function () {

        mtruckImage.src = "Images/Mack Anthem Blue.jpg";
    });

    mredButton.addEventListener("click", function () {

        mtruckImage.src = "Images/Mack Anthem Red.jpg";
    });

    mackSoundButton.addEventListener("click", function () {
        mackEngine.play();
    });

}
if (window.location.pathname === '/western.html') {
    const wblueButton = document.getElementById("wblue_button");
    const wredButton = document.getElementById("wred_button");
    const westernSoundButton = document.getElementById("western_sound");
    const westernEngine = document.getElementById("western_engine_audio");
    const wtruckImage = document.getElementById("western-truck-image");
    wtruckImage.src = "Images/Western Star 57X.jpg";



    wblueButton.addEventListener("click", function () {

        wtruckImage.src = "Images/Western Star Blue.jpg";
    });

    wredButton.addEventListener("click", function () {

        wtruckImage.src = "Images/Western Star Red.jpg";
    });

    westernSoundButton.addEventListener("click", function () {
        westernEngine.play();
    });

}

if (window.location.pathname === '/kenworth.html') {
    const kblueButton = document.getElementById("kblue_button");
    const kredButton = document.getElementById("kred_button");
    const kenworthSoundButton = document.getElementById("kenworth_sound");
    const kenworthEngine = document.getElementById("kenworth_engine_audio");
    const ktruckImage = document.getElementById("kenworth-truck-image");
    ktruckImage.src = "Images/Kenworth T680.jpg";



    kblueButton.addEventListener("click", function () {

        ktruckImage.src = "Images/Kenworth Blue.jpeg";
    });

    kredButton.addEventListener("click", function () {

        ktruckImage.src = "Images/Kenworth Red.jpg";
    });

    kenworthSoundButton.addEventListener("click", function () {
        kenworthEngine.play();
    });

}

if (window.location.pathname === '/peterbilt.html') {
    const pblueButton = document.getElementById("pblue_button");
    const predButton = document.getElementById("pred_button");
    const peterbiltSoundButton = document.getElementById("peterbilt_sound");
    const peterbiltEngine = document.getElementById("peterbilt_engine_audio");
    const ptruckImage = document.getElementById("peterbilt-truck-image");
    ptruckImage.src = "Images/Peterbilt 579.jpeg";



    pblueButton.addEventListener("click", function () {

        ptruckImage.src = "Images/Peterbilt Blue.jpg";
    });

    predButton.addEventListener("click", function () {

        ptruckImage.src = "Images/Peterbilt Red.jpg";
    });

    peterbiltSoundButton.addEventListener("click", function () {
        peterbiltEngine.play();
    });

}

if (window.location.pathname === '/freightliner.html') {
    const fblueButton = document.getElementById("fblue_button");
    const fredButton = document.getElementById("fred_button");
    const freightlinerSoundButton = document.getElementById("freightliner_sound");
    const freightlinerEngine = document.getElementById("freightliner_engine_audio");
    const ftruckImage = document.getElementById("freightliner-truck-image");
    ftruckImage.src = "Images/Freightliner Cascadia.jpg";



    fblueButton.addEventListener("click", function () {

        ftruckImage.src = "Images/Freightliner Blue.jpg";
    });

    fredButton.addEventListener("click", function () {

        ftruckImage.src = "Images/Freightliner Red.jpg";
    });

    freightlinerSoundButton.addEventListener("click", function () {
        freightlinerEngine.play();
    });

}



