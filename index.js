const inputBtn = document.getElementById("input-btn")
 let myLeads =[]
  const inputEl = document.getElementById("input")
  const ulEl = document.getElementById("ul-el")
  inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderItems()
})
function renderItems(){
    let listItems = ""
    for(i = 0; i < myLeads.length; i++){
      listItems += `
      <li>
      <a href='${ myLeads[i]}' target = '_blank'>
      ${ myLeads[i]} 
       </a> 
      </li>
      `
    }
    ulEl.innerHTML = listItems
}
