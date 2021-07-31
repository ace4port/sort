import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Form from './Form'
import useStyles from '../styles'
import { Bubble, Insertion, Selection, Quick, Merge } from './Sorts'

let arr = []

const Compare = () => {
  const classes = useStyles()

  const [cmp1, setCmp1] = useState(0)
  const [cmp2, setCmp2] = useState(1)
  const [controller, setController] = useState(false)

  const algos = ['Bubble', 'Insertion', 'Selection', 'Quick', 'Merge']

  const compare = () => setController((state) => !state)

  const gen = () => {
    for (let i = 0; i < 250; i++) arr[i] = Math.ceil(Math.random() * 500)
  }

  useEffect(() => {
    gen()
  }, [controller])

  return (
    <>
      <Paper className={classes.paper}>
        <Form
          cmp1={cmp1}
          setCmp1={setCmp1}
          cmp2={cmp2}
          setCmp2={setCmp2}
          algos={algos}
          compare={compare}
          controller={controller}
        />

        <Grid container>
          <Grid item className={classes.s}>
            {controller && (
              <article>
                {cmp1 === 0 ? (
                  <Bubble width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp1 === 1 ? (
                  <Insertion width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp1 === 2 ? (
                  <Selection width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp1 === 3 ? (
                  <Quick width={500} height={500} size={2} arr={arr} speed={10} />
                ) : (
                  <Merge width={500} height={500} size={2} arr={arr} speed={10} />
                )}
              </article>
            )}
          </Grid>

          <Grid item className={classes.s}>
            {controller && (
              <article>
                {cmp2 === 0 ? (
                  <Bubble width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp2 === 1 ? (
                  <Insertion width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp2 === 2 ? (
                  <Selection width={500} height={500} size={2} arr={arr} speed={10} />
                ) : cmp2 === 3 ? (
                  <Quick width={500} height={500} size={2} arr={arr} speed={10} />
                ) : (
                  <Merge width={500} height={500} size={2} arr={arr} speed={10} />
                )}
              </article>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default Compare
