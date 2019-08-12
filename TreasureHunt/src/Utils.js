import {NativeModules} from "react-native";

export function hardWork(val) {
  let counter;
  for (let i = 0; i < 2000000000; i++) {
    counter++;
  }
  return val + 1;
}

export async function nativeHardWork() {
  await NativeModules.HardWorkerModule.work();
}
