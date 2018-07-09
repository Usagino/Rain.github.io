console.log("HelloWorld");

let client_w = document.getElementById('header').clientWidth;
let client_h = document.getElementById('header').clientHeight;
let w_half = client_w /2;
let h_half = client_h /2;
let rand = 0;
let rand_w = 0;
let alpha = 30;


function setup() {
  let canvas = createCanvas(client_w, client_h);
  canvas.parent("header");
  noStroke();
  smooth();
  frameRate(20);
}


function draw() {
  rand_w = random(0,client_w);
  rand_h = random(h_half -100,h_half +100);
  rand = random(10,100);
  rand_if = random(0,10);
  background('rgba(255, 255, 255, 0.1)');
  fill(random(255),random(255),random(255),random(10,100));
  ellipse(rand_w,rand_h,rand ,rand /2 );
}

console.log("HelloUnderWorld");
