
// LINK PRODUCTION
if (document.getElementById("process-link")){
  document.getElementById("process-link").addEventListener("click", generate_link)
  document.getElementById("link-to-process").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      generate_link()
    }
  });
}

function generate_link(){
  var affiliation_link = String(document.getElementById("link-to-process").value)
  if(affiliation_link.includes("https://business.genuiny.com/")){
    var link_index = affiliation_link.indexOf("https://business.genuiny.com/")
    var variable_affiliation = affiliation_link.slice(link_index + 57)
    var affiliate_site = "https://genuiny.it" + "#" + variable_affiliation
    document.getElementById("processed-link").value = affiliate_site
  }
  else if (affiliation_link.length > 0){
    document.activeElement.blur();
    alert('Link non valido. Incolla il referral link, che ottieni nell\'app da "condividi app".')
  }
  else {
    document.activeElement.blur();
    alert('Incolla prima il referral link, che ottieni nell\'app da "condividi app".')
  }
};


const input = document.getElementById("processed-link")
const copy_btn = document.getElementById("copy-link")

copy_btn.onclick = function(){
  if (input.value.length > 0){
    // Select text
    input.select();
    // Copy the text
    document.execCommand("Copy");
    alert("Link Copiato!")
  }
  else{
    document.activeElement.blur();
    alert("Impossibile copiare, inserisci prima il link.")
  }
};

//var clipboard_text = window.event.clipboardData.getData('Text')
//console.log(clipboard_text)




// mute video on modal close
$('#share-on-instagram').on("hide.bs.modal", function() {
  $('#video-share-on-instagram')[0].pause();
})

// mute video on modal close
$('#share-via-site').on("hide.bs.modal", function() {
  $('#video-share-via-site')[0].pause();
})

// mute video on modal close
$('#share-on-instagram').on("hide.bs.modal", function() {
  $('#video-share-on-instagram')[0].pause();
})