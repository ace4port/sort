import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

// //icons
import BubbleChart from '@material-ui/icons/BubbleChart'
import InsertChart from '@material-ui/icons/InsertChart'
import MergeType from '@material-ui/icons/MergeType'
import AccessTime from '@material-ui/icons/AccessTime'
import ArrowUpward from '@material-ui/icons/ArrowUpward'

import { Bubble, Insertion, Selection, Quick, Merge } from '../Text'
import Wrap from './Wrap'
import useStyles from '../styles'

/**
 * This is a component to render Tabs to hide and show data from a file
 * @param {none}
 * @returns JSX Tabs component with 5 sorting algorithms as tabs with description
 */
export default function IconTabs() {
  const classes = useStyles()

  const [tab, setTab] = useState(0)
  const [visualize, setVisualize] = useState(false)
  return (
    <Paper className={classes.paper}>
      <Paper square className={classes.tabs}>
        <Button
          variant='contained'
          size='small'
          className={classes.tabBtn}
          onClick={() => setVisualize((state) => !state)}
        >
          {!visualize ? 'Visualize using random values' : 'Read description'}
        </Button>

        <Tabs
          value={tab}
          onChange={(event, newValue) => {
            setTab(newValue)
          }}
          variant='fullWidth'
          indicatorColor='primary'
          textColor='primary'
          aria-label='sort icons'
          className={classes.tabTop}
        >
          <Tab icon={<BubbleChart />} label='Bubble Sort' {...a11yProps(0)} />
          <Tab icon={<InsertChart />} label='Insertion Sort' {...a11yProps(1)} />
          <Tab icon={<ArrowUpward />} label='Selection Sort' {...a11yProps(2)} />
          <Tab icon={<AccessTime />} label='Quick Sort' {...a11yProps(3)} />
          <Tab icon={<MergeType />} label='Merge Sort' {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={tab} index={0} className={classes.sortDesc}>
          {!visualize ? <Bubble /> : <Wrap type='bubble' />}
        </TabPanel>
        <TabPanel value={tab} index={1} className={classes.sortDesc}>
          {!visualize ? <Insertion /> : <Wrap type='insertion' />}
        </TabPanel>
        <TabPanel value={tab} index={2} className={classes.sortDesc}>
          {!visualize ? <Selection /> : <Wrap type='selection' />}
        </TabPanel>
        <TabPanel value={tab} index={3} className={classes.sortDesc}>
          {!visualize ? <Quick /> : <Wrap type='quick' />}
        </TabPanel>
        <TabPanel value={tab} index={4} className={classes.sortDesc}>
          {!visualize ? <Merge /> : <Wrap type='merge' />}
        </TabPanel>
      </Paper>
    </Paper>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div role='tabpanel' hidden={value !== index} id={`${index}`} aria-labelledby={`${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `${index}`,
    'aria-controls': `${index}`,
  }
}
