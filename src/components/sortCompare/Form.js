import React from 'react'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import useStyles from '../styles'

const Form = ({ cmp1, setCmp1, cmp2, setCmp2, algos, compare, controller }) => {
  const classes = useStyles()
  return (
    <form className={classes.f}>
      <FormControl variant='filled' className={classes.f1}>
        <InputLabel id='compType1'>Select first Algortihm</InputLabel>
        <Select labelId='compType1' id='compType1' value={cmp1} onChange={(e) => setCmp1(e.target.value)}>
          {algos.map((item, index) => index !== cmp2 && <MenuItem value={index}>{item}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl variant='filled' className={classes.f1}>
        <InputLabel id='compType2'>Select second Algortihm</InputLabel>
        <Select labelId='compType2' id='compType2' value={cmp2} onChange={(e) => setCmp2(e.target.value)}>
          {algos.map((item, index) => index !== cmp1 && <MenuItem value={index}>{item}</MenuItem>)}
        </Select>
      </FormControl>

      <Button variant='contained' className={classes.btnCmp} color='primary' onClick={compare}>
        {!controller ? 'Compare' : 'Stop'}
      </Button>
    </form>
  )
}

export default Form
