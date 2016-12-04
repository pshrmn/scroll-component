import React from 'react'
import { withScroll } from '../../lib'

const Gallery = () => (
  <div>
    <h1>Gallery</h1>
    <div style={{ width: 200, height: 300, background: 'blue' }}></div>
    <div style={{ width: 200, height: 300, background: 'red' }}></div>
    <div style={{ width: 200, height: 300, background: 'orange' }}></div>
    <div style={{ width: 200, height: 300, background: 'purple' }}></div>
    <div style={{ width: 200, height: 300, background: 'yellow' }}></div>
    <div style={{ width: 200, height: 300, background: 'green' }}></div>
    <div id='below-the-fold'>Nice to see you!</div>
  </div>
)

/*
 * The Gallery component is wrapped with the withScroll
 * higher order component to add automatic scrolling to the
 * fragment identifier when the Gallery component mounts.
 */
export default withScroll(Gallery)
