import { createMuiTheme, rgbToHex } from'@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },

        secondary: {
            main: '#ffffff',
        },

        background: {
            default: 'rgb(245, 245, 245)',
            white: '#ffffff'
        }
    }
})

export default theme

