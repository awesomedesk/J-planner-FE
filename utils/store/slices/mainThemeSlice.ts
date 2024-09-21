import { greenColorTheme, ThemeStateType } from "@components/theme/theme_color";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const defaultTheme:ThemeStateType = {
  themeColor: greenColorTheme, dark: false 
};

export const mainThemeSlice = createSlice({
  name: 'mainTheme',
  initialState:defaultTheme,
  reducers: {
    setDarkThemeState:(state) => {
      state.dark = true;
    },
    setLightThemeState:(state) => {
      state.dark = false;
    },
    setThemeColor:(state, action:PayloadAction<ThemeStateType>) => {
      state.themeColor = action.payload.themeColor;
    },
  },
})

export const {setDarkThemeState, setLightThemeState, setThemeColor} = mainThemeSlice.actions
export const getThemeState = (state:ThemeStateType) => state;
export const getColorState = (state:ThemeStateType) => state.themeColor;
export const getDarkState = (state:ThemeStateType) => state.dark;
export default mainThemeSlice.reducer;
