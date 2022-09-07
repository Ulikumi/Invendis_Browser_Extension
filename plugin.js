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
  return siteName.toLowerCase().includes("_h");
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
      z-index:1001;`;

  _overlay.innerHTML = `<p class="title">Hybrid Threshold Due/Exceeded</p>
      <div style='display:flex;align-items:center;justify-content:center;' class="body">
      <style>
td{
  border:1px solid white;
  padding:0.3em;
}
thead td{
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

function monitorThresholdsDC() {
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

let _timer = setInterval(monitorThresholdsDC, 120000);
//monitorThresholdsDC();
