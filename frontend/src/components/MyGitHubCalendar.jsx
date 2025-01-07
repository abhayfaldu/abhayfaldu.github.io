import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const MyGitHubCalendar = () => {
	return (
		<GitHubCalendar
			username="abhayfaldu"
			blockMargin={6}
			blockRadius={5}
			blockSize={20}
			boxColor={"#555"}
			color={"#6366F1"}
			showWeekdayLabels={1}
			hideColor={true}
			style={{ color: "#FFFFFF" }}
		>
			<ReactTooltip delayShow={20} html />
		</GitHubCalendar>
	);
};

export default MyGitHubCalendar;
