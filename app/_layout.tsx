import { Stack } from "expo-router";
import { SWRConfig } from "swr";

import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <SWRConfig>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SWRConfig>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
