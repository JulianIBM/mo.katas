const Rover = require('../src/rover');


/*
Mars rover moves through


                       N
        --------------------------------
        |   0,2   |   1,2   |   2,2    |
        --------------------------------
    W   |   0,1   |   1,1   |   2,1    |    E
        --------------------------------
        |   0,0   |   1,0   |   2,0    |
        --------------------------------
                       S

*/

describe('Rover', () => {
  it('starts at a given position and orientation', () => {
    let rover = new Rover(0, 0, 'N')

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })

  describe('facing north', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })

    it('turns left', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns right', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns right and forward', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['r', 'f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns right and backward', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['r', 'b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('go around mars', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['f', 'f', 'f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('go around mars backwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['b', 'b', 'b', 'b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })

    it('go around mars forward facing east', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['r', 'f', 'f', 'f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('go around mars backwards facing west', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['l', 'b', 'b', 'b', 'b', 'b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('go to an obstacle', () => {
      let rover = new Rover(0, 0, 'N', 0, 2)

      rover.move(['f', 'f', 'f', 'f', 'f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    it('go to an obstacle turning', () => {
      let rover = new Rover(0, 0, 'N', 1, 1)

      rover.move(['f', 'f', 'l', 'f', 'l', 'f', 'r', 'f'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('W')
    })

    it('go to an obstacle turning and backwards', () => {
      let rover = new Rover(0, 0, 'N', 2, 2)

      rover.move(['b', 'l', 'b', 'r', 'b', 'b', 'l', 'b', 'r', 'b', 'b', 'b', 'b', 'b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('go to an obstacle turning and backwards', () => {
      let rover = new Rover(2, 2, 'E', 2, 0)

      rover.move(['f', 'r', 'f', 'l', 'f', 'r', 'f', 'r', 'f', 'f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })
  });

})
