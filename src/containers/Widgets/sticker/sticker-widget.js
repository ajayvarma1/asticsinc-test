import React, { Component } from 'react';
import { StickerWidgetWrapper } from './style';

export default class extends Component {
  render() {
    const { fontColor, bgColor, width, icon, text , onClick} = this.props;

    const textColor = {
      color: fontColor
    };
    const widgetStyle = {
      backgroundColor: bgColor,
      opacity: .87,
      width: width
    };
    const iconStyle = {
      color: fontColor
    };

    return (
      <StickerWidgetWrapper className="isoStickerWidget" style={widgetStyle} onClick={onClick}>
        <div className="isoIconWrapper">
          <i className={icon} style={iconStyle} />
        </div>
        <div className="isoContentWrapper" style={{"padding":"30px 15px 20px 20px"}}>
          <span className="isoLabel" style={textColor}>
            {text}
          </span>
        </div>
      </StickerWidgetWrapper>
    );
  }
}
