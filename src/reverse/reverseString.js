const reverseStringInput = ( string ) => {
    if( string.length < 1 ) {
        return "Invalid input. No characers";
    }
    let reversedString = '';

    for( character of string ) {
        reversedString = character + reversedString;
    }

    return reversedString;
};
console.log( reverseStringInput( '' ) );

//  & O(n) --