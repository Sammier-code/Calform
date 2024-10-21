function showFormula(title, formula, variables) {
    document.getElementById("formula-title").innerText = title;
    document.getElementById("formula-output").innerText = formula;

    let inputs = "";
    variables.forEach(variable => {
        inputs += `<label for="${variable}">${variable}: </label><input type="number" id="${variable}" name="${variable}" required><br>`;
    });

    document.getElementById("formula-inputs").innerHTML = inputs;
    document.getElementById("result-output").innerText = "";
}

function calculate() {
    const title = document.getElementById("formula-title").innerText;
    let result;

    const getValue = (id) => parseFloat(document.getElementById(id).value);

    switch (title) {
        case 'Difference of Squares':
            result = (getValue('a') - getValue('b')) * (getValue('a') + getValue('b'));
            break;
        case 'Square of a Binomial (Sum)':
            result = Math.pow(getValue('a') + getValue('b'), 2);
            break;
        case 'Sum of Squares':
            result = (Math.pow(getValue('a'), 2) + Math.pow(getValue('b'), 2));
            break;
        case 'Square of a Binomial (Difference)':
            result = Math.pow(getValue('a') - getValue('b'), 2);
            break;
        case 'Square of a Trinomial (Sum)':
            result = Math.pow(getValue('a'), 2) + Math.pow(getValue('b'), 2) + Math.pow(getValue('c'), 2)
                + 2 * getValue('a') * getValue('b')
                + 2 * getValue('b') * getValue('c')
                + 2 * getValue('c') * getValue('a');
            break;
        case 'Square of a Trinomial (Mixed Signs)':
            result = Math.pow(getValue('a'), 2) + Math.pow(getValue('b'), 2) + Math.pow(getValue('c'), 2)
                - 2 * getValue('a') * getValue('b')
                + 2 * getValue('b') * getValue('c')
                - 2 * getValue('c') * getValue('a');
            break;
        case 'Cube of a Binomial (Sum)':
            result = Math.pow(getValue('a'), 3) + 3 * Math.pow(getValue('a'), 2) * getValue('b')
                + 3 * getValue('a') * Math.pow(getValue('b'), 2)
                + Math.pow(getValue('b'), 3);
            break;
        case 'Alternate Cube of a Binomial (Sum)':
            result = Math.pow(getValue('a'), 3) + Math.pow(getValue('b'), 3)
                + 3 * getValue('a') * getValue('b') * (getValue('a') + getValue('b'));
            break;
        case 'Cube of a Binomial (Difference)':
            result = Math.pow(getValue('a'), 3) - 3 * Math.pow(getValue('a'), 2) * getValue('b')
                + 3 * getValue('a') * Math.pow(getValue('b'), 2)
                - Math.pow(getValue('b'), 3);
            break;
        case 'Alternate Cube of a Binomial (Difference)':
            result = Math.pow(getValue('a'), 3) - Math.pow(getValue('b'), 3)
                - 3 * getValue('a') * getValue('b') * (getValue('a') - getValue('b'));
            break;
        case 'Difference of Cubes':
            result = (getValue('a') - getValue('b')) * (Math.pow(getValue('a'), 2) + getValue('a') * getValue('b') + Math.pow(getValue('b'), 2));
            break;
        case 'Sum of Cubes':
            result = (getValue('a') + getValue('b')) * (Math.pow(getValue('a'), 2) - getValue('a') * getValue('b') + Math.pow(getValue('b'), 2));
            break;
        case 'Fourth Power of a Binomial (Sum)':
            result = Math.pow(getValue('a'), 4) + 4 * Math.pow(getValue('a'), 3) * getValue('b')
                + 6 * Math.pow(getValue('a'), 2) * Math.pow(getValue('b'), 2)
                + 4 * getValue('a') * Math.pow(getValue('b'), 3)
                + Math.pow(getValue('b'), 4);
            break;
        case 'Fourth Power of a Binomial (Difference)':
            result = Math.pow(getValue('a'), 4) - 4 * Math.pow(getValue('a'), 3) * getValue('b')
                + 6 * Math.pow(getValue('a'), 2) * Math.pow(getValue('b'), 2)
                - 4 * getValue('a') * Math.pow(getValue('b'), 3)
                + Math.pow(getValue('b'), 4);
            break;
        case 'Difference of Fourth Powers':
            result = (getValue('a') - getValue('b')) * (getValue('a') + getValue('b')) * (Math.pow(getValue('a'), 2) + Math.pow(getValue('b'), 2));
            break;
        case 'Difference of Fifth Powers':
            result = (getValue('a') - getValue('b')) * (Math.pow(getValue('a'), 4) + Math.pow(getValue('a'), 3) * getValue('b')
                + Math.pow(getValue('a'), 2) * Math.pow(getValue('b'), 2)
                + getValue('a') * Math.pow(getValue('b'), 3) + Math.pow(getValue('b'), 4));
            break;
        case 'Square of a Polynomial (Multiple Variables, Sum)':
            const vars = document.querySelectorAll("#formula-inputs input");
            result = 0;
            let sum = 0;
            vars.forEach(input => {
                const value = parseFloat(input.value);
                sum += value;
                result += Math.pow(value, 2);
            });
            result += 2 * sum;
            break;
        case 'Square of a Trinomial (x, y, z)':
            result = Math.pow(getValue('x'), 2) + Math.pow(getValue('y'), 2) + Math.pow(getValue('z'), 2)
                + 2 * getValue('x') * getValue('y')
                + 2 * getValue('y') * getValue('z')
                + 2 * getValue('z') * getValue('x');
            break;
        case 'Square of a Trinomial (x, y, -z)':
            result = Math.pow(getValue('x'), 2) + Math.pow(getValue('y'), 2) + Math.pow(getValue('z'), 2)
                + 2 * getValue('x') * getValue('y')
                - 2 * getValue('y') * getValue('z')
                - 2 * getValue('z') * getValue('x');
            break;
        case 'Square of a Trinomial (-x, y, z)':
            result = Math.pow(getValue('x'), 2) + Math.pow(getValue('y'), 2) + Math.pow(getValue('z'), 2)
                - 2 * getValue('x') * getValue('y')
                - 2 * getValue('y') * getValue('z')
                + 2 * getValue('z') * getValue('x');
            break;
        case 'Square of a Trinomial (x, -y, -z)':
            result = Math.pow(getValue('x'), 2) + Math.pow(getValue('y'), 2) + Math.pow(getValue('z'), 2)
                - 2 * getValue('x') * getValue('y')
                + 2 * getValue('y') * getValue('z')
                - 2 * getValue('z') * getValue('x');
            break;
        case 'Sum of Cubes (Three Variables)':
            result = Math.pow(getValue('x'), 3) + Math.pow(getValue('y'), 3) + Math.pow(getValue('z'), 3)
                - 3 * getValue('x') * getValue('y') * getValue('z');
            break;
        case 'Sum of Squares of Two Variables':
            result = 0.5 * (Math.pow(getValue('x') + getValue('y'), 2) + Math.pow(getValue('x') - getValue('y'), 2));
            break;
        case 'Product of a Trinomial':
            result = Math.pow(getValue('x'), 3) + (getValue('a') + getValue('b') + getValue('c')) * Math.pow(getValue('x'), 2)
                + (getValue('a') * getValue('b') + getValue('b') * getValue('c') + getValue('c') * getValue('a')) * getValue('x')
                + getValue('a') * getValue('b') * getValue('c');
            break;
        case 'Sum of Cubes (Two Variables)':
            result = (getValue('x') + getValue('y')) * (Math.pow(getValue('x'), 2) - getValue('x') * getValue('y') + Math.pow(getValue('y'), 2));
            break;
        case 'Difference of Cubes (Two Variables)':
            result = (getValue('x') - getValue('y')) * (Math.pow(getValue('x'), 2) + getValue('x') * getValue('y') + Math.pow(getValue('y'), 2));
            break;
        case 'Expression with Three Squares and Cross Products':
            result = 0.5 * (Math.pow(getValue('x') - getValue('y'), 2) 
                + Math.pow(getValue('y') - getValue('z'), 2) 
                + Math.pow(getValue('z') - getValue('x'), 2));
            break;
        default:
            result = "Formula not available.";
    }

    document.getElementById("result-output").innerText = `Result: ${result}`;
}
