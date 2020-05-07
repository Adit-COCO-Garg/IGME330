/**
 * Adit Garg
 * Particle System js class
 */
"use strict";

class ParticleSystem{
    constructor(){
        this.particles = [];
    }
    makeParticles(){
        for (let i = 0; i < 100; i++){
            let decideShape = Math.random();
            if (decideShape<=0.5){
               this.particles.push(new Rectangle());
            } else{
                this.particles.push(new Triangle());
            }
        }
    }
    moveParticles(){
        this.particles.forEach(p=>p.updateFunc());
    }
}



