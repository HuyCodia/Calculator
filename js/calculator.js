var container;

window.addEventListener("load", function() {
  container = document.getElementById('resultArea');
}, {once: true});

function appendOperation(operation) {
    if (container.innerHTML == 0) {
        document.getElementById('resultArea').innerHTML = operation;
    } else {
        document.getElementById('resultArea').innerHTML += operation;
    }
}

function calculateResult() {
    let result = eval(container.innerHTML);  
    container.innerHTML = result;
}

function deleteLast() {
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
        if (container.innerHTML.length == 0) {
            container.innerHTML = 0;
        }         
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
        if (container.innerHTML.length == 0) {
            container.innerHTML = 0;
        } 
    }
}

function resetInput() {
    container.innerHTML = 0;
}
