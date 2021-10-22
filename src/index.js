//iMPORTANDO LOS MODULOS  

const app = require('./app');

app.set('port', process.env.PORT || 4000);


/**
 * función que ejecutará el programa (Inicia)
 */
async function main () {
	await app.listen(app.get('port')); //Asincrono método.
    console.log(`Server on port ${app.get('port')}`);
}

main();