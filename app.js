function createGrid (input) {

    var container = document.getElementById('container');
    container.innerHTML = '';

    var containerSize = Math.min(window.innerWidth, window.innerHeight);
    var squareSize = containerSize / input;

    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    for (var i = 0; i < input ** 2; i++) {
        var div = document.createElement('div');
        div.className = 'squares';
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        container.appendChild(div);
    }




}

function hover () {
    const squares = document.getElementsByClassName('squares');

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'red';
    });
}

}

function checkValue (input) {
    
    input = parseInt(input, 10);
    
    if (Number.isInteger(input) && input > 0 && input < 100) {
        return ;
    } else {
        
        alert("wrong");
        updateGrid();
        
    }

}

function updateGrid () {
    input = prompt("Enter: ");
    checkValue(input);
    createGrid(input);
    hover();
}

createGrid(16);
hover();

document.getElementById('btn').addEventListener('click', updateGrid);


   



      
        

    

        

    

        
    


