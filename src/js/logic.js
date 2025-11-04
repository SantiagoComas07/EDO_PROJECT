
import {renderChartDoughnut}  from "./charts.js";

export function renderDatas(){

    const K = document.getElementById('K');
    const N = document.getElementById('N');
    const E = document.getElementById('E');
    const D = document.getElementById('D');
    const F = document.getElementById('F');



const submitButton = document.getElementById('submit-button');

if(!submitButton){
    console.error("The send button is not found in the DOM");
    return;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();


    const kValue = document.getElementById('K-variable').value || 2;
    const nValue = document.getElementById('N-variable').value || 2;
    const eValue = document.getElementById('E-variable').value || 2;
    const dValue= document.getElementById('D-variable').value || 2;
    const fValue = document.getElementById('F-variable').value || 2;

  if (!kValue || !nValue || !eValue || !dValue || !fValue) {
        console.error('Algunos inputs no existen en el DOM');
        return;
    }




    K.textContent = kValue;
    N.textContent = nValue;
    E.textContent = eValue;
    D.textContent = dValue;
    F.textContent = fValue;   

    // Exercises Completed and Pending
    let r = (kValue*nValue)/(eValue*dValue*fValue);
    let completed=  formula(r,dValue);
    let pending = 1 - completed;

    renderChartDoughnut(completed,pending);
});

}



function formula(a,b){
    return 1 - Math.exp(-a * b);
}