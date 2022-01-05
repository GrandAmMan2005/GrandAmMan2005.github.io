let Playing = false
let track = document.getElementById("song");
let start_time
let end_time
let current_title = "Full Audio"


let timer=document.getElementById("counter")


var Play_Pause_Btn = document.getElementById("Play_Pause");
Play_Pause_Btn.addEventListener("click",Play_Pause);

var Fast_Forward_Button = document.getElementById("Fast_Forward");
Fast_Forward_Button.addEventListener("click",Fast_Forward);

var Rewind_Button = document.getElementById("Rewind_Button");
Rewind_Button.addEventListener("click",Rewind);


function Song_Timer()
{
    var curTime= Math.floor(track.currentTime).toString();
    let mins= Math.floor(curTime/60);
    let secs= curTime-mins*60
    if (secs<10)
    {
        timer.innerHTML=mins+":0"+secs
    }
    else
    {
        timer.innerHTML=mins+":"+secs
    }
    
}
setInterval(Song_Timer,100)


function Play_Pause()
{
    if(Playing==false)
    {
        console.log("play")
        track.play();
        Playing=true;
    }
    else
    {
        console.log("pause")
        track.pause()
        Playing=false;
    }
}


function Fast_Forward()
{
    track.pause()
    Playing=false
    console.log("Fast_Forward")
    track.currentTime+=5;
}


function Rewind()
{
    track.pause()
    Playing=false
    console.log("RW")
    track.currentTime-=5;
}



function selectTitle (button) {
    var x = button.id;
    switch (x) {
        case '1':
            current_title="Full Song"
            console.log("1")
            track.pause()
            start_time=0
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            break;
        case '2':
            current_title="Intro"
            track.pause()
            start_time=0
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("2");
            break;
        case '3':
            current_title="Beginning"
            track.pause()
            start_time=4
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("3");
            break;
        case '4':
            current_title="Rising"
            console.log("4");
            track.pause()
            start_time=32
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            break;
        case '5':
            current_title="You Can Do Anything You Want to"
            track.pause()
            start_time=66
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("5");
            break;
        case '6':
            current_title="Beginning 2"
            track.pause()
            start_time=97
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("6");
            break;
        case '7':
            current_title="Slowing Down"
            track.pause()
            start_time=130
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("7");
            break;
        case '8':
            current_title="Rising 2"
            track.pause()
            start_time=157
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("8");
            break;
        case '9':
            current_title="You Can Do Anything You Want To 2"
            track.pause()
            start_time=191
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("9");
            break;
        case '10':
            current_title="Getting Faster"
            track.pause()
            start_time=220
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("10");
            break;
        case '11':
            current_title="Beginning 3"
            track.pause()
            start_time=239
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("11");
            break;  
        case '12':
            current_title="Rising 3"
            track.pause()
            start_time=267
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("12");
            break;
        case '13':
            current_title="You Can Do Anything You Want to 3"
            track.pause()
            start_time=300
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("13");
            break;
        case '14':
            current_title="Beginning 4"
            track.pause()
            start_time=532
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("14");
            break;
        case '15':
            current_title="Slowing Down 2"
            track.pause()
            start_time=365
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("15");
            break;
        case '16':
            current_title="Rising 4"
            track.pause()
            start_time=391
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("16");
            break;
        case '17':
        current_title="You Can Do Anything You Want to 4"
            track.pause()
            start_time=425
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("17");
            break;
        case '18':
        current_title="Getting Gaster 2"
            track.pause()
            start_time=457
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("18");
            break;
        case '19':
        current_title="Beginning 5"
            track.pause()
            start_time=472
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("19");
            break;
        case '20':
        current_title="Ending Finally"
            track.pause()
            start_time=496
            track.currentTime=start_time
            end_time=999
            Playing=false
            track.addEventListener("canplay", checking)
            console.log("19");
            break;
        default:
            return false;
    }
}


//working
function checking()
{
    if(track.currentTime>end_time)
    {
       track.pause() 
       track.currentTime=start_time 
       Playing=false
    }
}
setInterval(checking,500)

function setTitle()
{
    file.innerHTML="Trance.mp3"+" "+ current_title
}
setInterval(setTitle,500)