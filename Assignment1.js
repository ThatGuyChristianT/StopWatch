var interval;
var STime = 0;//Time in seconds
var MSTime = 0; //Time in Milliseconds
var STSP = false;//STSP = Start/Stop
var recorded = [];

//KeyPress Handler
document.onkeypress = KeyPressHandler;
function KeyPressHandler(event)
{
    if(event.key.toUpperCase() == "S")
        {
            funcSTSP();
        }
    else if(event.key.toUpperCase() == "R")
        {
            funcReset();
        }
    else if(event.key.toUpperCase() == "T")
        {
            funcRecTime();
        }
    
}

//Start/Stop
function funcSTSP()
{
    if(STSP == false)
        {
            interval = setInterval(function()//Lambda
                                  {
                if(MSTime == 99)
                    {
                        STime++;
                        MSTime = 0;
                    }
                MSTime++;
                document.getElementById("timer").innerHTML = STime + "."+MSTime;
            }, 10)
            STSP = true;
            document.getElementById("OP").innerHTML = "Operation: Start";
        }
    else
        {
            funcSP();
        }
    
}
//Stop func
function funcSP()//SP = Stop
{
    clearInterval(interval);//Stops the time and keeps it.
    STSP = false;//Sets it to stop.
    document.getElementById("OP").innerHTML = "Operation: Stop";
}

//Reset func
function funcReset()
{
    funcSP();
    STime = MSTime = 0;
    recorded = [];
    document.getElementById("timer").innerHTML = "0";
    document.getElementById("PT").innerHTML = "";
    document.getElementById("OP").innerHTML = "Operation: Reset";
    
}

//RecTime func
function funcRecTime()
{
    for(var i = 0; i<=recorded.length; i++)
        {
            if(recorded[i] == null)
                {
                    recorded[i] = "<br/>"+STime + "." + MSTime;
                    document.getElementById("OP").innerHTML = "Operation: Record Time";
                    document.getElementById("PT").innerHTML += recorded[i];
                    break;
                }
        }
}