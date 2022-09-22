export interface EdgeInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
declare let actualUseInsets: () => EdgeInsets | undefined;
export declare const connectUseInsets: (hook: typeof actualUseInsets) => void;
declare const useInsets: () => EdgeInsets | undefined;
export default useInsets;
