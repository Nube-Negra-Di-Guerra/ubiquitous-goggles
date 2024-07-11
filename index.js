
const ButtonResult = document.getElementById('ButtonResult');

const InputNumber = document.getElementById('InputNumber')


function giveNumber (){
    const key = Math.floor(Math.random()*10) + 1;

    const NumThink = document.getElementById('NumThink');
    const NumThink2 = document.getElementById('NumThink2');

    if (InputNumber.value == key) {
        document.getElementById('RightAnswer').style.display = 'block'
        document.getElementById('WrongAnswer').style.display = 'none'; // Hide the wrong answer

        NumThink.innerText = key

    } else if (InputNumber.value !== key) {
        document.getElementById('WrongAnswer').style.display = 'block';
        document.getElementById('RightAnswer').style.display = 'none';

        NumThink2.innerText = key
    }
}

// Add event listener for Enter key press on the input field
InputNumber.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // 13 is the Enter key keyCode
        giveNumber();
    }
});
