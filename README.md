# Zimbabwe National ID Validator

A simple JavaScript library to validate Zimbabwe national IDs (e.g., format `12-3456789H23`). This library helps you easily validate Zimbabwean IDs based on specific rules.

## Features

- Validate Zimbabwean national IDs based on number length and check letter.
- Easy to integrate into any website.
- Provides validation results with clear messages.

## Usage

### 1. Download the JavaScript File

Clone this repo or download `zim-id-validator.js` and include it in your HTML file:

```html
<script src="zim-id-validator.js"></script>
```

### 2. Call the Validation Function

In your HTML, create an input field and a button to trigger the validation:

```html
<input type="text" id="idInput" placeholder="Enter your Zimbabwe ID">
<button onclick="checkID()">Validate</button>
<p id="result"></p>
```

Then call the `validateID()` function:

```javascript
function checkID() {
    let inputID = document.getElementById('idInput').value;
    let result = validateID(inputID);  // Call the validation function
    let resultElement = document.getElementById('result');
    resultElement.textContent = result.message;
    resultElement.className = result.valid ? 'valid' : 'invalid';
}
```

## Example

For a full example, check out `example.html` in this repository.

## License

This project is licensed under the MIT License.
