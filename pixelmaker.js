var selectedColor;

let  pixelCanvas = document.createElement('div');
  pixelCanvas.style.width = "650px";
  pixelCanvas.style.height = "650px";
  pixelCanvas.style.margin =  "5% 25%";

for (let i = 0; i < 1849; i++) {
  let pixel = document.createElement('div');
  pixel.style.width = "2%";
  pixel.style.height = "2%";
  pixel.style.border = ".5px solid";
  pixel.style.borderColor = "grey";
  pixel.style.float = "left";
  pixel.addEventListener('click', function(){
    pixel.style.backgroundColor= selectedColor;
    console.log(selectedColor)
  });
    pixelCanvas.appendChild(pixel);
}
 let palette = document.createElement('div');
  palette.style.width= "500px";
  palette.style.height = "200px";
  palette.style.display = "block";
  palette.style.margin = "5% 31%";



// create divs for each color

    let colors = ['red','orange','yellow','green','blue','indigo','violet'];
    function colorPicker (array) {
      for (let k = 0; k < array.length; k++) {
        var colorChoice = document.createElement('div');
        colorChoice.style.width = "30px";
        colorChoice.style.height = "30px";
        colorChoice.border = ".5px solid";
        colorChoice.borderColor = "black";
        colorChoice.style.backgroundColor = array[k];
        colorChoice.style.float = "left";
        colorChoice.style.margin = "0 5px"
        colorChoice.addEventListener('click', function(event){
          selectedColor = event.target.style.backgroundColor;
          console.log(selectedColor)
        })
        palette.appendChild(colorChoice);
      }
    }

    colorPicker(colors);


document.body.append(pixelCanvas);
document.body.append(palette);

// create eventListener for when pixel is clicked
