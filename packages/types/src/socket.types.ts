export enum SocketEvent {
  // Connection
  JOIN_ROOM = 'join:room',
  LEAVE_ROOM = 'leave:room',
  ROOM_UPDATED = 'room:updated',

  // Game flow
  GAME_START = 'game:start',
  TURN_START = 'turn:start',
  DICE_ROLLED = 'dice:rolled',

  // Actions
  BUILD_ROAD = 'build:road',
  BUILD_SETTLEMENT = 'build:settlement',
  BUILD_CITY = 'build:city',
  BUY_DEV_CARD = 'buy:devcard',

  // Trade
  TRADE_OFFERED = 'trade:offered',
  TRADE_ACCEPTED = 'trade:accepted',
  TRADE_DECLINED = 'trade:declined',

  // Updates
  RESOURCES_UPDATED = 'resources:updated',
  BOARD_UPDATED = 'board:updated',
  GAME_ENDED = 'game:ended',

  // Errors
  ERROR = 'error',
}

export interface SocketPayload<T = any> {
  event: SocketEvent;
  data: T;
  timestamp: Date;
}
