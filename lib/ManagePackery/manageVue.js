var PouchDB = require('pouchdb');

class managerVue {

    constructor(){
        
    }

    updateBlocks(vue) {

        var db = new PouchDB('http://127.0.0.1:5984/test');
        db.get('vue_1').then(function (doc) {
            console.log(doc);

            return db.put({
                _id: 'vue_1',
                _rev: doc._rev,
                content: vue.content
              });

        }).catch(function(err){
            console.log(err)
        });
    };

    initVue3(idVue){
        var idDoc = 'vue_' + idVue;
        var db = new PouchDB('http://127.0.0.1:5984/test');
        try{
            var doc = db.get(idDoc);
            console.log(doc);
            return doc;
        }catch(err){
            console.log(err);
        }
    }

    async initVue(idVue){
        var idDoc = 'vue_' + idVue;
        var db = new PouchDB('http://127.0.0.1:5984/test');
        let docResp = await db.get(idDoc).then(function (doc) {
            console.log("LOG 1");
            return doc;
        }).catch(function(err){
            console.log(err);
        });
    }

    getHtmlBlocks(blocks){
        var concatContent = "";
        var classSize = "";
        for (var i = 0; i > blocks.length; I++ ){
            if (blocks[i].height > 1){
                classSize += "grid-item--height"+blocks[i].height; 
            }
            if (blocks[i].width > 1){
                classSize += " grid-item--width"+blocks[i].width;
            }
            concatContent += "<div class='grid-item "+classSize+"'></div>";
        }
        return concatContent;
    }


}
module.exports = managerVue;