let array = []; // Initialize an empty array for storing values
let currentBarWidth = 10; // Initial width of bars
let originalWidth = 10; // Original width of bars

// Function to randomly arrange the array
function randomizeArray() {
  array = []; // Clear the existing array
  for (let i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 100) + 1); // Generate random numbers (change 100 to adjust the range)
  }
  displayArray(); // Display the updated array
}

// Function to display the array as bars and values
function displayArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';

  array.forEach(value => {
    const arrayElement = document.createElement('div');
    arrayElement.classList.add('array-element');
    arrayElement.style.height = `${value * 3}px`;
    arrayContainer.appendChild(arrayElement);
  });

  displayArrayValues(); // Display the array values
}

// Function to display the array values at the bottom
function displayArrayValues() {
  const valueContainer = document.getElementById('valueContainer');
  valueContainer.innerHTML = '';

  array.forEach(value => {
    const valueDiv = document.createElement('div');
    valueDiv.textContent = value;
    valueDiv.style.width = `${array.length * 20}px`; 
    valueContainer.appendChild(valueDiv);
  });
}

// Sorting Algorithms

// Bubble Sort algorithm
function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swaping logic
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  displayArray(); // Display the sorted array
}

// Insertion Sort algorithm
function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  displayArray(); // Display the sorted array
}

// Selection Sort algorithm
function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  displayArray(); // Display the sorted array
}

// Quick Sort algorithm
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  displayArray(); // Display the sorted array
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;
}




// Merge Sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// Function to perform Merge Sort on array and update the original array
function performMergeSort() {
  array = mergeSort(array);
  displayArray(); // Display the sorted array
}

// Shell Sort algorithm
function shellSort() {
  let gap = Math.floor(array.length / 2);
  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  displayArray(); // Display the sorted array
}


// Function to change the size of the array
function changeArraySize() {
  const arrayElements = document.querySelectorAll('.array-element');

  if (currentBarWidth === originalWidth) {
    currentBarWidth /= 2; // Shrink bar width by half
  } else {
    currentBarWidth = originalWidth; // Set back to original width
  }

  arrayElements.forEach(element => {
    element.style.width = `${currentBarWidth}px`; // Apply the new width to each bar
  });
}