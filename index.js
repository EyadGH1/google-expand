const inputBtn = document.getElementById("input-btn")
 let myLeads =[]
  const inputEl = document.getElementById("input")
  const ulEl = document.getElementById("ul-el")
  const leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"))
   const deleteBtn = document.getElementById("delete-btn")
   function render(leads){
    let listItems = ""
    for(i = 0; i < leads.length; i++){
      listItems += `
      <li>
      <a href='${ leads[i]}' target = '_blank'>
      ${ myLeads[i]} 
       </a> 
      </li>
      `
    }
    ulEl.innerHTML = listItems
}
const tabBtnEL = document.getElementById("tabBtn")
tabBtnEL.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
 });
}
)
   deleteBtn.addEventListener("dblclick", function() {
     localStorage.clear()
     myLeads = []
     render(myLeads)
   });
  console.log(leadsFromLoacalStorage)
  let x = Boolean(leadsFromLoacalStorage)
  if(leadsFromLoacalStorage){
  myLeads = leadsFromLoacalStorage
  render(myLeads)}
  inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})
