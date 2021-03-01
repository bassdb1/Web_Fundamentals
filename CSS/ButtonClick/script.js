var isFlipped = false;

// creating a function to use with our HTML page
// element = this is referencing 'this' in HTML parameter, this represnts this current object

function imgSwap(element){    
    console.log(element.src);
    if(isFlipped){
        element.src="Images/IronMan.png";
    }
    else{
        element.src="Images/IronMan_back.png";
    }
    isFlipped =!isFlipped;

   
}
