const containerDiv = document.querySelector('#container');

generateGrid(20,'#6a7eba');

const Button = document.querySelector("button");
Button.addEventListener('click', (event)=> {
    while(containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    let size = window.prompt("Enter a number smaller than 100","16");
    while (size<1 || size>100) {
        size =  window.prompt("Enter a number smaller than 100","16");
    }
    
    generateGrid(size,'#6a7eba');
});

function generateGrid(size,color) {

    for (i=0;i<size;i++) {

        const Div = document.createElement('div');
        Div.setAttribute('class', 'box1');

        for (j=0;j<size;j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'box2');
            div.addEventListener('mouseover', (event) => {
                div.style.backgroundColor = color;
            });
            Div.appendChild(div);
        };
  
    containerDiv.appendChild(Div);
    };
};





