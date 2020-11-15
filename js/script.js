(function parentFunction() {
    var userInput = document.querySelector('#user-input');
    var submitBtn = document.querySelector('.input-submit-btn');
    var lastMessage = document.querySelector('.last-message');
    var openLog =  document.querySelector('.log-open');
    var logListWrap = document.querySelector('.log-list-wrapper')
    var logListElement = document.querySelector('.log-list');
    var closeLog = document.querySelector('.log-close');
    var clearLog = document.querySelector('.log-clear');
    var inputVal = userInput.value;


    function acceptInput() {
        var inputVal = userInput.value;
        lastMessage.textContent = "Last Message Added: " + inputVal;

        function logCreate() {
            var newListEl = document.createElement('li');
            var listText = document.createTextNode(inputVal);
            logListElement.appendChild(newListEl);
            newListEl.appendChild(listText);
        }
        logCreate();

        if (inputVal == '') {
            var Msg = document.createElement('p');
            var msgText = document.createTextNode('Input box should not be empty !');
            Msg.appendChild(msgText);
            Msg.setAttribute('class', 'show');
            userInput.parentNode.appendChild(Msg);
        }
        setTimeout(() => {
            userInput.parentNode.removeChild(Msg)
        }, 1500);
    }

    function logOpen (e) {
        e.preventDefault();
        logListWrap.style.visibility = 'visible';
        closeLog.style.visibility = 'visible'
        openLog.style.visibility = 'hidden';
    }

    function logClose (e) {
        var listItems = document.getElementsByTagName('li').length;
        e.preventDefault();
        logListWrap.style.visibility = 'hidden';
        closeLog.style.visibility = 'hidden';
        openLog.style.visibility = 'visible';
    }

    submitBtn.addEventListener('click', acceptInput)
    openLog.addEventListener('click', logOpen);
    closeLog.addEventListener('click', logClose);
}() )