import "../css/projects.css";

export default function Projects(){
    return (
        <div className="projectsContainer">
            <div className="projectsTitle">
                <p>Projects</p>
            </div>
            <div className="projectsContent">
                <div className="projectsObject">
                    <div className="projectsContain">
                        <div className="projectsCards">
                            <div>
                                <div className = "projectsCardTitle">
                                    <p>Project Name</p>
                                </div>
                                <div className="projectsCardContent">
                                    <img src="" height={235} width={360} />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div className="projectsCardButtons">
                                    <div className="button1">
                                        <img src="/images/github.png" height={30} width={30} />
                                        <p>GITHUB</p>
                                    </div>
                                    <div className="button2">
                                        <p>VISIT</p>
                                        <img src="/images/external-link.png" height={30} width={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}