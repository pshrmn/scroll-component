import React from 'react'

export default class ScrollIntoView extends React.Component {

  static defaultProps = {
    alignToTop: true
  }

  componentDidMount() {
    this.scroll()
  }

  componentDidUpdate() {
    this.scroll()
  }

  scroll() {
    const { id, alignToTop } = this.props
    if (!id) {
      return
    }

    const element = document.querySelector(id)
    if (element && element.scrollIntoView) {
      element.scrollIntoView(alignToTop)
    }
  }

  render() {
    return this.props.children ? this.props.children : null;
  }
}
