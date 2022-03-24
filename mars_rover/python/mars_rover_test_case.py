import unittest

from rover import Rover

"""
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
                   
"""


class MarsRoverTestCase(unittest.TestCase):
    def test_rover_move_forward(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['f']
        expected_position = (1, 2)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)

    def test_rover_turn_left(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['l']
        expected_orientation = 'W'
        rover.move(movements)

        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_turn_right(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['r']
        expected_orientation = 'E'
        rover.move(movements)

        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_turn_right_and_forward(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['r', 'f', 'f']
        expected_orientation = 'E'
        expected_position = (0, 1)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_turn_left_and_forward(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['l', 'f', 'f']
        expected_orientation = 'W'
        expected_position = (2, 1)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_around_mars(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['f', 'f']
        expected_orientation = 'N'
        expected_position = (1, 0)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_around_mars_backwards(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['b', 'b']
        expected_orientation = 'N'
        expected_position = (1, 2)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_around_mars_facing_east(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['r', 'f', 'f']
        expected_orientation = 'E'
        expected_position = (0, 1)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_around_mars_facing_west(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N'
        )

        movements = ['l', 'f', 'f']
        expected_orientation = 'W'
        expected_position = (2, 1)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_to_an_obstacle(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N',
            obsX=0,
            obsY=2
        )

        movements = ['l', 'f', 'r', 'f']
        expected_orientation = 'N'
        expected_position = (0, 1)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def test_rover_go_to_an_obstacle_turning_and_backwards(self):
        rover = Rover(
            start_x=1,
            start_y=1,
            orientation='N',
            obsX=2,
            obsY=0
        )

        movements = ['r', 'b', 'l', 'b', 'b', 'f', 'r', 'b']
        expected_orientation = 'E'
        expected_position = (0, 0)
        rover.move(movements)

        self.assert_rover_position(expected_position, rover)
        self.assert_rover_orientation(expected_orientation, rover)

    def assert_rover_position(self, expected_position, rover):
        self.assertEqual(expected_position[0], rover.x)
        self.assertEqual(expected_position[1], rover.y)

    def assert_rover_orientation(self, expected_orientation, rover):
        self.assertEqual(expected_orientation, rover.orientation)
