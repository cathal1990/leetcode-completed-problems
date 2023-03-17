function subarraySort(array) {
    let res = [-1, -1];
    let min = Inifinty;
    let prevMax = arr[0];

    for (let i = 0; i < array.length; i++) {
        if (arr[i+1] && arr[i] > arr[i+1] && arr[i+1] < min) {
            res[0] = i + 1;
            min = arr[i + 1]
        }

        if (prevMax > arr[i]) res[1] = i
        else prevMax = arr[i]
    }

    for (let i=0; i< arr.length; i++) {
        if (arr[res[0]] < arr[i]) {
            res[0] = i;
            break
        }
    }
    return res
  }