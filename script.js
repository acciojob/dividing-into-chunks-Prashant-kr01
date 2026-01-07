const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    let result = [];        // Array to store all chunks
    let currentChunk = [];  // Current chunk being built
    let currentSum = 0;     // Sum of current chunk
    
    // Loop through ALL elements (use arr.length, not n)
    for (let i = 0; i < arr.length; i++) {
        // If adding current element would exceed n
        if (currentSum + arr[i] > n) {
            // Save current chunk if it has elements
            if (currentChunk.length > 0) {
                result.push(currentChunk);
            }
            // Start new chunk with current element
            currentChunk = [arr[i]];
            currentSum = arr[i];
        } else {
            // Add to current chunk
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        }
    }
    
    // Don't forget to push the last chunk
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }
    
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
