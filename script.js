let copyF = (e) => {

    let copyText = document.getElementsByClassName("accordion-body" + e)[0].innerText.replaceAll("&nbsp;", ' ');
    navigator.clipboard.writeText(copyText);
    document.getElementsByClassName("accordion-body" + e)[0].parentNode.childNodes[1].innerText = "Copied";
    document.getElementsByClassName("accordion-body" + e)[0].parentNode.childNodes[1].style.backgroundColor = "rgb(163, 253, 114)"
    setTimeout(() => {
        document.getElementsByClassName("accordion-body" + e)[0].parentNode.childNodes[1].innerText = "Copy";
        document.getElementsByClassName("accordion-body" + e)[0].parentNode.childNodes[1].style.backgroundColor = "#d6d6d6"
    }, 2000);
}

async function Programs() {
    for (let index = 1; index < 25; index++) {
        let programs = await fetch("https://raw.githubusercontent.com/SurajSG23/OS-LabTest-Programs/main/Programs/Programs" + index + ".txt")
        let response = await programs.text();
        document.getElementsByClassName("accordion-body" + index)[0].innerText = response
    }

}

Programs()
