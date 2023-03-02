// Global variables
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var x = $(this).siblings(".description").val();
        var y = $(this).parent().attr("id")
        console.log(x);
        localStorage.setItem(y, x) 
        localStorage.getItem()
    })
    $("#txt").val(localStorage.getItem("hour-13"))

    // FInd out from googling how to grab current time from momentjs

})

//the split method also convert it to an interger
