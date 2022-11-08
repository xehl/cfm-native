import { registerRootComponent } from "expo";
import { AppRegistry, Platform } from "react-native";
import App from "./App";
import TrackPlayer from "react-native-track-player";
TrackPlayer.registerPlaybackService(() => require("./service"));
// import { name as appName } from "./app.json";
// AppRegistry.registerComponent(appName, () => MyApp);

// AppRegistry.registerComponent("cfm", () => App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);

// if (Platform.OS === "web") {
//   const rootTag =
//     document.getElementById("root") || document.getElementById("main");
//   AppRegistry.runApplication("main", { rootTag });
// }
