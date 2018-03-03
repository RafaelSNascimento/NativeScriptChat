// Load module
var mysql = require('mysql');
// var pool      =    mysql.createPool({
// 	connectionLimit : 10000,
// 	host     : 'mysql785.umbler.com',
// 	user     : 'appityo_user',
// 	password : 'tI-cR/+A[89By',
// 	database : 'appityo',
// 	debug    :  false,
// 	multipleStatements:true,
// 	acquireTimeout: 1000000000,
// 	idleTimeoutMillis: 100000000
// });

var pool      =    mysql.createPool({
	connectionLimit : 10000,
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'webschool',
	debug    :  false,
	multipleStatements:true,
	acquireTimeout: 100000
});
pool.on('release', () => console.log('pool => conexão retornada'));
pool.on('error',(er)=>console.log(er));
process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 
process.on('uncaughtException', (er) =>{
	console.log(er);
	process.exit(0);
}); 
module.exports = pool;