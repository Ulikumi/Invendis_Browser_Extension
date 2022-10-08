insertLink()
let SESSIONID = null
let SitesData = [];
const hostname = 'https://invendis.americantower.com/ATCghanaAPI/';
 import postData from './data';
 import './app.css'
 let siteData = require('./site_data')
let _sort = require('array-sort');
const { SiteID } = require('./data');

function tableToJSON() {
  SitesData = []
  return Array.from(document.querySelectorAll(".gridRowStyle"))
    .concat(Array.from(document.querySelectorAll(".gridAlternateRow")))
    .map( list => {
      let PowerIconToShow = null;
     if (list.children[24].children[0].alt.includes('Alarm') &&  
         list.children[22].children[0].alt.includes('Alarm') &&
         list.children[34].children[0].alt.includes('Normal')) PowerIconToShow = 'SOB'

      else if ( list.children[24].children[0].alt.includes('Alarm') &&  
                list.children[34].children[0].alt.includes('Alarm') &&
                list.children[22].children[0].alt.includes('Normal')) PowerIconToShow = 'DG'

      else if ( list.children[24].children[0].alt.includes('Normal') &&  
                list.children[34].children[0].alt.includes('Normal') &&
                list.children[22].children[0].alt.includes('Normal')) PowerIconToShow = 'Mains'
       else PowerIconToShow = '!!'
      
      return {
        'TimeStamp': list.children[0].innerText.trim(),
        'Region':list.children[2].innerText.trim(),
        'SiteID': list.children[3].children[0].value,
        'SiteName': list.children[4].children[0].value.trim(),
        'SysVolt': parseFloat(list.children[11].innerText.trim()),
        'DCVolt': parseFloat(list.children[16].innerText.trim()),
        'ShelterTemp':parseFloat(list.children[10].innerText.trim()),
        'SystemCurrent':parseFloat(list.children[12].innerText.trim()),
        'LiBAlarmed':   list.children[20].children[0].alt,
        'PowerIconToShow':PowerIconToShow,
        'ID':list.children[3].children[0].getAttribute('onclick').substr(54,34),
        'DoorAlarm':list.children[82]?list.children[82].children[0].alt:'No Data',
        'FE': siteData.find( _list => _list.Site_ID === +list.children[3].children[0].value.trim()).TL,
        'MTN_Name': siteData.find( _list => _list.Site_ID === +list.children[3].children[0].value.trim()).MTN_Name,
        'VDF_Name': siteData.find( _list => _list.Site_ID === +list.children[3].children[0].value.trim()).VDF_Name
      };
    })
}



async function start(){
  
if(SESSIONID == null){
  await fetch('SiteViewDashboard.aspx').then(resp => resp.text()).
  then(data => {
      SESSIONID = data.substring(27792,27830).split("'")[1];
  })
}
  

    const dashboard = document.querySelector('.usergridStyle')
    
    if(dashboard){
        let data = tableToJSON()
        let libData =null
        await fetch(hostname+'api/SiteViewDashboard/GetDashboardData', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(postData) 
        }).then((response) => response.json())
        .then( resp => libData = resp[0].lstSiteDetails)

let augmentedData = data.map( site => {
  const _d = libData.find(({SiteCode}) => site.SiteID === SiteCode)
  if(_d !== undefined) return {...site,'AverageLiBVoltage':_d.Voltage,
  'EncryptedSiteID':_d.EncryptedSiteID,
  'DeviceTypeID':_d.DeviceTypeID,
  'LastUpdatedDateTime':_d.LastUpdatedDateTime
}
  return {...site,'AverageLiBVoltage':0,
  'EncryptedSiteID':'',
  'DeviceTypeID':'',
  'LastUpdatedDateTime':''}
})
        dashboard.remove()
        let tableTemplate = `
<table id="table_id" >
<thead>
<tr>
<th data-reverse=true data-sort='Time'>Time</th>
<th data-reverse=true data-sort='Region'>Region</th>
<th data-reverse=true  data-sort='SiteID'>Site ID</th>
<th data-reverse=true data-sort='SiteName'>Site Name</th>
<th data-reverse=true class='selected' data-sort='DCVolt'>DCV (V)</th>
<th data-reverse=true  data-sort='SysVolt'>System (V)</th>
<th data-reverse=true data-sort='AverageLiBVoltage'>LiB (V)</th>
<th>Pwr Source</th>
<th data-reverse=true data-sort='ShelterTemp'>Shelter Temp</th>
<th data-reverse=true data-sort='LiBAlarmed'>LiB Alarm?</th>
<th data-reverse=true data-sort='DoorAlarm'>DCDO  Alarm?</th>
<th data-reverse=true data-sort='FE'>FE</th>
<th data-reverse=true data-sort='MTN_Name'>MTN|Colo</th>
<th data-reverse=true data-sort='VDF_Name'>VDF|Colo</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
`;
const tableId = '#SiteUpdatingStatus';

$(tableTemplate).insertAfter(tableId);
document.querySelector('#table_id > tbody').innerHTML = ''

insertData(_sort(augmentedData,'DCVolt', {reverse: false}))
document.querySelectorAll('#table_id th').forEach(element => {
    element.addEventListener('click', e => {
      Array.from(e.target.parentNode.children).forEach( node =>{
        if (node.classList.contains('selected'))node.classList.remove('selected')
      })
      e.target.classList.add('selected')
    let sortBy = e.target.getAttribute('data-sort');
    let order = null;
    if(e.target.getAttribute('data-reverse') === 'true') e.target.setAttribute('data-reverse','false') 
    else
    if(e.target.getAttribute('data-reverse') === 'false') e.target.setAttribute('data-reverse','true') 
    order = e.target.getAttribute('data-reverse');
    sortByField({augmentedData,sortBy,order})
     })
    });
    data = null // free memory
    tableTemplate = null
   }
}

