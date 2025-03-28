let RandomNum = 0;
let minimum, maximum;
let attempt = 0;
let Check = true;

// Function to generate a random number
document.getElementById("okay").onclick = function () {
    minimum = Number(document.getElementById("min").value);
    maximum = Number(document.getElementById("max").value);

    if (isNaN(minimum) || isNaN(maximum) || minimum >= maximum) {
        document.getElementById("message").textContent = "Enter valid minimum and maximum values.";
        return;
    }

    RandomNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log("Generated Number:", RandomNum);
    
    // Clear previous messages and attempts
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    attempt = 0;
};

// Function to check user input
document.getElementById("submit").onclick = function () {
    let InputNumber = Number(document.getElementById("input").value);

    if (isNaN(InputNumber)) {
        document.getElementById("message").textContent = "Enter a valid number.";
        return;
    }

    if (InputNumber < minimum || InputNumber > maximum) {
        document.getElementById("message").textContent = "Number out of range. Enter a valid number.";
        return;
    }

    attempt++;

    if (InputNumber < RandomNum) {
        document.getElementById("message").textContent = "Number too low.";
    } else if (InputNumber > RandomNum) {
        document.getElementById("message").textContent = "Number too high.";
    } else {
        document.getElementById("message").textContent = "Successfully cracked the number!";
        document.getElementById("attempts").textContent = `Attempts: ${attempt}`;
    }
};
