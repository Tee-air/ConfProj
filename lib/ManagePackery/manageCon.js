var PouchDB = require('pouchdb');
var http = require('http');

class manageCon {
    constructor(_typeCon) {
        this.typeCon = _typeCon;
    }

    getCon() {
        if (this.typeCon === "NoSQL") {
            console.log("no");
            return this.pouchCon();
        } else if (this.typeCon === "API") {
            console.log("yes");
            return this.APICon();
        }
    }

    async pouchCon() {
        if (this.idData) {
            var idDoc = 'vue_' + this.idData;
            var db = new PouchDB('http://127.0.0.1:5984/config_proj');
            let doc;
            try {
                doc = await db.get(idDoc);
            } catch (err) {
                throw err;
            }
            return doc;
        } else {
            return "Set IdData first !";
        }
    }

    async APICon() {
        //var urlAPI = 'https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/XxBipBipxX?api_key='+ this.keyAPI;
        var result;
        var urlAPI = "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations";

        var jsonObject = {
            api_key: this.keyAPI
        };
        console.log(jsonObject);
        try {
            result =  await http.get({ url: urlAPI + "?api_key=" + this.keyAPI});
        } catch (err) {
            console.log(err);
        }


        return result;
    }



}

module.exports = manageCon;