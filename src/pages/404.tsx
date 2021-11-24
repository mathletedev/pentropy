import { GetStaticProps } from "next";
import { FC, Fragment } from "react";

const _404: FC = () => <Fragment></Fragment>;

export default _404;

export const getStaticProps: GetStaticProps = () => ({
	redirect: { permanent: false, destination: "/dash" }
});
