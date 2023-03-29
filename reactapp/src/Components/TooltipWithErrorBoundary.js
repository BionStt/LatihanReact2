import React, { Component } from 'react'      
class TooltipWithErrorBoundary extends Component {    
  constructor(props) {    
    super(props)    
    this.state = { hover: false }    
  }        
  handleMouseIn() {    
    this.setState({ hover: true })    
  }        
  handleMouseOut() {    
    this.setState({ hover: false })    
  }        
  render() {    
    const tooltipStyle = {    
      display: this.state.hover ? 'block' : 'none'    
    }    
    return (      
      <div>    
        {/* <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut1.bind(this)}>on hover here we will show the tooltip</div>     */}
        <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>on hover here we will show the tooltip</div>    
        <div>    
          <div style={tooltipStyle}>this is the tooltip!!</div>    
        </div>    
      </div>    
    );    
  }    
}      
export default TooltipWithErrorBoundary;    