import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingBottom: theme.spacing(4),
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },

  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },

  formControl:{
    marginBottom: theme.spacing(1),
  },

  boxButton: {
    marginBottom: theme.spacing(2),
  },

  button: {
    marginBottom: theme.spacing(1),
  },

  loading: {
    display: 'block',
    margin: '10px auto',
  },
  
  errorMessage: {
    margin: '20px 0'
  },

  orSeparator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    width: '100%',
    height: 1,
    margin: theme.spacing(7, 0, 4),

    '& span': {
      backgroundColor: 'white',
      padding: '0 30px'
    }
  }

}))

export default useStyles