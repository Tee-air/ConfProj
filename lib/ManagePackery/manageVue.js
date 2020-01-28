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

        });
    };

    initVue(idVue){
        var idDoc = 'vue_' + idVue;
        var db = new PouchDB('http://127.0.0.1:5984/test');
        db.get(idDoc).then(function (doc) {
            console.log(doc);

            return doc;
        });
    }


}
module.exports = managerVue;