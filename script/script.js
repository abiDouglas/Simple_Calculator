function checkDigits(input){
    return /^[0-9]+$/.test(input);
}


function addValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;
    let output;
    let text;
    if(!checkDigits(input_a) || !checkDigits(input_b)){
        document.mycalculator.output.value = "input only digits please";
        return;
    }
    input_a = parseInt(input_a);
    input_b= parseInt(input_b);
    output = input_a+input_b;
    text = `${input_a} + ${input_b} = ${output}`;

    document.mycalculator.output.value = text;
}


function mulValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;
    if(!checkDigits(input_a) || !checkDigits(input_b)){
        document.mycalculator.output.value = "input only digits please";
        return;
    }
    let output = input_a*input_b;
    let text = `${input_a} * ${input_b} = ${output}`;
    document.mycalculator.output.value = text;
}

function divValue(){
    let input_a = document.getElementById('input_a').value;
    let input_b = document.getElementById('input_b').value;
    if(!checkDigits(input_a) || !checkDigits(input_b)){
        document.mycalculator.output.value = "input only digits please";
        return;
    }
    let output = input_a/input_b;
    let text = `${input_a} / ${input_b} = ${output}`;

    document.mycalculator.output.value = text;
}
