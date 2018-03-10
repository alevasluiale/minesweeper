
function Cell(i,j,w)
{
     this.i=i;
     this.j=j;
     this.w=w;
     this.vecini=0;
     this.bomba=0;
     this.afisat=0;
}
Cell.prototype.nrVecini = function()
{
     if(this.bomba==1) this.vecini=-1;
     for(var x=-1;x<=1;x++)
     {
          for(var y=-1;y<=1;y++) {
               if(this.i+x>14 || this.i+x<0 || this.j+y>14 || this.j+y<0) continue;
               this.vecini+=arr[this.i+x][this.j+y].bomba;
          }
     }
}
Cell.prototype.show =function()
{    
     stroke('#222222');
     strokeWeight(4);
     if(this.afisat==0)
     {
          fill(130);
          rect(this.i*this.w,this.j*this.w,this.w-3,this.w-3);
     }
     else if(this.afisat==2)
     {
         fill('red'); 
                   rect(this.i*this.w,this.j*this.w,this.w-3,this.w-3);

     }
     else
     {
          if(this.bomba==1) 
          {
               fill('red');
               ellipse(this.i*this.w +this.w/2,this.j*this.w+this.w/2,20);
          }
          else
          {    
               fill(255);
               rect(this.i*this.w,this.j*this.w,this.w-3,this.w-3);
               if(this.vecini>0)
               {
                    fill(0);
                    textAlign(CENTER);
                    textSize(35);
                    text(this.vecini,this.i*this.w +this.w/2,this.j*this.w+this.w-6)
               }
          }
     }
     
}