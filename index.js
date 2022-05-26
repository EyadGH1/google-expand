const inputBtn = document.getElementById("input-btn")
 let myLeads =[]
  const inputEl = document.getElementById("input")
  const ulEl = document.getElementById("ul-el")
  const leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"))
  console.log(leadsFromLoacalStorage)
  let x = Boolean(leadsFromLoacalStorage)
  if(leadsFromLoacalStorage){
  myLeads = leadsFromLoacalStorage
  renderItems()}
  inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderItems()
    console.log(localStorage.getItem("myLeads"))
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
