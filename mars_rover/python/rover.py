class Rover(object):

    x = 0
    y = 0
    orientation = 'N'
    obsX = -1
    obsY = -1

    def __init__(self, start_x, start_y, orientation, obsX=-1, obsY=-1):
        self.x = start_x
        self.y = start_y
        self.orientation = orientation
        self.obsX = obsX
        self.obsY = obsY

    def move(self, movs):
        obstacle = False
        for m in movs:
            if obstacle == True:
                return
            if self.orientation == "N":
                if m == "l":
                    self.orientation = "W"
                elif m == "r":
                    self.orientation = "E"
                elif m == "f":
                    if obstacle := self.detectObstacle(self.x, ((self.y + 1) % 3 + 3) % 3):
                        return
                    self.y = ((self.y + 1) % 3 + 3) % 3
                else:
                    if obstacle := self.detectObstacle(self.x, ((self.y - 1) % 3 + 3) % 3):
                        return
                    self.y = ((self.y - 1) % 3 + 3) % 3
            elif self.orientation == "S":
                if m == "l":
                    self.orientation = "E"
                elif m == "r":
                    self.orientation = "W"
                elif m == "f":
                    if obstacle := self.detectObstacle(self.x, ((self.y - 1) % 3 + 3) % 3):
                        return
                    self.y = ((self.y - 1) % 3 + 3) % 3
                else:
                    if obstacle := self.detectObstacle(self.x, ((self.y + 1) % 3 + 3) % 3):
                        return
                    self.y = ((self.y + 1) % 3 + 3) % 3
            elif self.orientation == "E":
                if m == "l":
                    self.orientation = "N"
                elif m == "r":
                    self.orientation = "S"
                elif m == "f":
                    if obstacle := self.detectObstacle(((self.x + 1) % 3 + 3) % 3, self.y):
                        return
                    self.x = ((self.x + 1) % 3 + 3) % 3
                else:
                    if obstacle := self.detectObstacle(((self.x - 1) % 3 + 3) % 3, self.y):
                        return
                    self.x = ((self.x - 1) % 3 + 3) % 3
            elif self.orientation == "W":
                if m == "l":
                    self.orientation = "S"
                elif m == "r":
                    self.orientation = "N"
                elif m == "f":
                    if obstacle := self.detectObstacle(((self.x - 1) % 3 + 3) % 3, self.y):
                        return
                    self.x = ((self.x - 1) % 3 + 3) % 3
                else:
                    if obstacle := self.detectObstacle(((self.x + 1) % 3 + 3) % 3, self.y):
                        return
                    self.x = ((self.x + 1) % 3 + 3) % 3

    def detectObstacle(self, ox, oy):
        if ox == self.obsX and oy == self.obsY:
            print('Obstacle in X = ' + str(ox) + ', Y = ' + str(oy))
            return True
        else:
            return False
