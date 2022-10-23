

function createHalfWave(color, waveLength,waveAmplitude){
    const marginBottom = parseInt((50 - waveAmplitude)/2)+8;
    return `<div style="
        display: inline-block; 
        border: 2px solid ${color};
        background: ${color}; 
        border-radius: 50px;
        width: ${waveLength}px;
        height: ${waveAmplitude}px;
        margin-bottom: ${marginBottom}px">
    </div>`
}
function createWaveWrapper(halfWaves){
    return `<div style="
        position: relative;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        background-image: linear-gradient( to bottom, #fff, #fff 50%, #0652e1 15% );
        border-bottom: 25px solid #0652e1;
        padding: 5px 0">
        ${halfWaves}
    </div>`
}


function createBoat(position) {
    return `<div style="
        width: 70px;
        position: absolute;
        bottom: 5px;
        left: ${position}px;
        border-top: 13px solid #543;
        border-right: 20px solid transparent;
        border-left: 8px solid transparent;  
        ">
            <div style="
                width: 3px;
                height: 75px;
                background: #543;
                position: absolute;
                bottom: 0;
                left: 53px;">
            </div>
            <div style="
                width: 2px;
                height: 43px;
                background: #543;
                position: absolute;
                bottom: 50px;
                left: 35px;
                transform: rotate(117deg);">
            </div>
            <div style="
                height: 0px;
                position: absolute;
                bottom: 14px;
                left: 8px;
                border-right: 10px solid #dbaf80;
                border-top: 65px solid transparent;">
            </div>
            <div style="
                height: 48px;
                position: absolute;
                bottom: 14px;
                left: 18px;
                border-left: 34px solid #dbaf80;
                border-top: 17px solid transparent;">
            </div>
            <div style="
                height: 0px;
                position: absolute;
                bottom: 14px;
                left: 57px;
                border-left: 25px solid #dbaf80;
                border-top: 60px solid transparent;">
            </div>
    </div>`;
}

let wave = '';
for (let _ = 0; _<=200; _++) {
    waveLength = 25 + 50 * Math.random();
    wave += createHalfWave(_%2 ? '#0652e1' : '#fff', waveLength, waveLength);
}

const windowWidth = $(window).width();
function setBoatPosition() {
    return Math.random()*(windowWidth - 100);
}
let firstBoatPosition = setBoatPosition();
let secondBoatPosition = setBoatPosition();
if (windowWidth < 300) {
    secondBoatPosition = 400;
}
while (Math.abs(firstBoatPosition - secondBoatPosition) < 70) {
    firstBoatPosition = setBoatPosition();
    secondBoatPosition = setBoatPosition();
}
const boats = createBoat(firstBoatPosition) + createBoat(secondBoatPosition);
$( document ).ready(function() {
    $( createWaveWrapper(wave+boats) ).insertAfter( ".site-header" );
});


