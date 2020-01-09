var $;

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    $ = require("jquery")(window);
});

const Route = require('../Beans/routeBean');

function createRoute(url) {
    let route = new Route(url, function (req, res) {

    });
    return route;
}

function ajaxReq(url, query) {
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    });

}



module.exports = {
    createRoute: createRoute,
    ajaxReq: ajaxReq
};