import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 800,
    height: 400,
    border: 0,
    borderRadius: '20px 20px 0 0',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SettingsButton({ className }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	return (
		<>
			<Button
				rel="noreferrer noopener"
				role="button"
				className={clsx('', className)}
				onClick={handleOpen}
			>
				<Icon className="text-24">settings</Icon>
				<span className="mx-4">Settings</span>
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
							<Button className="min-h-40 min-w-40 rounded-10" onClick={handleClose}>
								<Icon className="text-14">arrow_back_ios</Icon>
								<div className="hidden md:flex flex-col mx-4 items-end">
									<Typography component="span" className="text-14 font-bold pt-4">
										Come back
									</Typography>
								</div>
							</Button>
        		</div>
        		<div className="flex flex-col text-center">
        			<Typography className="text-24 font-bold pb-16">Settings</Typography>
							<Card className="w-full rounded-10 shadow">
								<div className="p-16 flex flex-row flex-wrap items-end">
									Settings Choice
								</div>
							</Card>
        		</div>
	        </div>
	      </Fade>
	    </Modal>
		</>
	);
}

export default SettingsButton;
