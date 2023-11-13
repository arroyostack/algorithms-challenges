const stringBreakdown = ( string ) => {
    const breakDown = {};
    const sanitize = string.toLowerCase();

    for( let character of string ) {
        if( breakDown[ character ] ) {
            breakDown[ character ]++;
        } else {
            breakDown[ character ] = 1;
        }
    }

    // Alternative approach with 'reduce'.

    return breakDown;
};

console.log( stringBreakdown( 'hola que ase' ) );