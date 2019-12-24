
var btns = document.getElementsByClassName('btn_cv');
var panels = document.getElementsByClassName('panel');
var index = document.getElementById('indicator_index');

function tab(btn_cv, panel){
  for (var i = 0;i<btns.length;i++){
    if(i==btn_cv){
      panels[panel].style.display='block';
    }else{
        panels[i].style.display='none';
      }
  }
  index.style.left=String(btn_cv*33) + "%";

}
