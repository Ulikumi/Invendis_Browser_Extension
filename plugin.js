function tableToJSON() {
  return Array.from(document.querySelectorAll(".gridRowStyle"))
    .concat(Array.from(document.querySelectorAll(".gridAlternateRow")))
    .map((list) => {
      return {
        TimeStamp: list.children[0].innerText.trim(),
        SiteID: list.children[3].children[0].value.trim(),
        SiteName: list.children[4].children[0].value.trim(),
        SysVolt: list.children[11].innerText.trim(),
        DCVolt: list.children[16].innerText.trim(),
        RowRef: list
      };
    });
}
function isHybrid(siteName) {
  let result = parseFloat(
    siteName
      .toLocaleLowerCase()
      .replaceAll(/[a-z]*[_]*/g, "")
      .substr(-4))
  return (result >15 && result < 60)? true:false;
}


function toShow({ SiteName, DCVolt, SysVolt }) {
  let show = false;
  let configuredThreshold = getThresholdFromName(SiteName);
  let currentDCVoltage = getCurrentDCVoltage(DCVolt);
  let currentSysVoltage = getCurrentSysVoltage(SysVolt);

  if (currentDCVoltage > 0 && currentDCVoltage <= configuredThreshold)
    show = true;
  if (currentSysVoltage > 0 && currentSysVoltage <= configuredThreshold)
    show = true;
  return show;
}

function issuesObject(issuesArray) {
  return issuesArray.map((tr) => {
    return {
      Date: tr.children[0].innerText.trim(),
      SiteID: tr.children[3].children[0].value.trim(),
      SiteName: tr.children[4].children[0].value.trim(),
      SysVolt: tr.children[11].innerText.trim(),
      DCVolt: tr.children[16].innerText.trim()
    };
  });
}

function createOverlay() {
  let _overlay = document.createElement("div");
  _overlay.classList.add("info-overlay");
  _overlay.style.cssText = `position:fixed;
      top:163px;
      left:1200px;
      padding:9px;
      background-color:#1565c0 ; 
      width:auto;
      color:white;
      border-radius:10px;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);
      display:flex;
      cursor: move;
      z-index:1001;`;

  _overlay.innerHTML = `<p class="title">Hybrid Threshold Due/Exceeded</p>
      <div style='display:flex;align-items:center;justify-content:center;' class="body">
      <style>
.info-overlay td{
  border:1px solid white;
  padding:0.3em;
}
.info-overlay thead td{
  background-color:#be4d25;
}
      </style>
      <table class="tg">
  <thead>
    <tr>
      <td class="tg-0lax">Time-Stamp</td>
      <td class="tg-0lax">Site ID</td>
      <td class="tg-0lax">Site Name</td>
      <td class="tg-0lax">DCV</td>
      <td class="tg-0lax">SysV</td>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>  
      </div>`;
  document.body.appendChild(_overlay);
}

function highlightIssue(row) {
  row.children[16].style.cssText = `background-color:red;color:white;`;
  row.children[11].style.cssText = `background-color:red;color:white;`;
  row.children[4].children[0].style.cssText = `background-color:red;color:white;height:20px`;
}

function getThresholdFromName(SiteName) {
  let conf = parseFloat(
    SiteName.toLocaleLowerCase()
      .replaceAll(/[a-z]*[_]*/g, "")
      .substr(-4)
  );
  return conf;
}

function getCurrentDCVoltage(_dc) {
  return parseFloat(_dc);
}

function getCurrentSysVoltage(sys) {
  return parseFloat(sys);
}

function monitorThresholds() {
  let issues = [];
  document.querySelector(".info-overlay")
    ? document.querySelector(".info-overlay").remove()
    : "";
  tableToJSON().forEach(
    ({ SiteID, TimeStamp, SiteName, DCVolt, SysVolt, RowRef }) => {
      if (isHybrid(SiteName))
        toShow({ SiteName, DCVolt, SysVolt })
          ? issues.push({
              TimeStamp,
              SiteID,
              SiteName,
              DCVolt,
              SysVolt,
              RowRef
            })
          : "";
    }
  );
  if (issues) {
    issues.forEach(({ RowRef }) => highlightIssue(RowRef));
  }

  displayIssuesOverlay(issues);
}

function displayIssuesOverlay(issues) {
  console.table(issues);
  createOverlay();
  dragElement(document.querySelector(".info-overlay"));
  let tpl = ``;
  issues.forEach(({ TimeStamp, SiteID, SiteName, DCVolt, SysVolt }) => {
    tpl =
      tpl +
      `<tr>
    <td>${TimeStamp}</td>
    <td>${SiteID}</td>
    <td>${SiteName}</td>
    <td>${DCVolt}</td>
    <td>${SysVolt}</td>
  </tr>`;
  });
  document.querySelector(".body tbody").innerHTML = tpl;
}


//Drag implementation

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
   
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function start(){
  monitorThresholds()
  setTimeout(monitorThresholds,90000)
}
  start()
