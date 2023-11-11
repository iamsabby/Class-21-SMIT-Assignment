// chapter 42 to 48

// question 1

// var clickButton = document.getElementById('clickButton');
// clickButton.addEventListener('click', function() {
//     alert('Button Clicked!');
// });

// question 2

// function showMessage(message) {
//     alert(message);
// }

// question 3

// function deleteRow(button) {
    // Get the row to be deleted
    // var row = button.parentNode.parentNode;

    // Remove the row
    // row.parentNode.removeChild(row);
// }

// question 4

// var originalImage = "first_image.jpg";  // Path to the original image
// var newImage = "second_image.jpg";      // Path to the image on mouseover

// function changeImage() {
    // Change the image on mouseover
    // document.getElementById("image").src = newImage;
// }

// function resetImage() {
    // Reset the image on mouseout
    // document.getElementById("image").src = originalImage;
// }

// question 5

var counterValue = 0;  // Initial counter value

function updateCounterDisplay() {
    // Update the counter display
    document.getElementById("counter").innerText = counterValue;
}

function increaseCounter() {
    // Increase the counter value
    counterValue++;
    updateCounterDisplay();
}

function decreaseCounter() {
    // Decrease the counter value, but not below 0
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
}