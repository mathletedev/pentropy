import { FC, Fragment } from "react";
import Sidebar from "../navigation/Sidebar";

const Dash: FC = () => (
	<Fragment>
		<Sidebar></Sidebar>
		<div className="main">dashboard</div>
	</Fragment>
);

export default Dash;
