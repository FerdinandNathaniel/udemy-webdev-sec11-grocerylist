/** Set-up initial variables **/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var grocerylist = document.getElementById("grocerylist");

/**
 * Get length of user input String.
 * 
 * @returns {int}
 */
function inputLength(){
    return input.value.length;
}

/**
 * Get String representation of user input
 * 
 * @returns {String}
 */
function inputString(){
    return String(input.value);
}

/**
 * Adds grocery item to existing grocerylist
 */
function addGroceryItem(){
    grocerylist.insertAdjacentHTML("beforeend", "<li>" + inputString() + "</li>");
    grocerylist.insertAdjacentHTML("beforeend", "<button class=\"delete-button\">Delete item</button>");
    grocerylist.children[grocerylist.children.length-1].addEventListener("click", deleteGroceryItem);
    input.value = "";
}

/**
 * Adds element to list if there's a non-zero input from user
 */
function addListAfterClick(){
    if(inputLength() > 0){
        addGroceryItem();
    }
}

/**
 * Adds element to list if enter-key (keycode === 13) is pressed
 * 
 * @param {Event} e 
 */
function addListAfterKeypress(e){
    if(inputLength() > 0 && e.keyCode === 13){
        addGroceryItem();
    }
}

/**
 * Toggles class 'done' (creating a line through text object) for event.target
 * 
 * @param {Event} e 
 */
function toggleGroceryItem(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("done");
    }
}

/**
 * Deletes e.target and its previous sibling
 * 
 * @param {Event} e 
 */
function deleteGroceryItem(e){
    if(e.target.tagName === 'BUTTON' && e.target.classList.contains("delete-button")){
        e.target.parentNode.removeChild(e.target.previousSibling);
        e.target.parentNode.removeChild(e.target);
    }
}

/**
 * Adds listeners to <button id="enter"> button
 */
button.addEventListener("click", addListAfterClick);

/**
 * Adds listeners to <input id="userinput"> input
 */
input.addEventListener("keypress", addListAfterKeypress);

/**
 * Adds listeners to <ul id="grocerylist"> list
 */
grocerylist.addEventListener("click", toggleGroceryItem);