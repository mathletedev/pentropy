import { FC } from "react";

const Sidebar: FC = ({ children }) => (
	<aside className="fixed h-screen w-48 border-r navbar">{children}</aside>
);

export default Sidebar;
