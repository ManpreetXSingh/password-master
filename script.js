// Initialize Variables & Constants
const pass_input = document.getElementById("input_password");
const pass_strength = document.getElementById("pass_strength_progress");

const pass_output = document.getElementById("password_generated");
const pass_length = document.getElementById("input_password_length");

// Generate a new password
function generate_password(length) {
    password = "";
    if (length > 100) {
        return "";
    }
    for (let i = 0; i < length; i++) {
        password = password.concat(String.fromCharCode(Math.random() * (126 - 33) + 33)); // usable characters from 33 to 126 in UTF16
    }
    return password;
}

// Set text in the output area
function new_password() {
    let length = pass_length.value;
    let password = generate_password(length);
    pass_output.innerText = password;
}

// Set strength indicators and strength of the password
function set_strength_indicators() {
    var password = pass_input.value;
    var strength = 0;

    var upper_indicator = document.getElementById("UP_indicator");
    var lower_indicator = document.getElementById("LO_indicator");
    var special_indicator = document.getElementById("SPE_indicator");
    var num_indicator = document.getElementById("NUM_indicator");
    var len_indicator = document.getElementById("LEN_indicator");

    // First set all to default color (red)
    len_indicator.classList.remove("strength_good");
    num_indicator.classList.remove("strength_good");
    special_indicator.classList.remove("strength_good");
    lower_indicator.classList.remove("strength_good");
    upper_indicator.classList.remove("strength_good");

    // Add class to matching cases
    if (password.length >= 8) {
        len_indicator.className += "strength_good";
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        upper_indicator.className += "strength_good";
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
        lower_indicator.className += "strength_good";
        strength += 1;
    }
    if (password.match(/[^A-Za-z0-9]/)) {
        special_indicator.className += "strength_good";
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        num_indicator.className += "strength_good";
        strength += 1;
    }

    // Set progressbar value
    pass_strength.value = strength;
}

function show_length_value() {
    let len_display_box = document.getElementById("pass_len_display");
    len_display_box.innerText = "(" + pass_length.value + ")";
}

pass_input.addEventListener("input", set_strength_indicators);
pass_length.addEventListener("input", show_length_value);
show_length_value();
// NOT USED
// function toggle_visivility(element) {
//     if (element.type === "password") {
//         element.type = "text";
//     } else {
//         element.type = "password";
//     }
// }
