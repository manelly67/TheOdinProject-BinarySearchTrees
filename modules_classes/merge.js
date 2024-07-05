// function merge that divides an array in two and makes a first comparison and joins them again.
// if each array is previously sorted the result is a sorted array
// combined with the function mergeSort subdivide - sort - and join again

function merge(arr, l, m, r){
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = []; 
    let R = [];

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    /* console.log(L);
    console.log(R); */

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
/* console.log(arr); */
return arr;
}

function mergeSort(arg1,arg2,arg3){
    // arg1 is the array - arg2 is the initial 0 - arg3 is the array.length-1
    let arr=arg1; let l=arg2; let r=arg3;
    if(l>=r){
        return arr;
    }
    let m = l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}


export {mergeSort};
