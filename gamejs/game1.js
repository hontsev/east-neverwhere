var len=450;
var height=500;
var assetsObj = {
    "sprites": {
        "http://i.imgur.com/e50rhHP.png": {
            tile: 74,
            tileh: 94,
            paddingX:30,
            paddingY:20,
            map: {
                walker_start: [0, 0],
                walker_middle: [7, 0],
                walker_end: [7, 1]
            }
        }
    }
};

window.onload = function() {
	Crafty.init(len, height);
	Crafty.load(assetsObj, go);
};

function go(){
  
var ttext=Crafty.e('2D,DOM,Text,Persist')
  .attr({ x: len-150, y: 10 })
  .textColor("white")
  .text("fps:100");


Crafty.c("Box",{
  required: "2D, Canvas, Color",
  init:function(){
    this.attr({x:0,y:0,w:50,h:50});
    //ttext.text("init!");
  },
  remove:function(){
    ttext.text("remove!");
  },
  setColor:function(color){
    this.color(color);
  }
});
Crafty.c('Button',{
  required:'2D,Canvas,Color,Text,Mouse',
  init:function(){
    this.attr({w:100,h:50})
      .color('#ff3333')
      .textFont({size:'20px'});
  }
});
Crafty.c('Monster1',{
  required:'2D,Canvas,walker_start,SpriteAnimation',
  init:function(){
    this.reel("rwalk", 500,
    [
      [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
      [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
    ]);
    this.reel("lwalk", 500,
    [
      [7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1],
      [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]
    ]);
    this.reel("stand", 600, 
    [
      [0, 0], [1, 0]
    ]);
    this.attr({w:30,h:30});
  }
});
Crafty.c('Control',{
  required:'Twoway,Gravity',
  isStop:true,
  init:function(){
     this
      .bind("NewDirection",function(dir){
       if(dir.x==-1){
         this.animate('lwalk',-1);
       }else if(dir.x==1){
         this.animate('rwalk',-1);
       }else if(dir.x==0){
         this.animate('stand',-1);
       }
     }).twoway().gravity('Floor');
  }
});

Crafty.defineScene("menu",function(){
  Crafty.background("url('http://imgsrc.baidu.com/forum/w%3D580/sign=5a4a2f1e7af0f736d8fe4c093a55b382/f11eb83fb80e7beca5c91a802d2eb9389b506b64.jpg')");
  Crafty.e('2D,Canvas,Text')
    .attr({x:100,y:100})
    .textFont({ size: '40px', weight: 'bold' })
    .textColor('Green')
    .text('游戏测试v1.0');
  Crafty.e('Button')
    .attr({x:170,y:200})
    .text(" 开始游戏 ")
    .bind('Click',function(MouseEvent){
      ttext.text("!");
      Crafty.enterScene('game1');ttext.text("!2");
    });
});

Crafty.defineScene("game1",function(){
  Crafty.background("url('http://imgsrc.baidu.com/forum/w%3D580/sign=5a4a2f1e7af0f736d8fe4c093a55b382/f11eb83fb80e7beca5c91a802d2eb9389b506b64.jpg')");
  
  var me = Crafty.e('Monster1,Control');
  Crafty.e('Box,Floor').attr({x:0,y:height-3,w:len,h:3}).color('green');
  Crafty.e('Box,Floor').attr({x:100,y:height-60,w:50,h:3}).color('green');
  Crafty.e('Box,Floor').attr({x:200,y:height-160,w:50,h:3}).color('green');
  Crafty.e('Box').attr({x:200,y:height-30,w:30,h:30}).color('green');

  me
    .attr({x:100,y:150})
    .animate('stand',-1);
  
});

Crafty.defineScene("gameover",function(){
  Crafty.background("#333");
});





Crafty.enterScene("game1");

}

































