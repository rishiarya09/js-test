export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  let storage = [];

    let open_brackets = {
        '(': ')'
    };

    let closed_brackets = {
        ')': true
    }

    for (let i = 0; i < inputString.length; i++) {

        let current_value = inputString[i];

        if (open_brackets[current_value]) {
            storage.push(current_value);
        } else if (closed_brackets[current_value]) {
            if (open_brackets[storage.pop()] !== current_value) return false;
        }
    }
    return storage.length === 0;
}