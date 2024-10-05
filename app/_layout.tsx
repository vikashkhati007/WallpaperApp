import { Slot, Tabs } from "expo-router";
import { View } from "react-native";

import React from 'react';
import type { SVGProps } from 'react';

export function SolarHomeAngleLinear(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z"></path><path strokeLinecap="round" d="M15 18H9"></path></g></svg>);
}


export default function Layout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <SolarHomeAngleLinear name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            tabBarIcon: ({ color }) => <SolarHomeAngleLinear  name="cog" color={color} />,
          }}
        />
      </Tabs>
    )
}