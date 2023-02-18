let serial = 0;

//Triangle
document.getElementById("triangleCalculation").addEventListener('click', function(){
    serial +=1;
    const triangleName = document.getElementById("triangle-title").innerText;
    
    const triangleBData = document.getElementById("triangle-b-input").value;
    const triangleHdata = document.getElementById("triangle-h-input").value;
    
    const triangleResult = (0.5 * parseInt(triangleBData) * parseInt(triangleHdata)) + 'cm' + '\xB2';

    if((triangleBData && triangleHdata) == ""){
        alert("Please Enter Both Input field with a positive number");
    }  
    else{
        displayData(triangleName,triangleResult);
    } 
        
});


//Rectangle
document.getElementById("rectangle-calculation").addEventListener('click', function(){
    serial +=1;
    const rectangleName = document.getElementById("rectangle-title").innerText;
    
    const rectangleWData = document.getElementById("rectangle-w-input").value;
    const rectangleLData = document.getElementById("rectangle-l-input").value;
    
    const rectangleResult = (parseInt(rectangleWData) * parseInt(rectangleLData)) + 'cm' + '\xB2';

    if((rectangleWData && rectangleLData) == ""){
        alert("Please Enter Both Input field with a positive number");
    }  
    else{
        displayData(rectangleName,rectangleResult);
    } 
        
});

//Parallelogram
document.getElementById("parallelogram-calculation").addEventListener("click", function (){
    serial +=1;   
    const parallelogramTitle =  document.getElementById("parallelogram-title").innerText;
    const parallelogramBData = document.getElementById("parallelogram-b").innerText;
    const parallelogramHData = document.getElementById("parallelogram-h").innerText;    
    
    const parallelogramResult = parseInt(parallelogramBData) * parseInt(parallelogramHData);
    
    displayData(parallelogramTitle, parallelogramResult);    
});


//Rhombus
document.getElementById("rhombus-calculation").addEventListener("click", function (){
    serial +=1;   
    const rhombusTitle =  document.getElementById("rhombus-title").innerText;
    const parallelogramD1Data = document.getElementById("rhombus-d1").innerText;
    const parallelogramD2Data = document.getElementById("rhombus-d2").innerText;    
    
    const rhombusResult = 0.5 * (parseInt(parallelogramD1Data) * parseInt(parallelogramD2Data));
    
    displayData(rhombusTitle, rhombusResult);    
});


//Pentagon
document.getElementById("pentagon-calculation").addEventListener("click", function (){
    serial +=1;   
    const pentagonTitle =  document.getElementById("pentagon-title").innerText;
    const pentagonPData = document.getElementById("pentagon-p").innerText;
    const pentagonBData = document.getElementById("pentagon-b").innerText;    
    
    const pentagonResult = 0.5 * (parseInt(pentagonPData) * parseInt(pentagonBData));
    
    displayData(pentagonTitle, pentagonResult);    
});


//Ellipse
document.getElementById("ellipse-calculation").addEventListener("click", function (){
    serial +=1;   
    const ellipseTitle =  document.getElementById("ellipse-title").innerText;
    const ellipseAData = document.getElementById("ellipse-a").innerText;
    const ellipseBData = document.getElementById("ellipse-b").innerText;    
    
    const ellipseResult = Math.PI * (parseInt(ellipseAData) * parseInt(ellipseBData));
    
    displayData(ellipseTitle, ellipseResult);    
});



// Common Function to display data
function displayData(nameOfArea, resultOfArea, reverseResult){       
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfArea}</td>
    <td>${resultOfArea}</td>
    <td>${reverseResult}</td>
    `;
    container.appendChild(tr);
}