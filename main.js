$(document).ready(function() {
    
    $("form").on("submit", function(e) {
        e.preventDefault()
        const inputValue = $("#newValue").val()
        const newList = $(`<li>${inputValue}</li>`)
        $(newList).appendTo('ul')
        $("#newValue").val("")

        $(newList).click(function() {
            $(newList).css("text-decoration", "line-through")
        })
    
    })

})