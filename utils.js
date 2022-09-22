const HOUR = 60 * 60;
const MINUTE = 60;
export const GUTTER_PERCENT = 5;
export const GUTTER_PX = 24;
export const isZeroInsets = (insets) => Object.entries(insets).every(([, value]) => value === 0);
const twoChar = (number) => Math.floor(number).toString().length === 1
    ? `0${Math.floor(number)}`
    : `${Math.floor(number)}`;
export const toTimeView = (sec) => {
    let secLeft = sec;
    const hr = Math.floor(sec / HOUR);
    secLeft = secLeft - hr * HOUR;
    const minute = Math.floor(secLeft / MINUTE);
    secLeft = secLeft - minute * MINUTE;
    if (hr && minute) {
        return `${hr}:${twoChar(minute)}:${twoChar(secLeft)}`;
    }
    if (hr && !minute) {
        return `${hr}:00:${twoChar(secLeft)}`;
    }
    if (minute) {
        return `${minute}:${twoChar(secLeft)}`;
    }
    return `0:${twoChar(secLeft)}`;
};
export const getSecondsToSeek = (duration, currentTime, seekerWidth, diffWidth, thumbRadius) => {
    const actualWidth = seekerWidth - 2 * thumbRadius;
    const result = currentTime + (diffWidth / actualWidth) * duration;
    if (result >= duration)
        return duration - 0.1;
    return result <= 0 ? 0.1 : result;
};
export const getThumbPosition = (duration, currentTime, seekerWidth, thumbRadius) => {
    if (!duration || !seekerWidth)
        return thumbRadius;
    const actualWidth = seekerWidth - 2 * thumbRadius;
    return (thumbRadius +
        (currentTime > duration ? 1 : currentTime / duration) * actualWidth);
};
export const calculateRotationDegree = (isLandscape, fullscreen) => {
    if (!isLandscape)
        return 0;
    if (fullscreen === 'LANDSCAPE-LEFT')
        return 90;
    if (fullscreen === 'LANDSCAPE-RIGHT')
        return -90;
    return 0;
};
export const getAspectRatio = (ratio) => {
    if (typeof ratio === 'number')
        return ratio;
    if (ratio === 'portrait')
        return 3 / 4;
    return 16 / 9;
};
