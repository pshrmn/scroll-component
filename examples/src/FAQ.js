import React from 'react'
import ScrollIntoView from '../../lib'

/*
 * The FAQ component uses a ScrollIntoView component to
 * automatically scroll to the fragment identifier when
 * the FAQ component is mounted. It gets the id of the
 * fragment identifier from the hash location, which is
 * passed to the FAQ as a prop.
 */
const FAQ = (props) => (
  <ScrollIntoView id={props.location.hash}>
    <div>
      <div id='who' style={{ height: '250px' }}>
        "Who?" asked the owl.
      </div>
      <div id='what' style={{ height: '250px' }}>
        "What?" was the reply.
      </div>
      <div id="where" style={{ height: '250px' }}>
        "Where?" is this going.
      </div>
      <div id="when" style={{ height: '250px' }}>
        "When?" will this be over.
      </div>
      <div id="why" style={{ height: '250px' }}>
        "Why?" is this even a thing.
      </div>
      <div id="how" style={{ height: '250px' }}>
        "How?" about now.
      </div>
    </div>
  </ScrollIntoView>
)

export default FAQ
