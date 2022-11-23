var saveBtn = $('.saveBtn')
var nineId =$('#hour9')
var tenId =$('#hour10')
var eleven =$('#hour11')
var twelve =$('#hour12')
var one =$('#hour1')
var two =$('#hour2')
var three =$('#hour3')
var four =$('#hour4')
var five =$('#hour5')
var textarea = $(".form-control")
var nine =$('#hr9')
var ten =$('#hr10')
var eleven =$('#hr11')
var twelve =$('#hr12')
var one =$('#hr1')
var two =$('#hr2')
var three =$('#hr3')
var four =$('#hr4')
var five =$('#hr5')


var timeArray = [nine, ten, eleven, twelve, one, two, three, four, five]

var text;
var hourSpan;
var currentHour = moment().hour()
var currentDay = $('#currentDay')

//This functions is responsible for getting and displaying the current time/date
function displayCurrentDay () {
    var timeInterval = setInterval(function () {
    var now = moment().format('dddd, MMMM Do, YYYY hh:mm A')
    currentDay.text(now)
      })
} 

displayCurrentDay ()

//This function turns previous time slots grey, future green, and current red/
function colors() {
    for (let i=0; i < timeArray.length; i++) {
        if (currentHour > timeArray[i].attr("data-time")){
            timeArray[i].attr("class", "past form-control col-10 text");

        } else if (currentHour == timeArray[i].attr("data-time")) {
            timeArray[i].attr("class", "present form-control col-10 text");

        } else {

            timeArray[i].attr("class", "future form-control col-10 text");
        }
        console.log (timeArray[i].attr("data-time"))
    }
}

// this fucntion saves data to local storge
function saveText (event){
    event.preventDefault()
    {
        var text = $(this).siblings(".text").val()
        var time = $(this).parent().attr("id");
        console.log(text)
        console.log(time)
        localStorage.setItem(time, text)
        }
    }
    
    saveBtn.on('click', saveText)
    //this allows you to retierive data from local storage that was save previously
    function refresh () {
        console.log("Current Hour " + currentHour);
        $("#hour9 .text").val(localStorage.getItem("hour9"));
        $("#hour10 .text").val(localStorage.getItem("hour10"));
        $("#hour11 .text").val(localStorage.getItem("hour11"));
        $("#hour12 .text").val(localStorage.getItem("hour12"));
        $("#hour1 .text").val(localStorage.getItem("hour1"));
        $("#hour2 .text").val(localStorage.getItem("hour2"));
        $("#hour3 .text").val(localStorage.getItem("hour3"));
        $("#hour4 .text").val(localStorage.getItem("hour4"));
        $("#hour5 .text").val(localStorage.getItem("hour5"));
        
    } 
$(document).ready (function (){
refresh()
colors()
} )
