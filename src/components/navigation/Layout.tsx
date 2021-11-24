import { signOut, useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import { __baseUrl__ } from "../../lib/constants";
import Loading from "../common/Loading";

const Layout: FC = ({ children }) => {
	const [session, loading] = useSession();
	const { pathname, push } = useRouter();

	if (loading) return <Loading />;

	if (!session && pathname !== "/" && !pathname.startsWith("/api")) {
		push("/");

		return <Loading />;
	}

	if (session && pathname === "/") {
		push("/dash");

		return <Loading />;
	}

	return (
		<Fragment>
			<Head>
				<title>pentropy</title>
			</Head>
			{session ? (
				<Fragment>
					<nav className="h-14 flex items-center px-8 border-b navbar">
						<div className="text-lg">
							<Link href={`${__baseUrl__}/dash`}>pentropy</Link>
						</div>
						<div className="flex-grow"></div>
						<div className="text-lg">{session.user?.name?.toLowerCase()}</div>
						<button className="text-lg" onClick={() => signOut()}>
							sign out
						</button>
					</nav>
					<aside className="fixed h-screen w-48 border-r navbar"></aside>
					<div className="ml-48">{children}</div>
				</Fragment>
			) : (
				children
			)}
		</Fragment>
	);
};

export default Layout;
