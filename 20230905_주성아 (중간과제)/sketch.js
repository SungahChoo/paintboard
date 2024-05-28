let cap;
let c=255;
let img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14;
let activate1, activate2, activate3;
let a, b, d, e, f, g;
let v1, v2;
let mode = 0;


function setup(){
  createCanvas(800, 600);
  background(255);
  
  
  img = loadImage("지우개.png");
  img2 = loadImage("색채우기.png");
  img3 = loadImage("스포이드.png");
  img4 = loadImage("돋보기.png");
  img5 = loadImage("연필.png");
  img6 = loadImage("굵은 붓.png");
  img7 = loadImage("스프레이.png");
  img8 = loadImage("텍스트.png");
  img9 = loadImage("직선.png");
  img10 = loadImage("구불선.png");
  img11 = loadImage("네모.png");
  img12 = loadImage("vertex.png");
  img13 = loadImage("동그라미.png");
  img14 = loadImage("둥근꼭지점네모.png");

  a = 0;
  b = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  activate1 = 0;
  activate2 = 0;
  activate3 = 0;
}


function draw(){
  
  noStroke();
  fill(220);
  rect(0, 0, 150, 600);
  rect(0, 0, 800, 150);

  //아이콘 이미지
  image(img, 20, 40, 50, 50);
  image(img2, 70, 40, 50, 50);
  image(img3, 20, 110, 50, 50);
  image(img4, 70, 110, 50, 50);
  image(img5, 20, 180, 50, 50);
  image(img6, 70, 180, 50, 50);
  image(img7, 20, 250, 50, 50);
  image(img8, 70, 250, 50, 50);
  image(img9, 20, 320, 50, 50);
  image(img10, 70, 320, 50, 50);
  image(img11, 20, 390, 50, 50);
  image(img12, 70, 390, 50, 50);
  image(img13, 20, 460, 50, 50);
  image(img14, 70, 460, 50, 50);

  //팔레트 색 구현
  stroke(0);
  strokeWeight(1);
  rect(250, 20, 448, 110);

  fill(0);
  rect(250, 20, 32, 55);
  fill(100);
  rect(282, 20, 32, 55);
  fill(120);
  rect(314, 20, 32, 55);
  fill(102, 0, 0);
  rect(346, 20, 32, 55);
  fill(255, 0, 0);
  rect(378, 20, 32, 55);
  fill(255, 101, 0);
  rect(410, 20, 32, 55);
  fill(255, 153, 51);
  rect(442, 20, 32, 55);
  fill(255, 255, 0);
  rect(474, 20, 32, 55);
  fill(102, 204, 102);
  rect(506, 20, 32, 55);
  fill(0, 102, 0);
  rect(538, 20, 32, 55);
  fill(102, 153, 204);
  rect(570, 20, 32, 55);
  fill(0, 51, 255);
  rect(602, 20, 32, 55);
  fill(51, 0, 153);
  rect(634, 20, 32, 55);
  fill(51, 0, 102);
  rect(666, 20, 32, 55);

  fill(255);
  rect(250, 75, 32, 55);
  fill(230);
  rect(282, 75, 32, 55);
  fill(180);
  rect(314, 75, 32, 55);
  fill(102, 51, 0);
  rect(346, 75, 32, 55);
  fill(255, 102, 204);
  rect(378, 75, 32, 55);
  fill(204, 102, 0);
  rect(410, 75, 32, 55);
  fill(255, 204, 102);
  rect(442, 75, 32, 55);
  fill(255, 255, 153);
  rect(474, 75, 32, 55);
  fill(204, 255, 204);
  rect(506, 75, 32, 55);
  fill(102, 153, 102);
  rect(538, 75, 32, 55);
  fill(153, 204, 255);
  rect(570, 75, 32, 55);
  fill(51, 102, 204);
  rect(602, 75, 32, 55);
  fill(0, 51, 102);
  rect(634, 75, 32, 55);
  fill(153, 153, 204);
  rect(666, 75, 32, 55);

//왼쪽 아이콘 바 구현
noFill();
stroke(0);
strokeWeight(1);
rect(20, 40, 100, 490);
line(70, 40, 70, 530);
line(20, 110, 120, 110);
line(20, 180, 120, 180);
line(20, 250, 120, 250);
line(20, 320, 120, 320);
line(20, 390, 120, 390);
line(20, 460, 120, 460);


  stroke(0);
  strokeWeight(1);
  fill(c);
  rect(170, 50, 55, 55);

  //capture 버튼
  fill(200, 200, 0);
  rect(20, 550, 80, 30);
  textSize(10);
  text("capture 버튼", 30, 570);

  //아이콘 설명
  text("PRESS C", 30, 105);
  text("PRESS A", 30, 240);
  text("PRESS B", 80, 240);
  text("PRESS D", 80, 310);
  text("PRESS E", 30, 380);
  text("PRESS F", 30, 455);
  text("CLICK HERE", 70, 455);
  text("PRESS G", 30, 520);
  text("PRESS H", 80, 520);

//key a를 누르면 연필 그리기
if(keyIsPressed){
  if(key == 'a'){
  stroke(c);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

  //key b를 누르면 굵은 붓
  if(key == 'b'){
  stroke(c);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

//key c를 누르면 지우개
  if(key == 'c'){
  stroke(255);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

//key d를 누르면 텍스트
  if(key == 'd'){
    if(mouseIsPressed){
      input=createInput();
      input.position(mouseX, mouseY);
} 
}

//key e를 누르면 라인
  if(key == 'e'){
    stroke(c);
    line(a, b, f, g);
    console.log(a, b, f, g);
  }

//key f를 누르면 네모
  if(key == "f"){
    console.log("draw3");
    activate3 = 1;
  }

  if(activate3 === 1){
    fill(c);
    noStroke();
    rect(a, b, d, e);
    console.log(a, b, d, e);
}

//vertex는 클릭하면 구현 (아래에 코드있음)

//key g를 누르면 동그라미
  if(key == "g"){
    console.log("draw2");
    activate2 = 1;
  }

  if(activate2 === 1){
    fill(c);
    noStroke();
    ellipse(a, b, d, e);
    console.log(a, b, d, e);
  }

//key h를 누르면 네모(둥근꼭지점)
  if (key == "h"){
    console.log("draw1");
    activate1 = 1;
  }

  if (activate1 === 1){
    fill(c);
    noStroke();
    rect(a, b, d, e, 15, 15, 15, 15);
    console.log(a, b, d, e);
  }
  }

//vertex 구현
  if(mouseIsPressed === true){
    if(mouseX > 66){
      if(mouseX < 116){
        if(mouseY > 440){
          if(mouseY < 460){
            mode = 1;
        }
      }
    }
  }
}
  if (mode === 1){
    if (key === "1"){
      beginShape();
      key = "2";
    }
  if (key === "2"){
    if (mouseIsPressed === true){
      v1 = mouseX;
      v2 = mouseY;
      point(v1, v2);
      vertex(v1, v2);
    }
  }
  if (key === "3") {
    noStroke();
    fill(c);
    endShape(CLOSE);
    key = ''; 
  }
  console.log(key);
}
}

//COLOR을 상단 네모상자에 표시
function mousePressed(){
  if(mouseX >250){
    if(mouseX < 700){
      if(mouseY > 20){
        if(mouseY < 130)
        c = get(mouseX, mouseY);
      }
    }
  }

  //화면을 jpg로 저장하는 코드 (capture)
  if(mouseX > 20){
    if(mouseX < 100){
      if(mouseY > 550){
        if(mouseY < 580){
          cap=get(150, 150, 800, 600);
          save(cap, "a.jpg");
        }
      }
    }
  }


  a = mouseX;
  b = mouseY;
  d = 0;
  e = 0;
  f = mouseX;
  g = mouseY;

}

function mouseReleased() {
  d = mouseX - a;
  e = mouseY - e;
  f = mouseX;
  g = mouseY;
}

function keyReleased(){
//네모
  if (key === "f"){
    console.log("draw3");
    activate3 = 0;
  }
//동그라미
  if (key === "g"){
  console.log("draw2");
  activate2 = 0;
}
//둥근 꼭지점 네모
  if (key === "h"){
      console.log("draw1");
    activate1 = 0;
    }
}




