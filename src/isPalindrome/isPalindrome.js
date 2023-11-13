const isPlindrome = ( string ) => {

    let reverse = '';

    for( let character of string ) {
        reverse = character + reverse;
    }

    return string === reverse;
};