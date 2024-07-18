const namaSaya = "hasanalbanna"
let usia = 12

let about = document.getElementById("about")


function generateBiodata() {
    let generasi 
    if (usia > 5 && usia < 10) {
        generasi = "generasi balita"
    } else {
        generasi = "generasi yang matang"
    }
    return about.innerHTML = generasi
}

generateBiodata()