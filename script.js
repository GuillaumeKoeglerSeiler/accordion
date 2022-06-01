window.onload = () => {
    //on va chercher tous les éléments
    const elements = document.querySelectorAll(".accordeon-element")
    //On récupère l'élément actif
    const firstActive = document.querySelector(".accordeon .active")
    //On cherche la balise p qui se trouve dedans
    let section = firstActive.children[1].querySelector("p")
    //On recupère la hauteur de section
    let sectionHeight = section.offsetHeight + 20
    //On définit la hauteur de accordeon-content
    firstActive.children[1].style.height = sectionHeight+"px"

    for(let element of elements){
        element.addEventListener("click", function(){
            //On récupère l'élement actif
            const active = document.querySelector(".accordeon .active")
            //On lui retire la classe active
            active.classList.remove("active")
            //On réduit sa hauteur
            active.children[1].style.height = 0
            //On met la classe active à l'élement cliqué
            this.classList.add("active")
            //On récupère la hauteur de la balise p
            let section = this.children[1].querySelector("p")
            //On recupère la hauteur de section
            let sectionHeight = section.offsetHeight + 20
            //On définit la hauteur de accordeon-content
            this.children[1].style.height = sectionHeight+"px"
        })
    }
}