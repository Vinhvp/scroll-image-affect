let images = document.querySelectorAll('.images img');
let prev = document.querySelector('.control-prev');
let next = document.querySelector('.control-next');
let close = document.querySelector('#close');
let galleryImg = document.querySelector('.gallery-inner img');
let gallery = document.querySelector('.gallery')
let currentIndex = 0;
function showGallery(){
    gallery.classList.add('active');
    galleryImg.src = images[currentIndex].src;
}
images.forEach((item,index)=>{
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery()
    })
})
close.addEventListener('click',function(){
    gallery.classList.remove('active');
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){ // nút esc sẽ xoá 
        gallery.classList.remove('active');
    }
})
prev.addEventListener('click',function(){
   if(currentIndex > 0){
    currentIndex--;
    showGallery()
   }
   else{
    currentIndex = images.length-1;
    showGallery()
   }
})
next.addEventListener('click',function(){
    max = images.length - 1;
    if(currentIndex >= max){
        currentIndex = -1;
    }
    currentIndex++;
    showGallery()
})