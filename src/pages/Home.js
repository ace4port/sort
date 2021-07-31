import React from 'react'
import useStyles from '../components/styles'

const Sort = () => {
  const classes = useStyles()
  return (
    <div className={`${classes.main} ${classes.paper}`}>
      {/* <Grid container className={classes.main} alignItems='stretch'> */}
      {/* <Tabs /> */}
      <h2>AlgoVis</h2>
      <h3>Some algorithms visualized using React and P5.js</h3>

      <div>This is a project done by group SSAS, students of Purwanchal Campus, Dharan a branch of IOE, TU</div>
      <h4>Group Members</h4>
      <ul>
        <li>Abdullah Waqar</li>
        <li>Sandesh Chudal</li>
        <li>Sarthak Parajuli</li>
        <li>Shrijan Chaudhary</li>
      </ul>
      <h5>Cards 1 to 5</h5>
      {/* </Grid> */}
    </div>
  )
}

export default Sort
