let select_eye=document.getElementById('select-eyes-card');
let select_skin=document.getElementById('select-skin-card');
let select_mouth=document.getElementById('select-mouth-card');
let emoji_make=document.querySelectorAll('#emoji img');

let skin_color=document.querySelectorAll('#select-skin-card img');
for (let i=0;i<skin_color.length;i++)
{
    let tempskinsrc=skin_color[i].src;
    skin_color[i].addEventListener('click',function(){
        emoji_make[0].src=tempskinsrc;
        select_skin.style.display='none';
        select_eye.style.display='block';
    })
}

let eye_img=document.querySelectorAll('#select-eyes-card img');
for (let i=0;i<eye_img.length;i++)
{
    let tempeyesrc=eye_img[i].src;
    eye_img[i].addEventListener('click',function(){
        emoji_make[1].src=tempeyesrc;
        select_eye.style.display='none';
        select_mouth.style.display='block';
    })
}

let mouth_img=document.querySelectorAll('#select-mouth-card img');
for (let i=0;i<mouth_img.length;i++)
{
    let tempmouthsrc=mouth_img[i].src;
    mouth_img[i].addEventListener('click',function(){
        emoji_make[2].src=tempmouthsrc;
    })
}
skin_arrow = document.querySelector('#select-skin-card i');
mouth_arrow=document.querySelector('#select-mouth-card i');
eye_arrow=document.querySelectorAll('#select-eyes-card i');

skin_arrow.addEventListener('click',function(){
    select_skin.style.display='none';
    select_eye.style.display='block';
})
eye_arrow[0].addEventListener('click',function(){
    select_eye.style.display='none';
    select_skin.style.display='block';
})
eye_arrow[1].addEventListener('click',function(){
    select_eye.style.display='none';
    select_mouth.style.display='block';
})
mouth_arrow.addEventListener('click',function(){
    select_mouth.style.display='none';
    select_eye.style.display='block';
})