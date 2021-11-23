import { gql, useQuery } from "@apollo/client";
import { FC } from "react";

const SESSION = gql`
	query Session {
		session
	}
`;

const Welcome: FC = () => {
	const { data } = useQuery(SESSION);

	return <div className="text-xl">{data?.session}</div>;
};

export default Welcome;
