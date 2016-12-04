import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Link } from 'react-router'

import Gallery from './Gallery'
import FAQ from './FAQ'

const App = () => (
  <div>
    <Nav />
    <Match pattern='/' exactly component={Home} />
    <Match pattern='/faq' component={FAQ} />
    <Match pattern='/gallery' component={Gallery} />
  </div>
)

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

const Nav = () => (
  <ul>
    <li>
      <Link to='/faq'>Frequently Asked Questions</Link>
      <ul>
        <li>
          <Link to='/faq#who'>Who?</Link>
        </li>
        <li>
          <Link to='/faq#what'>What?</Link>
        </li>
        <li>
          <Link to='/faq#where'>Where?</Link>
        </li>
        <li>
          <Link to='/faq#when'>When?</Link>
        </li>
        <li>
          <Link to='/faq#why'>Why?</Link>
        </li>
        <li>
          <Link to='/faq#how'>How?</Link>
        </li>
      </ul>
    </li>
    <li>
      <Link to='/gallery'>Gallery</Link>
      <ul>
        <li>
          <Link to='/gallery#below-the-fold'>Below the Fold</Link>
        </li>
      </ul>
    </li>
  </ul>
)

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
