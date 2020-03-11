
$(function () {
    console.log('SERVICE_URL:'+SERVICE_URL)
    $.ajax({
        url: SERVICE_URL+'api/simple.json',
        dataType: 'json', //json data type
        data: 'data',
        success: function(data){
            console.log(data)
        },
        error: function(error){
            console.log(error)
        }
    });
});