// MYSQL Part

function mySQLConnection(host, user, password) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });

    con.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
    });

    return con;
}
//--------------------------------------------------------

// MSSQL PART

function MSSQLConnect(user, password, server, database) {
    var sql = require("mssql");


// config for your database
    var config = {
        user: user,
        password: password,
        server: server,
        database: database
    };



    // config for your database
    var config2 = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDB'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err)
            console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Accident_Information', function (err, recordset) {

            if (err)
                console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
}
//--------------------------------------------------------
