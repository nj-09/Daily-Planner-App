// Global variables

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var x = $(this).siblings(".description").val();
        var y = $(this).parent().attr("id")
        console.log(x);
        localStorage.setItem(y, x) 
        localStorage.getItem()
        localStorage.setItem('y', x) 
        var z = localStorage.getItem('y')
    })

    $("#txt1").val(localStorage.getItem("hour-9"))
    $("#txt2").val(localStorage.getItem("hour-10"))
    $("#txt3").val(localStorage.getItem("hour-11"))
    $("#txt4").val(localStorage.getItem("hour-12"))
    $("#txt5").val(localStorage.getItem("hour-13"))
    $("#txt6").val(localStorage.getItem("hour-14"))
    $("#txt7").val(localStorage.getItem("hour-15"))
    $("#txt8").val(localStorage.getItem("hour-16"))
    $("#txt9").val(localStorage.getItem("hour-17"))

    // Grab current time from momentjs
    $('#currentDay').text(moment().format('dddd [the] Do [of] MMMM'));

})


    // Color Coding for past, present and future slots according to the user's time
function getHour() {
    var currentTime = moment().hours();
            // Looping through an array
            $('.time-block').each(function() {
                var blockTime = parseInt($(this).attr('#9').split('hour-')[1]);
                console.log(blockTime, currentTime)
                
                if (blockTime < currentTime) {
                    $(this).addClass('past');
                    
                }  else if (blockTime < currentTime) {
                    $(this).addClass('past');

                }   else (blockTime < currentTime) 
                    $(this).addClass('past');

});

}

getHour();         



//the split method also convert it to an interger
// I think I'll need to call an element from the index.html like say for hour 9
