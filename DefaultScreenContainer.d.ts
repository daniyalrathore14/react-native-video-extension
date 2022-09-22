import React, { ComponentType } from 'react';
export declare type DefaultScreenContainerProps = {};
declare const withDefaultScreenContainer: <P>(Component: React.ComponentType<P>) => {
    (props: P): JSX.Element;
    displayName: string;
};
export default withDefaultScreenContainer;
