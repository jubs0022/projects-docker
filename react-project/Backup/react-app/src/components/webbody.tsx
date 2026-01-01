import "../css/webbody.css"
export default function WebBody(){
    return (
        <div className="bodyContainer">
            <div className="imgClass">
                <img src="/images/me.jpg" width={350} height={350} />
                <div className="lines"></div>
            </div>
            <div className="bodyObject">
                <p className="helloObject">Hello There!</p>
                <p className="nameObject">I’M JUBERT C. NANTES</p>
                <p className="typeObject">An Aspiring I.T. Developer</p>
                <p className="personalInfoObject">with strong expertise in Software Development, Web Development, and API Development, 
                    capable of creating efficient, scalable, and user-friendly applications. Experienced in designing and implementing 
                    modern solutions that solve real-world problems and enhance digital experiences.</p>
                
                <div className="Links">
                    <p className="connectObject">
                        Let’s Connect:
                    </p>
                    <a href="">
                        <img src="/images/mail.png" width={40} height={40} />
                    </a>
                    <a href="">
                        <img src="/images/github-sign.png" width={40} height={40} />
                    </a>
                    <a href="">
                        <img src="/images/linkedin.png" width={40} height={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}
