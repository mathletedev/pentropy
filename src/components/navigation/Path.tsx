import { useRouter } from "next/router";
import { FC, Fragment, useEffect } from "react";

const Path: FC = () => {
	const { push } = useRouter();

	useEffect(() => {
		push("/dash");
	});

	return <Fragment></Fragment>;
};

export default Path;
