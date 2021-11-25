import { signIn } from "next-auth/client";
import { FC } from "react";

const SignIn: FC = () => (
	<div className="h-screen w-screen flex">
		<button
			className="m-auto text-lg text-button"
			onClick={() => signIn("google")}
		>
			sign in with google
		</button>
	</div>
);

export default SignIn;
