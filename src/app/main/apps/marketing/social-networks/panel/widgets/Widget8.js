import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

function Widget8(props) {
	return (
		<Card className="w-full h-500 rounded-10 shadow">
			<div className="px-32 py-16">
				<div className="flex justify-between py-16">
					<Typography className="h3 sm:h2 d-flex font-bold">Email marketing campaigns</Typography>
					<Typography className="h3 sm:h2 d-flex">Upcoming campaigns</Typography>
					<Typography className="h3 sm:h2 d-flex font-bold text-pink underline" color="red">View calendar</Typography>
				</div>
				<div className="w-full sm:w-1/3">
					<Card>
						<CardActionArea>
			        <CardMedia
			          className="h-200"
			          image="/material-ui-static/images/cards/contemplative-reptile.jpg"
			          title="Contemplative Reptile"
			        />
			        <CardContent>
			          <Typography gutterBottom variant="h5" component="h2">
			            Lizard
			          </Typography>
			          <Typography variant="body2" color="textSecondary" component="p">
			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
			            across all continents except Antarctica
			          </Typography>
			        </CardContent>
			      </CardActionArea>
			      <CardActions>
			        <Button size="small" color="primary">
			          Share
			        </Button>
			        <Button size="small" color="primary">
			          Learn More
			        </Button>
			      </CardActions>
					</Card>
				</div>
			</div>
		</Card>
	);
}

export default Widget8;
