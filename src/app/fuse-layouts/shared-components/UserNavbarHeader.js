import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import AccountButton from './AccountButton'
import ThemeButton from './ThemeButton'
import Icons from 'app/icons/Icons';

const useStyles = makeStyles(theme => ({
	bill: {
		padding: '24px 16px',
		textTransform: 'uppercase',
		fontSize: 14,
		fontWeight: 'bold',
		color: '#92929D',
	},
	networkButton: {
		marginTop: 16,
		marginBottom: 16,
		padding: 8,
		color: '#A10081',
		fontWeight: 'bold',
		fontSize: 18,
		width: '100%'
	},
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#ffffff',
    width: 900,
    height: 600,
    border: 0,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  gridRoot: {
  	flexGrow: 1
  },
  gridPaper: {
  	height: 120,
  	backgroundColor: '#ffffff',
  	border: '2px solid #E2E2EA',
  	borderRadius: 10
  },
}));

const networks = [
	{
		title: 'Facebook',
		icon: 'f'
	},
	{
		title: 'Instagram',
		icon: 'instagram'
	},
	{
		title: 'Youtube',
		icon: 'youtube'
	},
	{
		title: 'Twitter',
		icon: 'twitter'
	},
	{
		title: 'Tiktok',
		icon: 'tiktok'
	},
	{
		title: 'Google Business',
		icon: 'google_business'
	},
	{
		title: 'Pinterest',
		icon: 'pinterest'
	},
	{
		title: 'Linkedin',
		icon: 'linkedin'
	},
];

const DeleteButton = withStyles((theme) => ({
  root: {
    color: '#00FFFF',
    backgroundColor: '#00FFFF',
    '&:hover': {
      backgroundColor: '#00CCCC',
    },
  },
}))(Button);

const DisabledButton = withStyles((theme) => ({
  root: {
  	fontSize: 12,
    color: '#FFFFFF',
    backgroundColor: '#CCCCCC',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
  },
}))(Button);

const AddButton = withStyles((theme) => ({
  root: {
  	fontSize: 12,
    color: 'white',
    backgroundColor: '#A10081',
    '&:hover': {
      backgroundColor: '#A10081',
    },
  },
}))(Button);

function UserNavbarHeader(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


	return (
		<div>
			<ThemeButton />
			<Typography className={classes.bill}>
				Bills
			</Typography>
			<AccountButton className="my-8 p-8"/>
			<Button className={classes.networkButton} disableRipple onClick={handleOpen}>
				+ Add networks
			</Button>
	    <Modal
	      aria-labelledby="transition-modal-title"
	      aria-describedby="transition-modal-description"
	      className={classes.modal}
	      open={open}
	      onClose={handleClose}
	      closeAfterTransition
	      BackdropComponent={Backdrop}
	      BackdropProps={{
	        timeout: 500,
	      }}
	    >
	      <Fade in={open}>
	        <div className={classes.paper}>
        		<div className="flex flex-row py-8">
							<Button className="min-h-40 min-w-40 rounded-10 text-black" onClick={handleClose}>
								<Icon className="text-14">arrow_back_ios</Icon>
								<div className="hidden md:flex flex-col mx-4 items-end">
									<Typography component="span" className="text-14 font-bold pt-4">
										Come back
									</Typography>
								</div>
							</Button>
        		</div>
        		<div className="flex flex-col text-center">
        			<Typography className="text-24 font-bold pb-24">Add networks to account</Typography>
    					<GridList className={classes.gridList} cellHeight={'auto'} cols={3} spacing={24}>
			          {networks.map((net) => (
        					<GridListTile key={net.title} cols={net.cols || 1}>
			              <Paper className={classes.gridPaper} variant="outlined">
			              	<div style={{
										  	width: '100%-20px',
										  	height: 3,
										  	borderRadius: '0 0 10px 10px',
										  	margin: '-1px 10px 0px 10px',
										  	backgroundColor: net.color
			              	}}/>
			              	<div className="flex flex-row m-20 mb-10">
	      								<Icons value={net.icon} width={32} />
												<div className="pl-20 text-left">
													<Typography className="text-14 font-bold text-black">{net.title}</Typography>
													<Typography className="text-10 text-gray">Network was not added</Typography>
												</div>
											</div>
											<div className="flex flex-row ml-32">
												<DisabledButton> Delete network </DisabledButton>
												<AddButton> Add network </AddButton>
											</div>
			              </Paper>
				          </GridListTile>
		        	  ))}
				      </GridList>
        		</div>
	        </div>
	      </Fade>
	    </Modal>
		</div>
	);
}

export default UserNavbarHeader;
