import SectionTitle from "../Shared/Section Title/SectionTitle";

const GithubStats = () => {
    return (
        <div className="mt-20">

            <SectionTitle title={'GitHub Insights'}/>
            <div className="mx-auto  w-fit mt-20">
            <p className="text-center">
                <a href="https://github.com/alamnahid">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=alamnahid&theme=radical&border=7F3FBF&background=0D1117" alt="Nahid's GitHub streak" />
                </a>
            </p>
            </div>

            

            <a className="flex gap-8 justify-center mt-8 items-center">
                <a href="https://github.com/alamnahid"><img alt="Nahid's Github Stats" src="https://denvercoder1-github-readme-stats.vercel.app/api?username=alamnahid&show_icons=true&count_private=true&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866" /></a>
                <a href="https://github.com/alamnahid"><img className="h-[12rem]" alt="Nahid's Top Languages" src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=alamnahid&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866"/></a>
                <br />
                
            </a>





            <p className="text-center">
                
            </p>

        </div>
    );
};

export default GithubStats;