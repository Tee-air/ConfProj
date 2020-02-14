var PouchDB = require('pouchdb');

class managerData {

    constructor(dataType){
        this.type = dataType;
        if(dataType === "NoSQL"){
            this.url = 'http://127.0.0.1:5984/config_proj'
        }else if(dataType === "API"){
            
        }
    }

    async getDoc(id){
        var idDoc = 'vue_' + id;
        var db = new PouchDB('http://127.0.0.1:5984/config_proj');
        return await db.get(idDoc).then(function (doc) {
            console.log(doc);
            //return doc;
        });
    }

    async showDoc(id){
        var idDoc = 'vue_' + id;
        var db = new PouchDB('http://127.0.0.1:5984/config_proj');
        let doc;
        try{
            doc = await db.get(idDoc);
        }catch(err){
            throw err;
        }
        return doc;
    }

    setDoc(idDoc){

    }


}
module.exports = managerData;