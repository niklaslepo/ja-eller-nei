var yesClickCount = 0;

function response(answer) {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var text = document.getElementById('response');

    if (answer === 'yes') {
        moveButton(yesButton);
        yesClickCount++;
        scaleButton(yesButton, yesClickCount);

        switch (yesClickCount) {
            case 1:
                text.innerHTML = "Er du helt sikker?";
                break;
            case 2:
                text.innerHTML = "Er du sikker på at du ikke har trykka feil?";
                break;
            case 3:
                text.innerHTML = "Lover du?";
                break;
            default:
                text.innerHTML = "Woohoo!!!";
                yesButton.disabled = true;
                document.getElementById('dancingBear').style.display = 'block';
                break;
        }
    } else {
        moveButton(noButton);
        noButton.style.transform = 'scale(2)';
        text.innerHTML = "Du er slemming duuuuuuuuuuuuu ;(";
    }
}

function moveButton(button) {
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;
    var minX = maxX * 0.1;
    var minY = maxY * 0.1;

    var x = Math.random() * (maxX - minX) + minX;
    var y = Math.random() * (maxY - minY) + minY;

    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

function scaleButton(button, scaleCount) {
    var scale = 1 + 0.5 * scaleCount;
    button.style.transform = 'scale(' + scale + ')';
}
