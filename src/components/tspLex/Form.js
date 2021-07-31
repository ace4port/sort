import React from 'react'

import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import useStyles from '../styles'

const Form = ({ speed, setSpeed, clearNodes, node, setNode, genRandom }) => {
  const classes = useStyles()
  const values = [4, 5, 6, 7, 8, 9, 10, 12, 15, 20]

  return (
    <form className={classes.tspForm}>
      <FormControl className={classes.tspF}>
        <InputLabel id='speed'>Speed</InputLabel>
        <Slider
          defaultValue={speed}
          aria-labelledby='speed'
          valueLabelDisplay='auto'
          name='speed'
          step={1}
          min={1}
          max={5}
          value={speed}
          onChange={(e, v) => setSpeed(v)}
        />
      </FormControl>
      <br />
      <br />
      <FormControl className={classes.tspF}>
        <InputLabel id='nodeNum'>Number of Nodes</InputLabel>
        <Select labelId='nodeNum' id='nodeNum' value={node} onChange={(e) => setNode(e.target.value)}>
          {values.map((v) => (
            <MenuItem value={v}>{v}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Pick between 5 and 8</FormHelperText>
      </FormControl>
      <br />
      <Button variant='contained' color='primary' onClick={() => genRandom(node)}>
        Generate Random nodes
      </Button>
      <br />

      <Button variant='contained' color='primary' onClick={clearNodes}>
        CLEAR Nodes
      </Button>
    </form>
  )
}

export default Form
