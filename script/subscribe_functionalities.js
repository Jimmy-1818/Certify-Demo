// If a personalized link is relevated CHANGE LINK
if (localStorage.getItem("hash") != null){
  var affiliate_registration = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash") 
  var subscribe_button = document.getElementById('link')
  subscribe_button.setAttribute('href', affiliate_registration)
}


var default_link = "https://business.genuiny.com/register/index?referralCode=4UJDKWJNLJP5&name=OpportunitySito+OpportunitySito"
qrcode = new QRCode(document.getElementById("qr_div"), default_link);
link_desktop.innerHTML = default_link
link_desktop.href = default_link
function generateQRCode(){
    var value = undefined
    let link_desktop = document.getElementById("link_desktop")
    if (localStorage.getItem("hash") !== null){
        value = "https://business.genuiny.com/register/index?referralCode=" + localStorage.getItem("hash")
    }
    else{
        value = default_link
    }
    qrcode.clear()
    qrcode.makeCode(value);
    link_desktop.innerHTML = value
    link_desktop.href = value
}



// mute video on modal close
$('#video-tutorial').on("hide.bs.modal", function() {
    $('#video-tutorial-subscribe')[0].pause();
})