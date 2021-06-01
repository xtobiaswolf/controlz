import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';

function Panel() {
	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);

	useEffect(() => {
		dispatch(getWidgets());
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}

	return (
		<div className="w-full">

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-1 flex-col min-w-0 container sm:p-8">
					<Typography className="p-40 pb-8 text-36 font-600">
						Panel
					</Typography>

					<FuseAnimate delay={600}>
						<div className="flex flex-col sm:flex sm:flex-row px-40">
							<Typography className="text-18 font-600 py-16">
								Linked Networks
							</Typography>
							<div className="widget flex w-full sm:w-1/3 p-16">
								<Widget1 data={widgets.widget1} />
							</div>
						</div>
					</FuseAnimate>

					<div className="flex flex-col sm:flex sm:flex-row p-24 py-0">
						<div className="widget flex w-full sm:w-1/3 p-16">
							<Widget2 data={widgets.widget2} />
						</div>

						<div className="widget flex w-full sm:w-1/3 p-16">
							<Widget3 data={widgets.widget3} />
						</div>

						<div className="widget w-full sm:w-1/3 p-16">
							<Widget4 data={widgets.widget4} />
						</div>

						<div className="widget w-full sm:w-1/3 p-16">
							<Widget5 data={widgets.widget5} />
						</div>
					</div>

					<div className="widget w-full p-40 pb-8">
						<Widget6 data={widgets.widget5} />
					</div>

					<div className="widget w-full p-40 pb-8">
						<Widget7 data={widgets.widget7} />
					</div>

					<div className="widget w-full p-40 pb-8">
						<Widget8 data={widgets.widget8} />
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('panel', reducer)(Panel);
