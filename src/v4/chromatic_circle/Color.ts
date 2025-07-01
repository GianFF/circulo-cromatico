import { ColorMixer } from "./ColorMixer";
import { PrimaryColorMixer } from "./PrimaryColorMixer";

export interface Color extends ColorMixer, PrimaryColorMixer { }
