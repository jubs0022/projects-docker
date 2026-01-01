import "../css/skills.css"
type skillCardProps = {
  skillItem: {
    r: string;
    g: string;
    b: string;
    title?: string;
    imgsrc: string;
    skillContent: string;
  }[];
};

function Cards({ skillItem }: skillCardProps){

    return(
        <div className="skillObject">
            <div className="skillContain">
                <p className="skillCardTitle">{skillItem[0]?.title}</p>
                <div className="Cards">
                    {skillItem.map(({ imgsrc, skillContent, r, g, b }, index) => (
                    <div
                        key={index}
                        className="skillCard"
                        style={{
                            "--card-color": `${r}, ${g}, ${b}`,
                        } as React.CSSProperties}
                    >
                        <img src={imgsrc} height={70} alt={skillContent} />
                        <p>{skillContent}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
export default function Skills(){
    return (
       <section id="skills">
         <div className="skillContainer" >
            <div className="skillTitle">
                <p>SKILLS</p>
            </div>
            <div className="skillContent">
                    <Cards skillItem={[
                        { r: "255", g: "75", b: "0", title: "FRONT-END", imgsrc: "images/html-5.png", skillContent: "HTML"},
                        { r: "33", g: "150", b: "243", imgsrc: "images/css-3.png", skillContent: "CSS" },
                        { r: "255", g: "223", b: "0", imgsrc: "images/js.png", skillContent: "JavaScript" },
                        { r: "22", g: "221", b: "213", imgsrc: "images/science.png", skillContent: "React.JS", }, 
                    ]} />

                    <Cards skillItem={[ 
                        { r:"101", g:"154", b:"210", title:"BACK-END", imgsrc:"images/c-.png", skillContent:"C++"},
                        { r:"33", g:"150", b:"243", imgsrc:"images/letter-c.png", skillContent:"C"},
                        { r:"177", g:"71", b:"150", imgsrc:"images/c-sharp.png", skillContent:"C#"},
                        { r:"66", g:"117", b:"149", imgsrc:"images/java.png", skillContent:"Java"},
                        { r:"53", g:"112", b:"160", imgsrc:"images/python.png", skillContent:"Python"},
                        { r:"109", g:"167", b:"93", imgsrc:"images/nodejs.png", skillContent:"Node.JS"},
                        { r:"235", g:"40", b:"91", imgsrc:"images/nestjs.svg", skillContent:"Nest.JS"},
                        { r:"53", g:"53", b:"53", imgsrc:"images/express.png", skillContent:"Express.JS" },
                        { r:"37", g:"150", b:"190", imgsrc:"images/fastapi.png", skillContent:"FastAPI"},
                        { r:"215", g:"58", b:"255", imgsrc:"images/jwt-3.svg", skillContent:"JWT"}
                        
                    ]} />
                    <Cards skillItem={[
                        { r:"163", g:"144", b:"229", title:"CROSS-PLATFORM APPLICATION", imgsrc:"images/MAUI.png", skillContent:".NET MAUI"},
                        { r:"104", g:"0", b:"129", imgsrc:"images/WFA.png", skillContent:"Win Forms App"},
                        { r:"108", g:"66", b:"156", imgsrc:"images/ASPNet.png", skillContent:"ASP.Net Core"},
                    ]} />
                    <Cards skillItem={[
                        { r:"238", g:"146", b:"16", title:"DATABASE AND API TOOLS", imgsrc:"images/MySQL.png", skillContent:"MySQL"},
                        { r:"221", g:"44", b:"0", imgsrc:"images/firebase.png", skillContent:"Firebase"},
                        { r:"20", g:"170", b:"81", imgsrc:"images/mongodb.png", skillContent:"MongoDB"},
                        { r:"172", g:"38", b:"45", imgsrc:"images/mssql.png", skillContent:"MSSQL"},
                        { r:"244", g:"76", b:"4", imgsrc:"images/typeorm.png", skillContent:"TypeORM"},
                        { r:"136", g:"1", b:"2", imgsrc:"images/mongoose.png", skillContent:"Mongoose"},
                        { r:"255", g:"108", b:"54", imgsrc:"images/postman.png", skillContent:"Postman"},
                    ]} />

                    <Cards skillItem={[
                        { r:"191", g:"197", b:"204", title:"TOOLS AND PLATFORMS", imgsrc:"images/github.png", skillContent:"Github"},
                        { r:"28", g:"160", b:"241", imgsrc:"images/vscode.png", skillContent:"VS Code"},
                        { r:"92", g:"42", b:"149", imgsrc:"images/vs2022.png", skillContent:"VS 2022"},
                        { r:"1", g:"206", b:"126", imgsrc:"images/figma.png", skillContent:"Figma"},
                        { r:"51", g:"123", b:"219", imgsrc:"images/canva.png", skillContent:"Canva"},
                        { r:"255", g:"87", b:"35", imgsrc:"images/office.png", skillContent:"MS Office"},
                        { r:"251", g:"121", b:"35", imgsrc:"images/xampp.png", skillContent:"Xampp"},
                        { r:"43", g:"167", b:"230", imgsrc:"images/azure.png", skillContent:"Azure"},
                    
                    ]} />

                    
            </div>
        </div>
       </section>

    );
};
