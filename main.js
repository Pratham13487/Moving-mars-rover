canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

nasa_imgarray=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","Mars4.jpg","Mars5.jpg"];
random_number=Math.floor(Math.random()*6);

background_img=nasa_imgarray[random_number];
rover_img="rover.png";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src=background_img;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src=rover_img;

}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress==38){
        up();
        console.log("up");
    } 

    if (keypress==40){
        down();
        console.log("down");
    } 

    if (keypress==37){
        left();
        console.log("left");
    } 

    if (keypress==39){
        right();
        console.log("right");
    } 
}
function up(){
    if (rover_y>0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x= "+rover_x+" ,y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (rover_y<500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x= "+rover_x+" ,y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if (rover_x>0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x= "+rover_x+" ,y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x<700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed,x= "+rover_x+" ,y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}