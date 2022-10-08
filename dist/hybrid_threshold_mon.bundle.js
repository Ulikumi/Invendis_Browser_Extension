/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/hybrid_threshold_mon.js ***!
  \*************************************/
var issues = [];

function tableToJSON() {
  return Array.from(document.querySelectorAll(".gridRowStyle")).concat(Array.from(document.querySelectorAll(".gridAlternateRow"))).map(function (list) {
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
  var result = parseFloat(siteName.toLocaleLowerCase().replaceAll(/[a-z]*[_]*/g, "").substr(-4));
  return result > 15 && result < 60 ? true : false;
}

function toShow(_ref) {
  var SiteName = _ref.SiteName,
      DCVolt = _ref.DCVolt,
      SysVolt = _ref.SysVolt;
  var show = false;
  var configuredThreshold = getThresholdFromName(SiteName);
  var currentDCVoltage = getCurrentDCVoltage(DCVolt);
  var currentSysVoltage = getCurrentSysVoltage(SysVolt);
  if (currentDCVoltage > 0 && currentDCVoltage <= configuredThreshold) show = true;
  if (currentSysVoltage > 0 && currentSysVoltage <= configuredThreshold) show = true;
  return show;
}

function issuesObject(issuesArray) {
  return issuesArray.map(function (tr) {
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
  var _overlay = document.createElement("div");

  _overlay.classList.add("info-overlay");

  _overlay.style.cssText = "position:fixed;\n      top:163px;\n      left:1200px;\n      padding:9px;\n      background-color:#1565c0 ; \n      width:auto;\n      color:white;\n      border-radius:10px;\n      flex-direction:column;\n      align-items:center;\n      justify-content:center;\n      box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);\n      -webkit-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);\n      -moz-box-shadow: 1px 8px 5px 0px rgba(0,0,0,0.75);\n      display:flex;\n      cursor: move;\n      max-height:15%\n      z-index:1001;";
  _overlay.innerHTML = "<p class=\"title\">Hybrid Threshold Due/Exceeded</p>\n      <div style='display:flex;align-items:center;justify-content:center;' class=\"body\">\n    <style>\n      info-overlay.title{\n         cursor: move;\n         }\n.info-overlay td{\n  border:1px solid white;\n  padding:0.3em;\n}\n.info-overlay thead td{\n  background-color:#be4d25;\n}\n      </style>\n      <table class=\"tg\">\n  <thead>\n    <tr>\n      <td class=\"tg-0lax\">Last Updated Time</td>\n      <td class=\"tg-0lax\">Site ID</td>\n      <td class=\"tg-0lax\">Site Name</td>\n      <td class=\"tg-0lax\">DC Voltage</td>\n      <td class=\"tg-0lax\">System Voltage</td>\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n  </table>  \n      </div>";
  document.body.appendChild(_overlay);
}

function highlightIssue(row) {
  row.children[16].style.cssText = "background-color:red;color:white;";
  row.children[11].style.cssText = "background-color:red;color:white;";
  row.children[4].children[0].style.cssText = "background-color:red;color:white;height:20px";
}

function getThresholdFromName(SiteName) {
  var conf = parseFloat(SiteName.toLocaleLowerCase().replaceAll(/[a-z]*[_]*/g, "").substr(-4));
  return conf;
}

function getCurrentDCVoltage(_dc) {
  return parseFloat(_dc);
}

function getCurrentSysVoltage(sys) {
  return parseFloat(sys);
}

function monitorThresholds() {
  issues = [];
  document.querySelector(".info-overlay") ? document.querySelector(".info-overlay").remove() : "";
  tableToJSON().forEach(function (_ref2) {
    var SiteID = _ref2.SiteID,
        TimeStamp = _ref2.TimeStamp,
        SiteName = _ref2.SiteName,
        DCVolt = _ref2.DCVolt,
        SysVolt = _ref2.SysVolt,
        RowRef = _ref2.RowRef;
    if (isHybrid(SiteName)) toShow({
      SiteName: SiteName,
      DCVolt: DCVolt,
      SysVolt: SysVolt
    }) ? issues.push({
      TimeStamp: TimeStamp,
      SiteID: SiteID,
      SiteName: SiteName,
      DCVolt: DCVolt,
      SysVolt: SysVolt,
      RowRef: RowRef
    }) : "";
  });

  if (issues) {
    issues.forEach(function (_ref3) {
      var RowRef = _ref3.RowRef;
      return highlightIssue(RowRef);
    });
  }

  displayIssuesOverlay(issues);
}

function displayIssuesOverlay(issues) {
  createOverlay();
  dragElement(document.querySelector(".info-overlay"));
  var tpl = "";
  issues.forEach(function (_ref4) {
    var TimeStamp = _ref4.TimeStamp,
        SiteID = _ref4.SiteID,
        SiteName = _ref4.SiteName,
        DCVolt = _ref4.DCVolt,
        SysVolt = _ref4.SysVolt;
    tpl = tpl + "<tr>\n    <td>".concat(TimeStamp, "</td>\n    <td>").concat(SiteID, "</td>\n    <td>").concat(SiteName, "</td>\n    <td>").concat(DCVolt, "</td>\n    <td>").concat(SysVolt, "</td>\n  </tr>");
  });
  document.querySelector(".body tbody").innerHTML = tpl;
} //Drag implementation


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
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function start() {
  monitorThresholds();
  setTimeout(start, 90000);
}

start();
/******/ })()
;
//# sourceMappingURL=hybrid_threshold_mon.bundle.js.map