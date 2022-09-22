import React, { useContext } from 'react';
import ScreenContainer, { ctx } from './ScreenContainer';
const DefaultScreenContainer = ({ children, }) => {
    const result = useContext(ctx);
    if (!result) {
        return <ScreenContainer>{children}</ScreenContainer>;
    }
    return <>{children}</>;
};
const withDefaultScreenContainer = (Component) => {
    function WrappedComponent(props) {
        return (<DefaultScreenContainer>
        <Component {...props}/>
      </DefaultScreenContainer>);
    }
    WrappedComponent.displayName =
        Component.displayName || 'withDefaultScreenContainer';
    return WrappedComponent;
};
export default withDefaultScreenContainer;
