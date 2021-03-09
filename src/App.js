import React from 'react';
import { __DATA__ } from "./data";
import {
  MainContainer,
  Container,
  BarHeader,
  BarTitle,
  BarChartContainer,
  InfoIcon,
  DropDown,
  Number,
  SettingButton,
  Oval,
  Icon,
  MakeBar
} from "./styles";
import DownArrow from './left-copy-3.svg';
import InfoCircle from './assets/img/info_icon.png';
import SettingIcon from './assets/img/settings-icon-vector.png';
import $ from 'jquery';

export default function App() {
  const [selected, setSelected] = React.useState("");
  /** Function that will set different values to state variable 
   * based on which dropdown is selected 
   */
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };
  const root = [0, 1, 2, 3, 4, 5, 6];
  $(function(e) {
  /** Setting Type variable according to dropdown */
    if (selected === "All") {
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node1") {
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node2") {
      $("#node5,#node6").animate({
        height: root[0],
        opacity: 0
      });
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node3") { 
      $("#node1,#node2,#node4,#node5,#node6").animate({
        height: root[0],
        opacity: 0
      });
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node4") {
      $("#node1,#node2,#node3,#node5,#node6").animate({
        height: root[0],
        opacity: 0
      });
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node5") {
      $("#node2,#node3,#node4").animate({
        height: root[0],
        opacity: 0
      });
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    } else if (selected === "node6") {
      $("#node1,#node2,#node3,#node4,#node5").animate({
        height: root[0],
        opacity: 0
      });
      $(".sc-fubCfw .sc-kEjbxe").removeAttr('style');
    }
  });
  return (
    <Container>
      <BarHeader>
        <BarTitle>Flow dropout per step and service <InfoIcon><img src={InfoCircle} alt="Info Icon" /></InfoIcon></BarTitle>        
        <DropDown id="DropDown">
          <select id="Select_DropDown" onChange={changeSelectOptionHandler}>
            <option disabled selected>Choose branches</option>
            {__DATA__.map(({ adjList }) => (
              <option key={adjList} value={adjList}>
                {adjList}                            
              </option>
            ))}
          </select>
        </DropDown>
        <SettingButton><img src={SettingIcon} alt="Setting Button" /></SettingButton>
      </BarHeader>
      <MainContainer>
        {__DATA__.map(({ id, label, value, oval, colors, background }, i) => {
          return (
            <BarChartContainer key={i}>
              <MakeBar id={id} height={value} background={background} label={label}></MakeBar>
              <Oval title={oval + '%'}><Icon src={DownArrow} alt="Down Arrow" /></Oval>
              <Number color={colors[1]}>{value} %</Number>
            </BarChartContainer>
          );
        })}
      </MainContainer>
    </Container>
  );
}