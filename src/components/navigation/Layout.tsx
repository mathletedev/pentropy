import { useSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import Loading from "../common/Loading";

const Layout: FC = ({ children }) => {
	const [session, loading] = useSession();
	const { push } = useRouter();

	if (!loading && !session) {
		push("/api/auth/signin");

		return <Loading />;
	}

	return (
		<Fragment>
			<Head>
				<title>pentropy</title>
			</Head>
			<nav className="h-14 flex items-center px-8 border-b navbar">
				<div className="text-lg">pentropy</div>
				<div className="flex-grow"></div>
				{!loading && session?.user && (
					<div className="text-lg">{session.user?.name?.toLowerCase()}</div>
				)}
			</nav>
			<aside className="fixed h-screen w-48 border-r navbar"></aside>
			<div className="ml-48">{children}</div>
		</Fragment>
	);
};

export default Layout;
