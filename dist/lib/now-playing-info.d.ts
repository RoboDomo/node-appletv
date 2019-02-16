export declare class NowPlayingInfo {
    message: any;
    duration: number;
    elapsedTime: number;
    title: string;
    artist: string;
    album: string;
    appDisplayName: string;
    appBundleIdentifier: string;
    playbackState: NowPlayingInfo.State;
    timestamp: number;
    constructor(message: any);
    percentCompleted(): string;
    toString(): string;
}
export declare namespace NowPlayingInfo {
    enum State {
        Playing = "playing",
        Paused = "paused",
    }
}
