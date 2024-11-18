const downloadButton = document.getElementById('downloadButton');
const testLinkButton = document.getElementById('testLink');

function makeCode(e) {
    const text = document.getElementById("inputText").value;
    const color = document.getElementById('foregroundColor').value;
    document.querySelector(".qrcode").innerHTML = '';
    new QRCode(document.querySelector(".qrcode"), {
        text: text,
        width: 320,
        height: 320,
        colorDark: color,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    if (text.trim().length < 1) {
        downloadButton.setAttribute('readonly', 'readonly');
        downloadButton.setAttribute('disabled', 'disabled');
        downloadButton.classList.add('disabled');
    } else {
        downloadButton.removeAttribute('readonly');
        downloadButton.removeAttribute('disabled');
    }

    const regex = /https?:\/\/.*\..*[^\s"'>]+/g;
    if (regex.exec(text)) {
        testLinkButton.classList.remove('hidden');
    } else {
        testLinkButton.classList.add('hidden');
    }
}

function downloadDivAsImage() {
    const canvas = document.querySelector('#qrcode canvas');
    const link = document.createElement('a');

    link.download = 'qr-code.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

downloadButton.addEventListener('click', downloadDivAsImage);
testLinkButton.addEventListener('click', () =>{
    const text = document.getElementById("inputText").value;
    window.open(text, "_blank");
});

