var addToDoButton = document.getElementById('addToDo')
var toDoContainer = document.getElementById('toDoContainer')
var inputField = document.getElementById('inputField')

addToDoButton.onclick = function()
{
    //alert('Vous avez cliqué sur +');

    //Vérifier si l'input n'est pass vide

    if(inputField.value !=  "")
    {
        //Si l'input n'est pas vide 
        var paragraph = document.createElement('p');
    }

    //mettre le contenu de l'input dans paragraph
    paragraph.innerText = inputField.value;

    //stylisé le paragraph
    paragraph.classList.add('paragraphe_style');

    //insérer le paragraph dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph)

    //vidé l'input quand le paragraph est ajouté
    inputField.value = "";


    //barrer le paragraph quand on clique dessus
    paragraph.addEventListener('click', function(){
       paragraph.classList.add('pararaph_click')
    })

    //Supprimer la tâche quand on double clique dessus
    paragraph.addEventListener('dblclick', function(){
       toDoContainer.removeChild(paragraph);
     })
}