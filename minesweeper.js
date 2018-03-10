var arr;
var x;
var y;
var w=600/15;
var ok=0;
function setup() {
          createCanvas(600,600);
          background(200);
          arr=new Array(20);
          for(var i=0;i<20;i++)
          {
                    arr[i]= new Array(20);
                    for(var j=0; j<20; j++)
                    {    
                              arr[i][j]=new Cell(i,j,w);
                              //if(random(1)<0.5) arr[i][j].bomba=1;
                    }
          }
          for(var i=0;i<40;i++)
          {
               var x=floor(random(15));
               var y=floor(random(15));
               arr[x][y].bomba=1;
          }
          for(var i=0;i<20;i++)
          {
                    for(var j=0; j<20; j++)
                    {    
                              arr[i][j].nrVecini();
                    }
          }
          
}

function draw() {   
          for(var i=0; i<15; i++)
          {
            for(var j=0; j<15; j++)
            {
               arr[i][j].show();
            }
        }
}
function gameOver()
{
     for(var i=0;i<15;i++)
     {
          for(var j=0;j<15 ;j++)
          {
               arr[i][j].afisat=1;
          }
     }
}
function pct(i,j)
{
     this.x=i;
     this.y=j;
}
function Lee(a,b)
{
     var step= [];
    step.push(new pct(a,b));
    var p=0;
    while(step.length>0)
    {     
         if(p==10) break;
         var i=step[0].x,j=step[0].y;
         arr[i][j].afisat=1;
         if(ok==1) break;
         console.log(i,j);
         for(var x=-1;x<=1;x++)
         {
              for(var y=-1;y<=1;y++)
              {
                   if(x==0 && y==0) continue;
                   if(i+x<0 || i+x >14 || j+y<0 || j+y>14) continue;
                   if(arr[i+x][j+y].bomba==1) continue;
                   if(arr[i+x][j+y].afisat==1) continue;
                   step.push(new pct(i+x,j+y));
              }
         }
         console.log(step.length);
         step.shift();
         p++;
         //step.length=step.length-1;
    }
    if(ok==0)
         {
              ok=1;
         }
    delete(step);
}
function mousePressed()
{ 
    x=floor(mouseX/40);
    y=floor(mouseY/40);
    if(mouseButton === RIGHT)
     {
          arr[x][y].afisat=2;
          return;
     }
    if(arr[x][y].bomba==1) gameOver();
    Lee(x,y);
      
}