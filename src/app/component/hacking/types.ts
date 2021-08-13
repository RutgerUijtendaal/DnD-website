export type GridConfig = {
  gridSize: number;
  maxAttempts?: number;
};

export type SequenceConfig = {
  sequenceLength: number;
};

export type BufferConfig = {
  bufferSize: number;
};

export type TimerConfig = {
  maxTimeSeconds: number;
};

export type TimerUpdate = {
  state: TimerState;
  left: number;
}

export type GameConfig = GridConfig | SequenceConfig | BufferConfig | TimerConfig;

export declare type TimerState = 'start' | 'paused' | 'progress' | 'finished'
export declare type SequenceState = 'start' | 'progress' | 'finished' | 'failure' | 'success';
export declare type GameState = 'timeout' | SequenceState;
export declare type GridState = 'row' | 'column' | 'disabled';
