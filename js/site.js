
apagar = document.querySelectorAll("button[name = apagar]");
apagar.forEach(element => {
    element.addEventListener("click", function(){
        element.parentElement.remove();
    })    
});

adicionar = document.querySelectorAll("button[name = add_carrinho]");
adicionar.forEach(element => {
    pai = element.parentElement;
    
})


