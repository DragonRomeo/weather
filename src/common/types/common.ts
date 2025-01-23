import { SxProps, Theme } from "@mui/material";

export type lang = 'en' | 'ru';

export interface SxStyles {
    [key: string]: SxProps<Theme>;
  }
