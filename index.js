const inputBtn = document.getElementById("input-btn")
 let myLeads =[]
  const inputEl = document.getElementById("input")
  const ulEl = document.getElementById("ul-el")
  const leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"))
   const deleteBtn = document.getElementById("delete-btn")
   const delete1Btn = document.getElementById("delete1-btn")
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
delete1Btn.addEventListener("click", function(){
  myLeads.pop()
  render(myLeads)
  console.log("khuuj")
})
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
function a(desc, arr){
  baseString = ` The ${arr,length} ${desc} are `
  for(i = 0; i < arr.length;i++){
    baseString += arr[i] + ","
  }
  return baseString
}
 let sen = a("the best", ["apple" ,"bannana"])
 console.log(sen)
