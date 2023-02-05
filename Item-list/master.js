// Catch Element 
var form = document.querySelector('#addForm')
var itmesList = document.querySelector("#items")
var filter = document.getElementById("filter")
// Listen To Submit NewItem
form.addEventListener("submit",addItem)
itmesList.addEventListener("click",removeItmes)
filter.addEventListener("keyup",filterItems)
// Add New Item
function addItem(e){
    // Prevent Referch To Page
    e.preventDefault()
    // Catch New Content
    var newItem = document.querySelector("#newItem").value;
    
    // Create newItem li
    var li = document.createElement('li')
    // Add class to li
    li.classList.add('list-group-item')
    // Add content To li 
    li.appendChild(document.createTextNode(newItem))
    // Create Del Button
    var delBtn = document.createElement("button")
    // Add Class To Del Button
    delBtn.className = "btn btn-danger btn-sm float-right delete"
    // Add Text to delBtn
    delBtn.appendChild(document.createTextNode('X'))
    // Add delBtn To li
    li.appendChild(delBtn)
    // Add li To Items List
    itmesList.appendChild(li)
    // Clear input Content
    e.target.firstElementChild.value = "";
}
// Remove Item 
function removeItmes(e){
    if(e.target.classList.contains("delete")) 
        if(confirm("Your Go To Delete item ? "))
            e.target.parentElement.remove();
}
// Filter Items 
function filterItems(e){
    
    // Take Fliter Word
    var filterWord = e.target.value.toLowerCase();
    
    // Make Fliter List 
    var filterList = [...itmesList.children]
    filterList.forEach((item)=>{
        var itemName = item.firstChild.textContent.trim()
        if(itemName.toLowerCase().indexOf(filterWord) != -1 ){
            item.style.display = 'block'
        
        }else{
            item.style.display = "none"
        }
    })
}