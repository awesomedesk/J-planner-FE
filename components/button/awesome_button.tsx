"use client";

import { useSelector } from 'react-redux';
import { ThemeStateType } from '@components/theme/theme_color';
import styles from '@components/button/awesome_button.module.css'
import { getThemeState } from "@utils/store/slices/mainThemeSlice";

enum ButtonSize {
  mini,
  normal,
  full
};

enum ButtonType {
  dark,
  normal,
  light,
};

export type ButtonProps = {
  size? : ButtonSize,
  type? : ButtonType,
  onClick? : Function,
  style? : string,
  disable? : boolean,
  text? : string,
};

type ButtonColor = {
  label:string,
  background:string,
};

function getButtonColor(props: ButtonProps, curTheme: ThemeStateType) {
  return '';
};

function getOnclickColor(props: ButtonProps, curTheme: ThemeStateType) {

};

function getButtonSize(props: ButtonProps) {
  return '';
};

const defaultButton :ButtonProps = {
  size : ButtonSize.normal,
  type : ButtonType.normal,
  onClick : function(){console.log("button click!")},
  style : "",
  disable : false,
  text : "버튼",
};

export default function AwesomeButton (props : ButtonProps
) {

  const buttonSizeStyle = getButtonSize(props);

  const currentTheme = useSelector(getThemeState);
  console.log(currentTheme);
  const buttonColorStyle = getButtonColor(props, currentTheme);

  return (
    <div className={"awesome_button button-outline" + `${styles[buttonSizeStyle]}`}>
      <button className="black">test button</button>
      {/* <button 
        className={`${styles[buttonColorStyle]}`}
        disabled={props.disable} 
      >
        {props.text}
      </button> */}
    </div>
  );
};

