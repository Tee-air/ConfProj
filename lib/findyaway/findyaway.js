
//function createRoute(url) {
//    let route = new Route(url, function (req, res) {

//    });
//    return route;
//}

function ajaxReq(url, query, jsonObject) {
    $.ajax({
        url: url,
        method: "POST",
        data: jsonObject,
        dataType: "json",
        success: function(data){
            return data;
        }
    });

}
