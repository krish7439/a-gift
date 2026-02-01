import style from "../teams/teams.module.css";

export const metadata = {
  title: { default: "Teams Page | Team Krish", template: "%s | Team Krish" },
  description: "This is the teams page",
  authors: [{ name: "Admin Teams" }],
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    keywords: "teams, about teams, admin teams",
  },
};
const Teams = async () => {
  return <h1 className={style.common_heading}>Hello Teams</h1>;
};

export default Teams;
