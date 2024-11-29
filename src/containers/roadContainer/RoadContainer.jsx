import PedastrianCrossing from "@/components/pedastrianCrossing/PedastrianCrossing";
import Road from "@/components/road/Road";
import TrafficSignal from "@/components/trafficSignal/TrafficSignal";
import WalkOverBridge from '@/components/walkOverBridge/WalkOverBridge';

const RoadContainer = () => {
	return (
		<>
			<Road className="road-tb">
				<WalkOverBridge className="walk-bridge-up" />
				<TrafficSignal className="signal-up" />
				<TrafficSignal className="signal-bottom" />
				<PedastrianCrossing className="pedastrian-bottom" />
				
			</Road>
			<Road className="road-lr">
				<PedastrianCrossing className="pedastrian-left" />
				<TrafficSignal className="signal-left" />
				<TrafficSignal className="signal-right" />
				<PedastrianCrossing className="pedastrian-right" />
			</Road>
		</>
	);
};

export default RoadContainer;
