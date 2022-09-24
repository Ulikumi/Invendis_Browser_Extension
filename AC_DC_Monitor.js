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
          SOB_Active: list.children[23].children[0].title.substring(0,6).trim() === 'Alarm'?true:false,
          RowRef: list
        };
      })}

      function parseAC_DC(){   // Remove all hybrid sites from DOM leaving only AC/DC sites
        Array.from(document.querySelectorAll(".gridRowStyle"))
        .concat(Array.from(document.querySelectorAll(".gridAlternateRow"))).forEach( node =>{
            let sitename = node.children[4].children[0].value.trim()
            if(isHybrid(sitename) === true) node.remove() 
        })
      }

      function isHybrid(siteName) {
        return parseFloat(
          siteName
            .toLocaleLowerCase()
            .replaceAll(/[a-z]*[_]*/g, "")
            .substr(-4)
        ) > 15
          ? true
          : false;
      }
      

      setInterval(parseAC_DC,70000)