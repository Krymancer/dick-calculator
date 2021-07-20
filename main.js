const img = new Image();
img.src = 'assets/nicedickbro.jpg';

const heightInput = document.getElementById('height');
const weigthInput = document.getElementById('weight');
const button = document.getElementById('submit');

const resultDiv = document.getElementById('result');

function getDickSize(height, weight) {
    return (height / 10) - height / weight;
}

function submit() {
    const height = heightInput.value;
    const weight = weigthInput.value;

    const dickSize = getDickSize(height, weight).toFixed(2);

    const dickString = `Parabens o tamanho ideal do seu pinto é ${dickSize}!`

    resultDiv.innerHTML = '';
    resultDiv.innerHTML += dickString;
    resultDiv.append(img);
}


