// Code ThemedDecoration Component Here
import React from 'react';


class ThemedDecoration extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    });

    return (
      <div className={this.props.theme}>
        {childrenWithWrapperDiv}
      </div>
    )
  }
}

export default ThemedDecoration;
