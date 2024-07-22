function nyala() {
    let toggle1 = document.getElementById("toggle1")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")

    if (toggle1.checked) {
        lampu1.src = "asset/images/on.gif"
        lampu2.src = "asset/images/on.gif"
        lampu3.src = "asset/images/on.gif"
        lampu4.src = "asset/images/on.gif"


    } else {
        lampu1.src = "asset/images/off.gif"
        lampu2.src = "asset/images/off.gif"
        lampu3.src = "asset/images/off.gif"
        lampu4.src = "asset/images/off.gif"

    }

}