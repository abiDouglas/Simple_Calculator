function addValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;
    input_a = parseInt(input_a);
    input_b= parseInt(input_b);
    let output = input_a+input_b;

    let text = `${input_a} + ${input_b} = ${output}`;

    document.mycalculator.output.value = text;
}


function mulValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;

    let output = input_a*input_b;
    let text = `${input_a} * ${input_b} = ${output}`;
    document.mycalculator.output.value = text;
}

function divValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;

    let output = input_a/input_b;
    let text = `${input_a} / ${input_b} = ${output}`;

    document.mycalculator.output.value = text;
}
