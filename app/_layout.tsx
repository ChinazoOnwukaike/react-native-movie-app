import { Stack } from "expo-router";
import { SWRConfig } from "swr";

import "../global.css";

const RootLayout = () => {
  return (
    <SWRConfig>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SWRConfig>
  );
};

export default RootLayout;
