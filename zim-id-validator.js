// Zimbabwe National ID Validator Function
function validateID(inputID) {
    let id = inputID.toLowerCase();
    let letters = 'abcdefghjklmnpqrstvwxyz';
    let numbers = '1234567890';
    let letPart = '';

    try {
        if (id.length > 10) {
            // Extract numerical digits from the first part of the ID
            for (let i = 0; i < id.length - 3; i++) {
                if (numbers.includes(id[i])) {
                    letPart += id[i];
                }
            }
            let lt = parseInt(letPart);
            let index = lt % 23;
            let letter = letters[index - 1];

            // Return validation result for Zimbabwean ID
            if (letter === id[id.length - 3]) {
                return { valid: true, message: "This ID is valid ✓" };
            } else {
                return { valid: false, message: "This ID is Invalid ×" };
            }
        } else {
            return { valid: false, message: "Invalid ID length for ID!" };
        }
    } catch (error) {
        return { valid: false, message: "× Invalid format for ID" };
    }
}