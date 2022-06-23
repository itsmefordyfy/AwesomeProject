import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function navigateToTab({
  index,
  routeName,
}: {
  index?: number;
  routeName: string;
}) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: index || 0,
      routes: [{name: routeName}],
    }),
  );
}

export default {
  navigate,
  goBack,
  replace,
  navigateToTab,
};
