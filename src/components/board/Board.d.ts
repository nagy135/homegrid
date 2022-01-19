import {TIndexes, TItemDefinition} from '../../App.d';

export type TBoardState = {
  items: TItemDefinition,
  indexes: TIndexes,
}

export type TPieceSizeHolder = {
  x: number;
  y: number;
  width: number;
  height: number;
};
