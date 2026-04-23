import type { InjectionKey, Ref } from "vue";

export interface GameFindingTimeline_PointData
{
    id: symbol;
    date: string;
}

export const GameFindingTimeline_InjectionKey: InjectionKey<{
    registerPoint(point: GameFindingTimeline_PointData): void;
    unregisterPoint(id: symbol): void;
    points: Ref<GameFindingTimeline_PointData[]>;
    getDayDifference(date1: string, date2: string): number;
}> = Symbol('GameFindingTimeline_InjectionKey');


export enum GameFindingTimeline_Level
{
    Major = 'major',
    Minor = 'minor',
    Patch = 'patch',
}

export const GameFindingTimeline_LevelNames: Record<GameFindingTimeline_Level, string> = {
    [GameFindingTimeline_Level.Major]: 'Major update',
    [GameFindingTimeline_Level.Minor]: 'Minor update',
    [GameFindingTimeline_Level.Patch]: 'Patch',
};

export const GameFindingTimeline_Level_InjectionKey: InjectionKey<Ref<GameFindingTimeline_Level>> = Symbol('GameFindingTimeline_Level_InjectionKey');