const { suma, resta, multiplicacion, division } = require('./index.js');

function test() {
    let passed = 0;
    let failed = 0;
    const tests = [];

    try { if (suma(2,3) === 5) { passed++; tests.push({name:'Suma básica',status:'?'});} else {failed++; tests.push({name:'Suma básica',status:'?'});} } catch(e){failed++;tests.push({name:'Suma básica',status:'?'});}
    try { if (resta(10,4) === 6) { passed++; tests.push({name:'Resta básica',status:'?'});} else {failed++; tests.push({name:'Resta básica',status:'?'});} } catch(e){failed++;tests.push({name:'Resta básica',status:'?'});}
    try { if (suma(-5,3) === -2) { passed++; tests.push({name:'Suma con negativos',status:'?'});} else {failed++; tests.push({name:'Suma con negativos',status:'?'});} } catch(e){failed++;tests.push({name:'Suma con negativos',status:'?'});}
    try { if (multiplicacion(6,7) === 42) { passed++; tests.push({name:'Multiplicación',status:'?'});} else {failed++; tests.push({name:'Multiplicación',status:'?'});} } catch(e){failed++;tests.push({name:'Multiplicación',status:'?'});}
    try { if (division(20,4) === 5) { passed++; tests.push({name:'División',status:'?'});} else {failed++; tests.push({name:'División',status:'?'});} } catch(e){failed++;tests.push({name:'División',status:'?'});}
    try { division(10,0); failed++; tests.push({name:'División por cero',status:'?'});} catch(e){ if(e.message.includes("No se puede dividir por cero")){passed++;tests.push({name:'División por cero',status:'?'});} else {failed++;tests.push({name:'División por cero',status:'?'});} }

    console.log(tests);
    console.log('Tests pasados:', passed);
    console.log('Tests fallados:', failed);
    if(failed>0){process.exit(1);} else {process.exit(0);}
}

test();
