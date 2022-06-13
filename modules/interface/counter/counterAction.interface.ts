
export enum CounterActionType{
    COUNTER_INCREMENT = 'COUNTER_INCREMENT',
    COUNTER_DECREMENT = 'COUNTER_DECREMENT',
    COUNTER_RESET = 'COUNTER_RESET'
}
export type CounterAction = CounterIncrement | CountDecrement | CountReset

export interface CounterIncrement{ type: CounterActionType.COUNTER_INCREMENT }
export interface CountDecrement{ type: CounterActionType.COUNTER_DECREMENT }
export interface CountReset{ type: CounterActionType.COUNTER_RESET }