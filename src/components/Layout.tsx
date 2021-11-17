import Head from "next/head";
import { FC, Fragment } from "react";

const Layout: FC = ({ children }) => {
	const loggedIn = true;

	if (!loggedIn) return <Fragment>{children}</Fragment>;

	return (
		<Fragment>
			<Head>
				<title>pentropy</title>
			</Head>
			<nav className="h-14 flex items-center px-8 border-b navbar">
				<div className="text-lg">pentropy</div>
			</nav>
			<aside className="fixed h-screen w-48 border-r navbar"></aside>
			<div className="ml-48">{children}</div>
		</Fragment>
	);
};

export default Layout;
