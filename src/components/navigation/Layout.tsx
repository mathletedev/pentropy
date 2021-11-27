import { CogIcon, PencilAltIcon, SearchIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
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
					<nav className="h-14 flex pr-4 space-x-2 items-center border-b navbar">
						<button
							className="h-full w-48 text-center border-r text-xl text-blue-500 transition hover:bg-gray-200 dark:text-blue-400 dark:hover:bg-gray-700 navbar"
							title="dashboard"
						>
							<Link href="/dash">pentropy</Link>
						</button>
						<div>
							<button className="absolute pl-2 pt-2" title="search">
								<SearchIcon className="icon-button" />
							</button>
							<input className="h-10 pl-10 text-input" placeholder="search" />
						</div>
						<div className="flex-grow"></div>
						<button title="journals">
							<Link href="/docs">
								<PencilAltIcon className="icon-button" />
							</Link>
						</button>
						<button title="settings">
							<Link href="/settings">
								<CogIcon className="icon-button" />
							</Link>
						</button>
					</nav>
					{children}
				</Fragment>
			) : (
				children
			)}
		</Fragment>
	);
};

export default Layout;
