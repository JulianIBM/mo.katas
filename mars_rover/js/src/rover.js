class Rover {
  constructor(x, y, orientation, obsX = -1, obsY = -1 ) {
    this.x = x
    this.y = y
    this.orientation = orientation
    this.obsX = obsX
    this.obsY = obsY
  }

  move(movs) {
    let obstacle = false;
    
    movs.forEach(m => {
      if(obstacle === true) return;
      if (m === "f") {
        switch (this.orientation) {
          case 'N':
            if (obstacle = this.detectObstacle(this.x, ((this.y + 1) % 3 + 3) % 3)) {
              return; 
            }
            this.y += 1;
            this.y = (this.y % 3 + 3) % 3;
            break;
          
          case 'E':
            if (obstacle = this.detectObstacle(((this.x + 1) % 3 + 3) % 3, this.y)) {
              return; 
            }
            this.x += 1;
            this.x = (this.x % 3 + 3) % 3;
            break;
          
          case 'S':
            if (obstacle = this.detectObstacle(this.x, ((this.y - 1) % 3 + 3) % 3)) {
              return; 
            }
            this.y -= 1;
            this.y = (this.y % 3 + 3) % 3;
            break;
          
          case 'W':
            if (obstacle = this.detectObstacle(((this.x - 1) % 3 + 3) % 3, this.y)) {
              return; 
            }
            this.x -= 1;
            this.x = (this.x % 3 + 3) % 3;
            break;
        }
      } else if (m === "b") {
        switch (this.orientation) {
          case 'N':
            if (obstacle = this.detectObstacle(this.x, ((this.y - 1) % 3 + 3) % 3)) {
              return; 
            }
            this.y -= 1
            this.y = (this.y % 3 + 3) % 3;
            break;
          
          case 'E':
            if (obstacle = this.detectObstacle(((this.x - 1) % 3 + 3) % 3, this.y)) {
              return; 
            }
            this.x -= 1;
            this.x = (this.x % 3 + 3) % 3;
            break;
          
          case 'S':
            if (obstacle = this.detectObstacle(this.x,  ((this.y + 1) % 3 + 3) % 3)) 
            {
              return; 
            }
            this.y += 1;
            this.y = (this.y % 3 + 3) % 3;
            break;
          
          case 'W':
            if (obstacle = this.detectObstacle(((this.x + 1) % 3 + 3) % 3, this.y)) {
              return; 
            }
            this.x += 1;
            this.x = (this.x % 3 + 3) % 3;
            break;
        }
        
      } else if (m === "l" || m === "r") {
        this.turn(m);
      }
    })
  }

  turn(direction) {
    const dir = ['N', 'E', 'S', 'W'];

    if(direction === "l") {
      this.orientation = dir[(dir.indexOf(this.orientation) % dir.length + dir.length - 1) % dir.length];
    } else {
      this.orientation = dir[(dir.indexOf(this.orientation) % dir.length + dir.length + 1) % dir.length];
    }
  }

  detectObstacle(ox, oy) {
    if (ox === this.obsX && oy === this.obsY) {
      console.log("Obstacle in X = " + ox + ", Y = " + oy);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Rover
