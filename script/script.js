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







const leftArrow = document.querySelectorAll('.scroll-left');
const rightArrow = document.querySelectorAll('.scroll-right');
const flex_container_steps = document.querySelectorAll('.flex_container_steps')
const margin = 5

function updateScrollArrows(DOM_object) {
  const margin = 3;
  var container_width = DOM_object.clientWidth;
  var scroll_amount = DOM_object.scrollLeft;
  var overflowed_width = DOM_object.querySelector('.steps_container').clientWidth;
  var scroll_percentage = (scroll_amount / (overflowed_width - container_width)) * 100;
  var scroll_necessity = overflowed_width > (container_width +  2 * margin)
  var scroll_left = DOM_object.querySelector('.scroll-left')
  var scroll_right = DOM_object.querySelector('.scroll-right')
  
  if (scroll_necessity){
    
    if (scroll_percentage < 0 + margin) {
      scroll_left.classList.remove('scroll_show');
      scroll_right.classList.add('scroll_show');
    }
    else if (scroll_percentage > 100 - margin) {
      scroll_right.classList.remove('scroll_show');
      scroll_left.classList.add('scroll_show');
    }
    else {
      scroll_left.classList.add('scroll_show');
      scroll_right.classList.add('scroll_show');
    }
  }
  if ((!scroll_necessity) && (scroll_left.classList.contains('scroll_show') || scroll_right.classList.contains('scroll_show'))){
    scroll_right.classList.remove('scroll_show');
    scroll_left.classList.remove('scroll_show');
  }
  
};

// throw the function once: LOADED, SCROLL slideshow, RESIZE vindow
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("resize", function(){
    flex_container_steps.forEach(f_container_steps =>{
      updateScrollArrows(f_container_steps)
    });
  });
  flex_container_steps.forEach(f_container_steps => {
    updateScrollArrows(f_container_steps)
    f_container_steps.addEventListener('scroll', function(){
      updateScrollArrows(f_container_steps)});
    });
});


leftArrow.forEach(left_arrow => {
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
  right_arrow.addEventListener('click', function() {
    var contentContainer = this.parentElement
    var scrollAmount = contentContainer.clientWidth / 2;
    contentContainer.scrollTo({
      left: contentContainer.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  });
});

function open_info(){
  fact_info_container.classList.add('show_from_left')
  back_btn_object.classList.add('show_from_left')
}

const fact_info_container = document.querySelector('.fact-info-container')
const back_btn_object = document.querySelector('#back_btn')
function info_back_btn(){
  fact_info_container.classList.remove('show_from_left')
  back_btn_object.classList.remove('show_from_left')
}

