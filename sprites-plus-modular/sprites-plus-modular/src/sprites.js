export {Sprite};
//"use strict";
//let sprites = [];
class Sprite{
	constructor(x=0,y=0,span=10,fwd={x:1,y:0},speed=0,color="black"){
		this.x = x;
		this.y = y;
		this.span = span;
		this.fwd = fwd;
		this.speed = speed;
		this.color = color;
	}

	draw(ctx){
		ctx.save();
		ctx.translate(this.x,this.y);
		ctx.beginPath();
		ctx.rect(-this.span/2,-this.span/2,this.span, this.span);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.restore();
	}

	move(){
		this.x += this.fwd.x * this.speed;
		this.y += this.fwd.y * this.speed;
	}

	reflectX(){
		this.fwd.x *= -1;
	}

	reflectY(){
		this.fwd.y *= -1;
	}
}