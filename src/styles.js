import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1300px;
  height: 523px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #ffffff;
  padding-bottom: 4em;
  box-shadow: 2px 5px 25px #e4e4e4;
  border-radius: 10px;
`;

export const BarHeader = styled.div`
  padding: 0 20px;
  height: 62px;
  display: flex;
  border-top-left-radius: 10px;
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom: solid 1px #ecf2ff;
  margin-bottom: 40px;
`;

export const BarTitle = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  color: #323a44;
  display: flex;
  padding: 1em 0;
`;

export const DropDown = styled.div`
  position: relative;
  padding: 0.666em 0;
  margin-left: auto;
  #Select_DropDown {
    padding: 8px 13px 8px 11px;
    background: #ececec;
    color: #323a44;
    border: 0;
    font-size: 12px;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    border-radius: 6px;
  }
  label {
    padding: 8px 13px 8px 11px;
    background: #ececec;
    color: #323a44;
    font-size: 12px;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
    border-radius: 6px;
  }
  ul {
    list-style: none;
    position: absolute;
    left: 0;
    padding: 0;
    visibility: hidden;
    margin: 8px 0;
    li {
        background: #ececec;
        font-size: 12px;
        width: 100px;
        color: #343838;
        font-family: 'Rubik', sans-serif;
        overflow: hidden;
        cursor: pointer;
        transition: height 0.1s linear 0s;
        padding: 8px 16px;
        &:hover,
        &.selected {
            background: #d7ebff;
            color: #343838;
        }
    }
  }
  &:hover ul li {
    visibility: visible;
  }
`;

export const Select  = styled.div`
  position: relative;
  padding: 0.666em 0;
  margin-left: auto;
  padding: 8px 13px 8px 11px;
  width: 20%;
  background: #ececec;
  color: #323a44;
  border: 0;
  font-size: 12px;
  width: 30%;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  border-radius: 6px;
  &.css-2b097c-container {
    width: 30%;
  }
`;

export const SettingButton  = styled.div`
  width: 20px;
  height: 20px;
  margin: 11.22px 0 0 15px;
  padding: 5px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ececec;
  text-align: center;
  background-color: #ececec;
  img {    
    width: 18px;
    padding: 0.0222em 0;
  }
`;

export const InfoIcon  = styled.div`
  background-color: #f2f2f2;
  width: 20px;
  cursor: pointer;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  margin: 1.8px 0 0 15px;
  img {
    width: 12px;
    padding: 0.2333em 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1130px;
  height: 100%;
  margin: 0 0 0 3em;
`;

export const BarChartContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  justify-content: center;
`;

export const Chart = css`
  margin-top: 0;
  color: #323a44;  
  font-size: 18px; 
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number = styled.span`  
  text-align: center;  
  font-size: 18px;
  position: absolute;
  bottom: -35px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  color: ${(props) => props.color};
`;

export const Text = styled.div`
  margin-top: 0;
  display: flex;  
  align-items: center;
  transform: rotate(270deg);
  height: 100%;
  justify-content: center;
  ${Chart};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  width: 80px;
  text-align: center;
  background-color: ${(props) => props.background};
  &::before {
    content: attr(label);
    align-items: center;    
    justify-content: center;
    transform: rotate(-90deg);
    font-size: 18px;
    color: #323a44;
    width: 245px;
    position: relative;
    left: -82px;
    font-family: 'Rubik', sans-serif;   
    height: 100%;
    display: flex;
  }
  ${Chart};
`;

export const Oval = styled.div`
  &::before {
    content: attr(title);
    position: absolute;
    top: 62px;
    color: #9b9b9b;
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    left: 0px;    
    right: 0;
  }
  justify-content: center;
  text-align: center;
  position: absolute;
  right: -85px;
  width: 50px;
  height: 50px;
  background-color: #e3e3e3;
  border-radius: 100px;  
  align-items: center;
  vertical-align: middle;
`;

export const Icon = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;