function sortByField(arg){
    const _order =(arg.order === 'true')?true:false;
insertData(_sort(arg.augmentedData,arg.sortBy, {reverse: _order}));
}

function insertData(__data,sortAction = false){
    const UI = document.querySelectorAll('#table_id > tbody')
    UI?UI.innerHTML= '':''
  let _tr  = '';
  let iconHTML = ''
  __data.forEach( ({TimeStamp,Region,SiteID,SiteName,ShelterTemp,SysVolt,DCVolt,PowerIconToShow,
    LiBAlarmed,DoorAlarm,ID,AverageLiBVoltage,EncryptedSiteID,DeviceTypeID,
    FE,MTN_Name,VDF_Name,LastUpdatedDateTime}) =>{
if(PowerIconToShow === 'DG') iconHTML = `<span class="material-symbols-sharp dg">bolt</span>`
  else if(PowerIconToShow === 'SOB') iconHTML = `<span class="material-symbols-sharp sob">battery_charging_90</span>`
  else if(PowerIconToShow === 'Mains') iconHTML = `<span class="material-symbols-sharp mains">power_input</span>`
else iconHTML = '!!'
  _tr = _tr + `<tr>
  <td>${TimeStamp}</td>
  <td>${Region}</td>
  <td data-id='${ID}'>${SiteID}</td>
  <td> ${SiteName}</td>
  <td>${DCVolt}</td>
  <td>${SysVolt}</td>
  <td data-id='${EncryptedSiteID}${SESSIONID}|${DeviceTypeID}|${LastUpdatedDateTime}'>${AverageLiBVoltage}</td>
  <td>${iconHTML}</td> 
  <td> ${ShelterTemp}</td>
  <td>${LiBAlarmed}</td>
  <td>${DoorAlarm}</td>
  <td> ${FE}</td>
  <td>${MTN_Name}</td>
  <td>${VDF_Name}</td>
  </tr>`
  })
  document.querySelector('#table_id > tbody').innerHTML = _tr;
  document.querySelectorAll('#table_id tbody tr:nth-child(odd)').forEach(node => {
    node.style = 'background-color:#f1efe9;'
  })
  Array.from(document.querySelectorAll('#table_id tbody tr td:nth-child(3)')).forEach(td =>{
    td.addEventListener('click', e =>{
    const id = e.target.getAttribute('data-id')
    window.open(`DetailedDashBoard.aspx?siteid=${id}`,'_blank','location=0;menubar=1;')
    })
  })

  Array.from(document.querySelectorAll('#table_id tbody tr td:nth-child(7)')).forEach(td =>{
    td.addEventListener('click', e =>{
    const id = e.target.getAttribute('data-id')
    window.open(`BatteryDetailedDashboard.aspx?siteid=${id}`,'_blank','location=0;menubar=1;')
    console.log(id);
    })
  })
 _tr = null
}

function monitor(){
    console.log('Parsing Table .....')
    start()
    setTimeout(monitor, 7000);
}

function insertLink(){

  ['https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0',
  
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0',
  
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,500,0,0'
  
  ].forEach(_href => {
      var link = document.createElement('link');  
      link.type = 'text/css';  
      link.rel = 'stylesheet';  
      document.head.appendChild(link);  
      link.href = _href;
  })}

monitor()
