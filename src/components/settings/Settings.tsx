import { LogoutIcon } from "@heroicons/react/outline";
import { signout } from "next-auth/client";
import { FC, Fragment } from "react";
import Sidebar from "../navigation/Sidebar";
import SidebarItem from "../navigation/SidebarItem";

const Settings: FC = () => {
	return (
		<Fragment>
			<Sidebar>
				<button onClick={() => signout()}>
					<SidebarItem title="sign out">
						<LogoutIcon />
					</SidebarItem>
				</button>
			</Sidebar>
			<div className="main">settings</div>
		</Fragment>
	);
};

export default Settings;
