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
  }

}))

export default useStyles