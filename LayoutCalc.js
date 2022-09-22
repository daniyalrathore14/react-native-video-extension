import { Dimensions } from 'react-native';
import { calculateRotationDegree, getAspectRatio, GUTTER_PERCENT, GUTTER_PX, isZeroInsets, } from './utils';
export const OrientationLocker = new (class OrientationLocker {
    constructor() {
        this.isPortraitLocked = false;
    }
})();
export const Device = ({ width, height }) => {
    const isLandscape = width > height;
    if (OrientationLocker.isPortraitLocked) {
        return {
            width,
            height,
        };
    }
    return {
        width: isLandscape ? height : width,
        height: isLandscape ? width : height,
    };
};
export const Gap = ({ insets, fullscreen, isLandscape }) => {
    if (!fullscreen || !insets || (insets && isZeroInsets(insets))) {
        return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };
    }
    if (OrientationLocker.isPortraitLocked) {
        if (isLandscape) {
            return {
                left: insets.top > 20 ? insets.top : 0,
                right: insets.bottom,
                top: 0,
                bottom: 0,
            };
        }
        return {
            left: 0,
            right: 0,
            top: insets.top > 20 ? insets.top : 0,
            bottom: insets.bottom,
        };
    }
    return {
        left: insets.left,
        right: insets.right,
        top: insets.top,
        bottom: insets.bottom,
    };
};
export const getPlayerWidth = (windowSize, info) => {
    const gap = Gap(info);
    const device = Device(windowSize);
    const { isLandscape: isLandscapeVideo, fullscreen } = info;
    if (OrientationLocker.isPortraitLocked) {
        return isLandscapeVideo && fullscreen
            ? device.height - gap.left - gap.right
            : device.width;
    }
    if (fullscreen) {
        const isLandscapeDevice = windowSize.width > windowSize.height;
        if (isLandscapeDevice) {
            return isLandscapeVideo
                ? device.height - gap.left - gap.right
                : device.width;
        }
        return isLandscapeVideo
            ? device.height - gap.top - gap.bottom
            : device.width;
    }
    return windowSize.width;
};
export const getPlayerHeight = (windowSize, info) => {
    const gap = Gap(info);
    const device = Device(windowSize);
    const { isLandscape, fullscreen, aspectRatio } = info;
    const isLandscapeDevice = windowSize.width > windowSize.height;
    if (OrientationLocker.isPortraitLocked) {
        if (fullscreen) {
            return isLandscape ? device.width : device.height - gap.top - gap.bottom;
        }
        return device.width / getAspectRatio(aspectRatio);
    }
    if (fullscreen) {
        if (isLandscapeDevice && !isLandscape) {
            return device.height - gap.left - gap.right;
        }
        return isLandscape ? device.width : device.height - gap.top - gap.bottom;
    }
    return windowSize.width / getAspectRatio(aspectRatio);
};
export const getPlayerSize = (windowSize, info) => {
    const width = getPlayerWidth(windowSize, info);
    const height = getPlayerHeight(windowSize, info);
    return {
        width,
        height,
        ...getPlayerMargin(windowSize, info),
    };
};
export const getPlayerMargin = (windowSize, info) => {
    const { fullscreen, isLandscape } = info;
    const isLandscapeDevice = windowSize.width > windowSize.height;
    const gap = Gap(info);
    if (OrientationLocker.isPortraitLocked) {
        return {
            marginTop: fullscreen && !isLandscape ? gap.top : 0,
            marginLeft: fullscreen && isLandscape ? (gap.left + gap.right) / 2 : 0,
        };
    }
    if (fullscreen) {
        if (isLandscapeDevice) {
            return {
                marginTop: !isLandscape ? (gap.left + gap.right) / 2 : 0,
                marginLeft: isLandscape ? (gap.left + gap.right) / 2 : 0,
            };
        }
        return {
            marginTop: !isLandscape ? (gap.top + gap.bottom) / 2 : 0,
            marginLeft: isLandscape ? (gap.top + gap.bottom) / 2 : 0,
        };
    }
    return {};
};
export const getPlayerRotationDegree = (windowSize, info) => {
    const { fullscreen, isLandscape } = info;
    if (!fullscreen) {
        return 0;
    }
    if (OrientationLocker.isPortraitLocked) {
        return calculateRotationDegree(isLandscape, fullscreen);
    }
    if (isLandscape) {
        return windowSize.height > windowSize.width ? 90 : 0;
    }
    return windowSize.height > windowSize.width ? 0 : 90;
};
export const getPlayerTranslate2D = (windowSize, info) => {
    const device = Device(windowSize);
    const { isLandscape: isLandscapeVideo, fullscreen } = info;
    const shouldRotate = isLandscapeVideo && fullscreen;
    const offset = (device.height - device.width) / 2;
    if (OrientationLocker.isPortraitLocked) {
        return [
            { translateY: shouldRotate ? offset : 0 },
            { translateX: shouldRotate ? -offset : 0 },
        ];
    }
    if (fullscreen) {
        const isLandscapeDevice = windowSize.width > windowSize.height;
        if (isLandscapeDevice) {
            return [
                { translateY: isLandscapeVideo ? 0 : -offset },
                { translateX: isLandscapeVideo ? 0 : offset },
            ];
        }
        return [
            { translateY: isLandscapeVideo ? offset : 0 },
            { translateX: isLandscapeVideo ? -offset : 0 },
        ];
    }
    return [];
};
// todo: write test getAutoFitSeekDiff
export const getAutoFitSeekDiff = (fullscreen, isLandscapeVideo) => {
    const { width, height } = Dimensions.get('window');
    if (fullscreen || true) {
        if (OrientationLocker.isPortraitLocked) {
            return isLandscapeVideo ? 'dy' : 'dx';
        }
        if (width > height) {
            // isLandscapeDevice
            return isLandscapeVideo ? 'dx' : 'dy';
        }
        else {
            // isPortraitDevice
            return isLandscapeVideo ? 'dy' : 'dx';
        }
    }
    return 'dx';
};
// todo: write test getContainSeekDiff
export const getContainSeekDiff = (fullscreen) => {
    if (fullscreen) {
        if (OrientationLocker.isPortraitLocked) {
            return fullscreen === 'PORTRAIT' ? 'dx' : 'dy';
        }
    }
    return 'dx';
};
export const getExitFullscreenOffset = (isLandscape, insets) => {
    if (!isLandscape) {
        if (insets && !isZeroInsets(insets)) {
            return {
                bottom: 48,
                right: GUTTER_PX,
            };
        }
        return {
            bottom: 72,
            right: GUTTER_PX / 2,
        };
    }
    // for Landscape Video
    if (insets) {
        return {
            bottom: 56,
            right: GUTTER_PX / 2,
        };
    }
    return {
        bottom: 56,
        right: `${GUTTER_PERCENT}%`,
    };
};
