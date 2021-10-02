// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box(props) {
  let sizeClass;
  if( props.size === 'small') {
    sizeClass = 'box--small';
  } else if (props.size === 'medium') {
    sizeClass = 'box--medium';
  } else if ( props.size === 'large') {
    sizeClass = 'box--large';
  }
  return <div className={`box ${sizeClass}`} style={{fontStyle: 'italic', ...props.style}}>{props.children}</div>
}

const smallBox = <Box size='small' style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size='medium' style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size='large' style={{backgroundColor: 'orange'}}>large orange box</Box>
// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
