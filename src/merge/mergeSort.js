//  & Merge sorted arrays

const mergeSortedArrays = ( arrayOne, arrayTwo ) => {
    if( arrayOne.length < 1 && arrayTwo.length >= 1 ) {
        return arrayTwo;
    }
    if( arrayTwo.length < 1 && arrayOne.length >= 1 ) {
        return arrayOne;
    }

    if( arrayOne.length < 1 && arrayTwo.length < 1 ) {
        return "No numbers to evaluate.";
    }


    let result = [];
    let i = 0;
    let j = 0;

    while( i < arrayOne.length && j < arrayTwo.length ) {
        if( arrayTwo[ j ] >= arrayOne[ i ] ) {
            result.push( arrayOne[ i ] );
            i++;
        } else {
            result.push( arrayTwo[ j ] );
            j++;
        }
    }

    while( i < arrayOne.length ) {
        result.push( arrayOne[ i ] );
        i++;
    }

    while( j < arrayTwo.length ) {
        result.push( arrayOne[ i ] );
        j++;
    }

    return result;
};

console.log( mergeSortedArrays( [ 1, 4, 7, 9 ], [ 2, 5, 6 ] ) );