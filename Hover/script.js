// add a 'listener' when we hover over the boxes


// function to 'listen' called 'addShadow' when we 'hover' over the notes, we are going to pass an element from the 'Index.Html' page
function addShadow(element){
    // this is adding the 'class' for the 'element' (we find what classes are available to us by using, console.log(element.classList) ) from the css page called 'shadow', ehich is a class,  so that it will have the parameters, size, color of shadow, etc
    element.classList.add("shadow");
}


// function to remove the shadow from the box
function removeShadow(element){
    element.classList.remove("shadow");
}
