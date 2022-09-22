let actualUseInsets = () => undefined;
export const connectUseInsets = (hook) => {
    actualUseInsets = hook;
};
const useInsets = () => actualUseInsets();
export default useInsets;
