###Easy Calculator

Introduction

Easy Calculator is a simple, user-friendly web-based calculator built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The interface is designed to be responsive and visually appealing, using Bootstrap for styling and layout.

Features

Basic arithmetic operations: Addition (+), Subtraction (-), Multiplication (×), and Division (/)

Clear button to reset the calculation

Percentage (%) functionality

User-friendly interface with responsive design

Error handling for invalid calculations

Technologies Used

HTML: Structure of the calculator

CSS: Styling and layout with Bootstrap

JavaScript: Logic for handling button clicks and performing calculations

Bootstrap: For responsive design and layout

Font Awesome: Icons for buttons

Installation & Usage

Clone or download the repository:

git clone https://github.com/your-username/easy-calculator.git

Open the index.html file in a web browser.

Click on the calculator buttons to perform operations.

File Structure

Easy-Calculator/
│── index.html   # Main HTML file
│── style.css    # Stylesheet
│── script.js    # JavaScript for functionality
│── README.md    # Project documentation

How It Works

When a button is clicked, its value is added to the display.

Pressing = evaluates the mathematical expression using JavaScript's eval() function.

Pressing C clears the display.

The multiplication (x) button is internally converted to * for calculation.

Known Issues

The calculator currently uses eval(), which can be unsafe. Future improvements may replace this with a safer evaluation method.

The UI can be further enhanced with animations and better error handling.

Future Improvements

Adding support for more advanced operations like square roots and exponents.

Improving error handling for invalid input.

Enhancing UI/UX with animations and a dark mode option.

Adding keyboard support for input.

Implementing a history feature to keep track of previous calculations.

License

This project is open-source and available under the MIT License.

Author

Your NameGitHub | LinkedIn

