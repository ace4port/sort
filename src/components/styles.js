import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba( 0, 0, 0, 0.7)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,1)',
      outline: '1px solid slategrey',
    },
  },

  //nav elements
  logo: {
    flexGrow: 1,
  },
  lnk: {
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgb(140, 190, 9)',
    },
  },

  //ater nav
  paper: {
    height: '90vh',
    background: 'linear-gradient(45deg, rgba(254, 107, 205, 0.885) 30%, rgba(83, 129, 255, 0.795) 90%)',
    overflow: 'auto',
  },

  //side
  title: {
    textTransform: 'capitalize',
  },
  side: {
    padding: '15px',
  },

  //tabs
  tabs: {
    backgroundColor: 'rgba(255, 255, 255, .25)',
    backdropFilter: 'blur(5px)',
    margin: '4px 5px ',
    padding: '0px 5px',
    // width: '100%',
    '&:after': {
      margin: '20px',
      padding: '20px',
    },
  },
  tabTop: {
    marginTop: '2px',
  },
  btnContainer: {
    position: 'absolute',
    top: '490px',
    right: '30px',
    zIndex: '2',
  },
  tabBtn: {
    position: 'absolute',
    top: '490px',
    right: '30px',
    zIndex: '1',
    padding: '10px 10px',
    color: 'white',
    backgroundColor: 'rgb(220, 0, 220)',
    '&:hover': {
      backgroundColor: 'rgba(220, 50, 200)',
    },
  },

  //sort wrap
  cnv: {
    margin: 'auto -20px auto 20px',
  },

  formWrap: {
    margin: '10px auto 10px 0px',
    padding: '20px',
    display: 'grid',
    background: 'none',
    backdropFilter: 'blur(10px)',
  },
  info: {
    display: 'block',
    margin: '10px 10px',
  },

  //form elements
  form: {
    margin: '0px 1px 2px 1px',
    padding: '20px',
    borderRadius: '4px',
  },
  sliderWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    width: '200px',
  },
  slider1: {
    marginTop: '25px',
    width: '200px',
  },

  f: {
    display: 'inline',
  },
  f1: {
    width: '12rem',
    padding: '1rem 0rem 1rem 0.5rem',
  },
  btnCmp: {
    width: '7em',
    margin: '1.2rem 1rem',
  },

  s: {
    padding: '0 4px 0 6px',
  },

  sortDesc: {
    padding: '20px 0 0 10px',
  },

  tcon: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
  },

  tspForm: {
    width: '10rem',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    // gridGap: '40px',
  },
  tspF: {
    padding: '5rem',
    margin: '5rem',
  },
}))

export default useStyles
