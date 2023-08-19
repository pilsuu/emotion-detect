import { atom } from "recoil";

export const currentLocation = atom({
  key: "currentLoc",
  default: "/",
});

export const isCaptured = atom({
  key: "isCap",
  default: false,
});

// camera, HomePage
export const detectResult = atom({
  key: "detectRes",
  default: [],
});

export const needDetectStop = atom({
  key: "needStop",
  default: false,
});

export const faceImage = atom({
  key: "faceImg",
  default: "",
});

export const isHome = atom({
  key: "homeChecker",
  default: false,
});

export const autoPromt = atom({
  key: "advicePromt",
  default: "hello from prompt",
});

export const authTokens = atom({
  key: "authTokens",
  default: "",
});

export const test = atom({
  key: "test",
  default: "test123",
});
