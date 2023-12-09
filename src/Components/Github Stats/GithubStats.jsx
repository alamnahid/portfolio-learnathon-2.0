import SectionTitle from "../Shared/Section Title/SectionTitle";

const GithubStats = () => {
    return (
        <div className="mt-20">

            <SectionTitle title={'GitHub Insights'}/>
            <p className="text-center">
                <a href="https://github.com/alamnahid">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=alamnahid&theme=radical&border=7F3FBF&background=0D1117" alt="Nahid's GitHub streak" />
                </a>
            </p>

            <p className="text-center">
                <a href="https://github.com/alamnahid">
                    <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=alamnahid&theme=radical" alt="Nahid's GitHub Contribution" />
                </a>
            </p>

            <a>
                <a href="https://github.com/alamnahid"><img alt="Nahid's Github Stats" src="https://denvercoder1-github-readme-stats.vercel.app/api?username=alamnahid&show_icons=true&count_private=true&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866" height="192px" width="49.5%" /></a>
                <a href="https://github.com/alamnahid"><img alt="Nahid's Top Languages" src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=alamnahid&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866" height="192px" width="49.5%" /></a>
                <br />
            </a>

        </div>
    );
};

export default GithubStats;