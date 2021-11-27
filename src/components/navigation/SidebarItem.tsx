import { FC } from "react";

interface Props {
	title: string;
	selected?: boolean;
}

const SidebarItem: FC<Props> = ({ title, selected, children }) => {
	return (
		<div
			className={`${
				selected ? "bg-gray-200 dark:bg-gray-700 " : ""
			}sidebar-item`}
		>
			{children}
			<span className="w-1"></span>
			{title}
		</div>
	);
};

export default SidebarItem;
