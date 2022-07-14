window.addEventListener('DOMContentLoaded', function () {
    function $(el) {
        const elem = document.querySelector(`${el}`);
        return elem;
    }

    //Btn
    const rollBtn = $('.rollBtn'),
        renameBtn = $('.renameBtn'),
        closeBtn = $('.closeBtn'),
        saveRenameBtn = $('.saveRename');

    //Player Variables
    const firstPlayerDice = $('.firstDice'),
        secondPlayerDice = $('.secondDice'),
        firstPlayerName = $('.firstPlayerName'),
        secondPlayerName = $('.secondPlayerName'),
        firstPlayerNameForScore = $('.firstPlayerNameForScore'),
        secondPlayerNameForScore = $('.secondPlayerNameForScore'),
        firstPlayerRename = $('#firstPlayerName'),
        secondPlayerRename = $('#secondPlayerName'),
        firstPlayerScore = $('.firstPlayerScore'),
        secondPlayerScore = $('.secondPlayerScore');

    //Others
    const headerDesc = $('h1'),
        container = $('.container'),
        optionsBlock = $('.optionsBlock'),
        renameBlock = $('.renameBlock');

    //Btn Event
    rollBtn.addEventListener('click', function () {

        let firstPlayerRandomValue = Math.ceil(Math.random() * 6);
        let secondPlayerRandomValue = Math.ceil(Math.random() * 6);

        firstPlayerDice.src = "/images/dice-roll.gif";
        secondPlayerDice.src = "/images/dice-roll.gif";

        setTimeout(function () {
            firstPlayerDice.src = `/images/${firstPlayerRandomValue}.png`;
            secondPlayerDice.src = `/images/${secondPlayerRandomValue}.png`;

            headerDesc.style.color = 'red';
            headerDesc.style.fontSize = Number(window.outerHeight) / 42 + "px";
            

            if (firstPlayerRandomValue > secondPlayerRandomValue) {
                headerDesc.textContent = `${firstPlayerName.textContent} wins!!!`;
                firstPlayerScore.textContent = Number(firstPlayerScore.textContent) + 1;
            } else if (firstPlayerRandomValue < secondPlayerRandomValue) {
                headerDesc.textContent = `${secondPlayerName.textContent} wins!!!`;
                secondPlayerScore.textContent = Number(secondPlayerScore.textContent) + 1;
            } else {
                headerDesc.textContent = "DRAW!!!"
            }
        }, 1200);

    })

    renameBtn.addEventListener('click', function () {
        container.style.display = "none";
        optionsBlock.style.display = "none";
        renameBlock.style.display = "block";

        firstPlayerRename.value = firstPlayerName.textContent;
        secondPlayerRename.value = secondPlayerName.textContent;
    })

    closeBtn.addEventListener('click', function () {
        container.style.display = "block";
        optionsBlock.style.display = "block";
        renameBlock.style.display = "none";
    })

    firstPlayerRename.addEventListener('keypress', function (e) {
        if (firstPlayerRename.value.length > 8) {
            e.preventDefault();
        }
    })

    secondPlayerRename.addEventListener('keypress', function (e) {
        if (secondPlayerRename.value.length > 8) {
            e.preventDefault();
        }
    })

    saveRenameBtn.addEventListener('click', function () {
        if (firstPlayerRename.value.length >= 3 && firstPlayerRename.value.length <= 8) {
            if (secondPlayerRename.value.length >= 3 && secondPlayerRename.value.length <= 8) {
                firstPlayerName.textContent = firstPlayerRename.value;
                secondPlayerName.textContent = secondPlayerRename.value;

                firstPlayerNameForScore.textContent = firstPlayerRename.value;
                secondPlayerNameForScore.textContent = secondPlayerRename.value;

                firstPlayerScore.textContent = 0;
                secondPlayerScore.textContent = 0;

                firstPlayerDice.src = `/images/black.png`;
                secondPlayerDice.src = `/images/black.png`;

                headerDesc.textContent = "Dice game";
                headerDesc.style.fontSize = '32px';
                headerDesc.style.color = "black";

                container.style.display = "block";
                optionsBlock.style.display = "block";
                renameBlock.style.display = "none";
            }
        }
        else {
            alert("Valid name length from 3 characters to 8!");
        }
    })
})