import { fuseDark, skyBlue } from '@fuse/colors';
import { red } from '@material-ui/core/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: fuseDark,
			secondary: {
				light: skyBlue[100],
				main: skyBlue[500],
				dark: skyBlue[900]
			},
			background: {
				paper: '#FFFFFF',
				default: '#f6f7f9'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	}
};

export default themesConfig;
