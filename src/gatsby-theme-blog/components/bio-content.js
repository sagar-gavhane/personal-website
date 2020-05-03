import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    <span>
      Personal blog by{" "}
      <Styled.a href="https://twitter.com/sagar_codes">Sagar Gavhane</Styled.a>
    </span>
    <br />
    <span>
      Software engineer who loves to experiment ideas with React and Node.
    </span>
  </Fragment>
)
