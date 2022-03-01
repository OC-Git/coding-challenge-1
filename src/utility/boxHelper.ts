import { Triplet } from '@react-three/cannon';
import { BoxType } from '../interface';

export const boxHelper = ({ type }: BoxType) => {
  let measurement: Triplet = [0, 0, 0];
  let position: Triplet = [0, 0, 0];

  if (type === 'top') {
    measurement = [12, 0.2, 6];
    position = [0, 24, 0];
  }

  if (type === 'bottom') {
    measurement = [12, 0.2, 6];
    position = [0, 0, 0];
  }

  if (type === 'sidewallLeft') {
    measurement = [0.2, 24, 6];
    position = [-6, 12, 0];
  }

  if (type === 'sidewallRight') {
    measurement = [0.2, 24, 6];
    position = [6, 12, 0];
  }

  return { measurement, position };
};
