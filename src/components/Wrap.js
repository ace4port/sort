import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import FormLabel from '@material-ui/core/FormLabel'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Sort from './SortF'
import Blank from './Blank'
import useStyles from './styles'
import { marks } from '../Data/marks'
import { w, s } from '../Data/sort'

const Wrap = ({ type }) => {
  const classes = useStyles()

  const [controller, setController] = useState(false)
  const [array, setArray] = useState('19 9 5 7 4 5 2 12 7 7 1 4 9 12 17')

  const width = 4
  const speed = 4
  const [wd, setWd] = useState(w[width])

  const [comp, setComp] = useState(0)
  const [swaps, setSwaps] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    setWd(w[width])
  }, [width])

  useEffect(() => {
    setComp(0)
    setSwaps(0)
  }, [controller])
  const a = array.split(' ')

  const stop = () => {
    setController(!controller)
    setComp(0)
    // set
  }

  return (
    <Grid container direction='row' alignItems='stretch'>
      <Grid item xs={7} className={classes.cnv}>
        {!controller ? (
          <Blank width={wd} arr={a} />
        ) : (
          <Sort
            width={wd}
            speed={s[speed]}
            type={type}
            arr={a}
            setCompp={setComp}
            setSwapps={setSwaps}
            setTime={setTime}
          />
        )}
      </Grid>

      <Grid item xs={5}>
        <Paper className={classes.formWrap}>
          <FormLabel component='legend'>Enter numbers between 1 and 20</FormLabel>
          <Input value={array} onChange={(e) => setArray(e.target.value)} />
          <br />
          {/* {array}
          <br />
          <Button variant='contained' color='secondary' onClick={() => setController(!controller)}>
            Generate
          </Button> */}
          <br />
          <Button className={classes.btn} variant='contained' color='primary' type='submit' onClick={stop}>
            {controller ? 'Stop' : 'Sort'}
          </Button>

          <Typography variant='h6' className={classes.info}>
            Array size: {marks[width - 1].label}
          </Typography>

          <Typography className={classes.info}>Width of each bar: {wd} px</Typography>

          <Typography variant='h6' className={classes.info}>
            Delay: {s[speed] * 2} ms
          </Typography>
          <Typography variant='h6' className={classes.info}>
            Comparisions: {comp}
          </Typography>
          <Typography variant='h6' className={classes.info}>
            Number of swaps: {swaps}
          </Typography>
          <Typography variant='h6' className={classes.info}>
            Time to sort: {time}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Wrap
