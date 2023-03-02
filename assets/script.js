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

    // FInd out from googling how to grab current time from momentjs

})

//the split method also convert it to an interger
