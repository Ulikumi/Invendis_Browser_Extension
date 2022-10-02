
let SitesData = [];
function tableToJSON() {
  SitesData = []
  return Array.from(document.querySelectorAll(".gridRowStyle"))
    .concat(Array.from(document.querySelectorAll(".gridAlternateRow")))
    .map( list => {
      return {
        'TimeStamp': list.children[0].innerText.trim(),
        'Region':list.children[2].innerText.trim(),
        'SiteID': list.children[3].children[0].value.trim(),
        'SiteName': list.children[4].children[0].value.trim(),
        'ShelterTemp':list.children[10].innerText.trim(),
        'SysVolt': list.children[11].innerText.trim(),
        'SystemCurrent':list.children[12].innerText.trim(),
        'DCVolt': list.children[16].innerText.trim(),
        'LiBAlarmed': list.children[20].innerText.trim().includes('Alarm')?'True':'False'
        //'DoorOpenAlarm':list.children[82].children[0].title.includes('Alarm')?'True':'False'
      };
    })
}



function insertDataTableScript(){
  let data = tableToJSON()
  document.querySelector('.usergridStyle').remove()
const tableTemplate = `
<table id="table_id" >
<thead>
<tr>
<th>Time Stamp</th>
<th>Region</th>
<th>Site ID</th>
<th>Site Name</th>
<th>Shelter Temp</th>
<th>System Voltage</th>
<th>DC Voltage</th>
<th>LiB Alarm?</th>
<th>DCS Door Open Alarm?</th>
</tr>
</thead>
<tbody>
</tbody>
</table>
<style>
#table_id{
  margin-left:auto; 
  margin-right:auto; 
 width:55%;
}
</style>
`;
const tableId = '#SiteUpdatingStatus';
$(tableTemplate).insertAfter(tableId);
let _tr  = '';
data.forEach( ({TimeStamp,Region,SiteID,SiteName,ShelterTemp,SysVolt,DCVolt,LiBAlarmed,DoorOpenAlarm}) =>{
_tr = _tr + `<tr>
<td>${TimeStamp}</td>
<td>${Region}</td>
<td>${SiteID}</td>
<td>${SiteName}</td>
<td>${ShelterTemp}</td>
<td>${SysVolt}</td>
<td>${DCVolt}</td>
<td>${LiBAlarmed}</td>
<td>${DoorOpenAlarm}</td>
</tr>`
})
//console.log(_tr)

//document.querySelector('#table_id').style.cssText = ``;
document.querySelector('#table_id > tbody').innerHTML = _tr;

}

insertDataTableScript()


