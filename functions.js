export function capitalise(inputString) {
  return inputString.toUpperCase();
}

export function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

export function calculator(a, b, operator) {
  switch (operator) {
    case "add":
      // code block to execute if expression === value1
      return a + b;
    case "subtract":
      // code block to execute if expression === value2
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      //Check for invalid operator
      return false;
  }
}

export function caesarCipher(plainText, key) {
  let ciphertext = "";
  for (let i = 0; i < plainText.length; i++) {
    let asciiCode = plainText.charCodeAt(i);
    if (asciiCode >= 97 && asciiCode <= 122) {
      // Apply the Caesar cipher transformation to lowercase letters
      asciiCode = ((asciiCode - 97 + key) % 26) + 97;
    }
    // Check if the character is an uppercase letter
    else if (asciiCode >= 65 && asciiCode <= 90) {
      // Apply the Caesar cipher transformation to uppercase letters
      asciiCode = ((asciiCode - 65 + key) % 26) + 65;
    }

    ciphertext += String.fromCharCode(asciiCode);
  }
  return ciphertext;
}

export function analyseArray(intArray) {
  // Check for array input
  if (!Array.isArray(intArray)) {
    return false;
  }

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  let length = intArray.length;
  let count = 0; // Variable to track the count of integer elements
  let hasNonInteger = false; // Flag to track if any non-integer element is encountered

  intArray.forEach((element) => {
    if (Number.isInteger(element)) {
      count++; // Increment count for each integer element
      sum += element;
      min = Math.min(min, element);
      max = Math.max(max, element);
    } else {
      hasNonInteger = true; // Set flag to true if non-integer element is encountered
    }
  });

  if (hasNonInteger) {
    return false; // Return false if any non-integer element is encountered
  }

  // Calculate average based on count of integer elements
  let average = count > 0 ? sum / count : NaN;

  let result = {
    average: average,
    min: isFinite(min) ? min : undefined, // Check if min is finite
    max: isFinite(max) ? max : undefined, // Check if max is finite
    length: length,
  };

  return result;
}
