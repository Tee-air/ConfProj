class Route{
    
    constructor(url, callback){
        this.url = url;
        this.callback = callback;
        console.log("Route '" + url + "' created !");
        
    }
    
    
}

module.exports = Route;