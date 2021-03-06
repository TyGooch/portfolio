import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Transition from "../components/transition"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/pro-solid-svg-icons"
import { far } from "@fortawesome/pro-regular-svg-icons"
import { fal } from "@fortawesome/pro-light-svg-icons"

import "./layout.css"

library.add(fab, fas, far, fal)

const Layout = ({ children, location }) => (
  <Transition
    shouldAnimate={location.state && location.state.shouldAnimate}
    location={location}
  >
    {children}
  </Transition>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
