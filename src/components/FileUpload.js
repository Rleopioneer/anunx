import { 
  Box,
  IconButton,
  Typography,
} from '@material-ui/core'

import { DeleteForever } from '@material-ui/icons'

import { useDropzone } from 'react-dropzone'

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
    flexWrap: 'wrap',
  },

  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
  },

  thumb: {
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    margin: '0 15px 15px 0',

    '& $mainImage' : {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex'
    },

    '& $mask': {
      display: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  }

}))

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

  const classes = useStyles()

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*', 
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        console.log(file)
       return {
        ...file,
        preview: URL.createObjectURL(file)
       }
      })

      setFieldValue('files', [
        ...files,
        ...newFiles
      ])
    },

    noClick: true
  })

  const handleRemoveFile = filePath => {
    console.log(filePath, files)
    const newFileState = files.filter(file => file.path !== filePath )
    setFieldValue('files', newFileState)
  }

  return(
    <>
      <Typography component='h6' variant='h6' color={errors && touched ? 'error' : 'textPrimary'} gutterBottom>
          Imagens
      </Typography>
      <Typography component='div' variant='body2' color={errors && touched ? 'error' : 'textPrimary'} gutterBottom>
          A primeira imagem é a foto principal do seu anúncio
      </Typography>
      
      <Box className={classes.thumbsContainer} >
        
        <Box className={classes.dropzone} {...getRootProps()} onClick={open}>
          <input name='files' {...getInputProps()} />
          <Typography variant='body2' color={errors && touched ? 'error' : 'textPrimary'} gutterBottom>
            {errors && touched ? errors : 'Clique para adicionar ou arraste a imagem aqui...'}
          </Typography>
        </Box>

        {
          files.map((file, index) => (
            <Box
              key={file.path}
              className={classes.thumb}
              style={{backgroundImage: `url(${file.preview})`}}
            >
              {
                index === 0 ?
                  <Box className={classes.mainImage}>
                    <Typography variant='body' color='secondary'>
                      Principal
                    </Typography>
                  </Box>
                  : null
              }
              
              <Box className={classes.mask}>
                <IconButton color='secondary' onClick={() => handleRemoveFile(file.path)}>
                  <DeleteForever fontSize='large' />
                </IconButton>
              </Box>
            </Box>

          ))
        }
      </Box>
    </>
  )
}

export default FileUpload