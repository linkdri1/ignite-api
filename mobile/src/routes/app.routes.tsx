import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg' 
import ProfileSvg from '@assets/profile.svg'

import { Home } from '@screens/Home';
import { History } from '@screens/History';
import { Profile} from '@screens/Profile';
import { Exercises } from '@screens/Exercises';
import { color } from 'native-base/lib/typescript/theme/styled-system';

type AppRoutes = {
    home: undefined;
    exercises: {exerciseId: string };
    profile: undefined;
    history: undefined;
}

export type appNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes(){
    const { sizes, colors } = useTheme();

    const iconSize = sizes [6];

    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.green[200],
            tabBarStyle: { 
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]

             },
        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />

            <Screen
                name="history"
                component={History}
                options={{
                    tabBarIcon: ({color}) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />

            <Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({color}) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
                    )
                }}
            />

            <Screen
                name="exercises"
                component={Exercises}
                options={{tabBarButton:() => null }}
            />
        </Navigator>
    );
}