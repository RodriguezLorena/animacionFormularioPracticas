let formulario = document.getElementsByClassName("formularioInput");

for(let i=0; i< formulario.length; i++){
    formulario[i].addEventListener("keyup", function(){
        if(this.value.length >=1){
            this.nextElementSibling.classList.add("estatica")

        }else{
            this.nextElementSibling.classList.remove("estatica")
        }
    })
}