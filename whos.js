function saklar(params) {
    let toggle = document.getElementById("toggle-default")

    console.log("testing", toggle.checked)
    let lampu1 = document.getElementById("lampu1")
    if(params == "on") {
        lampu1.src = "asset/images/on.gif"
    }
    if (params == "off") {
        lampu1.src = "asset/images/off.gif"
    }
    return lampu1
  }  
  