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


document.addEventListener('DOMContentLoaded', function() {
  var leftArrow = document.querySelectorAll('.scroll-left');
  var rightArrow = document.querySelectorAll('.scroll-right');

  leftArrow.forEach(left_arrow => {
    console.log(left_arrow.parentElement)
    left_arrow.addEventListener('click', function() {
      var contentContainer = this.parentElement
      var scrollAmount = contentContainer.clientWidth / 2;
      contentContainer.scrollTo({
        left: contentContainer.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  rightArrow.forEach(right_arrow => {
    console.log(right_arrow.parentElement)
    right_arrow.addEventListener('click', function() {
      var contentContainer = this.parentElement
      var scrollAmount = contentContainer.clientWidth / 2;
      contentContainer.scrollTo({
        left: contentContainer.scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    });
  });

});

// document.addEventListener('DOMContentLoaded', function() {
//   var contentContainer = document.querySelector('.flex_container_steps');
//   var leftArrow = document.querySelector('.scroll-left');
//   var rightArrow = document.querySelector('.scroll-right');

//   console.log(contentContainer.clientWidth)
  
//   leftArrow.addEventListener('click', function() {
//     var scrollAmount = contentContainer.clientWidth / 2; // Amount of scroll in pixls
//     contentContainer.scrollTo({
//       left: contentContainer.scrollLeft - scrollAmount,
//       behavior: 'smooth'
//     });
//   });
  
//   rightArrow.addEventListener('click', function() {
//     var scrollAmount = contentContainer.clientWidth / 2; // Amount of scroll in pixls
//     contentContainer.scrollTo({
//       left: contentContainer.scrollLeft + scrollAmount,
//       behavior: 'smooth'
//     });
//   });
// });