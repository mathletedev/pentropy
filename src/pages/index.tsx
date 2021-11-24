import { GetServerSideProps } from "next";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/client";
import { FC } from "react";
import Loading from "../components/common/Loading";

interface Props {
	providers: Record<string, ClientSafeProvider> | null;
}

const _Index: FC<Props> = ({ providers }) => {
	if (!providers) return <Loading />;

	return (
		<div className="h-screen w-screen flex">
			<div className="m-auto">
				{Object.values(providers).map((provider) => (
					<button
						className="text-lg text-button"
						onClick={() => signIn(provider.id)}
					>
						sign in with {provider.name.toLowerCase()}
					</button>
				))}
			</div>
		</div>
	);
};

export default _Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
	props: { providers: await getProviders() }
});
