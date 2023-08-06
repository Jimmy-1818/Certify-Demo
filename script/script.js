function copy_hash(htmlElement){
  if(!htmlElement){
    return
  }
  
  let elementText = htmlElement.innerText;

  let tempInput = document.createElement('input');
  tempInput.setAttribute('value', elementText);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  tempInput.parentNode.removeChild(tempInput);
  alert("Hash copiato!")
}

document.querySelector('#copy-hash').onclick = function(){
  copy_hash(document.querySelector('#hash'))
}

