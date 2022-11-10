/* chrome.runtime.onInstalled.addListener(()=>{
    console.log('Extension Installed Successfuly')
})

chrome.tabs.onActivated.addListener(async ({tabId})=>{
   
    let [_tab] = await chrome.tabs.query({active:true,currentWindow:true})
    if (_tab.status ==='complete' && /^https:\/\/invendis.americantower.com\/aspx\/DashBoard.aspx/.test(_tab.url)){
      chrome.scripting.executeScript({
        target:{tabId:tabId},
        files:['jquery-3.6.1.min.js']
       })
       .then(()=>{
        console.log('Content Script Injected')
       })
       .catch( error => console.log(error.message)) 
     console.log('Dashboard page')
    
    } 
   
})

 
 */
