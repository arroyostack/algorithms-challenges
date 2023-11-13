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
    // return sanitize.split( '' ).reduce( ( acc, curr ) => {
    //     if( acc[ curr ] ) {
    //         acc[ curr ]++;
    //     } else {
    //         acc[ curr ] = 1;
    //     }

    //     return acc;

    return breakDown;
};

console.log( stringBreakdown( 'hola que ase' ) );