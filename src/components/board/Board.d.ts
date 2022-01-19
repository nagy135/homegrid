import {TIndexes, TItemDefinition} from '../../App.d';

export type TBoardState = {
  items: TItemDefinition,
  indexes: TIndexes,
}

export type TPieceSizeHolder = {
  x: number;
  y: number;
  x2: number; // the other corner x
  y2: number; // the other corner y
};
