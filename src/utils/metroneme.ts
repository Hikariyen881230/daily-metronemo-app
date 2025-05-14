export const getCurrentTimeIntervals = ({ bpm, note }: { bpm: number, note: number }) => {
    const basicInterval = 60 / bpm;
    if (note === 4) {
        return basicInterval * 1000; // 轉為毫秒
    } else if (note === 8) {
        return basicInterval * 0.5 * 1000;
    }
    return 1000
};