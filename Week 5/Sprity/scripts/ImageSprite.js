	
	// #3 - Inheritance example. Note that `RingSprite` is using all the methods of Sprite 
	// except for `draw()`, which it is replacing (overriding) with its own implementation
	class ImageSprite extends Sprite{
		draw(ctx){
			ctx.save();
			ctx.drawImage(spriteImage, this.x, this.y,125,62.5);
			ctx.restore();
		}
		
	}