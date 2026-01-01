

type EducCardProps = {
  title?: string;
  imgsrc: string;
  content: {
    title: string;
    detail1: string;
    detail2?: string;
    detail3?: string;
  }[];
};

const Card = ({ title, imgsrc, content }: EducCardProps) => (
  <div className="containerObject">
    {title && <p className="containerCardTitle">{title}</p>}
    {content.map((item, i) => (
      <div key={i}>
        <div className="containerContentTitle">
          <img src={imgsrc} width={37} height={37} alt={`icon-${i}`} />
          <p>{item.title}</p>
        </div>
        <div className="containerContent">
          <p>{item.detail1}</p>
          {item.detail2 && <p>{item.detail2}</p>}
          {item.detail3 && <p>{item.detail3}</p>}
        </div>
      </div>
    ))}
  </div>
);

export default function About() {
  return (
    <section id="about">
      <div className="aboutContainer" >
        <div className="title">
          <p>ABOUT ME</p>
        </div>

        <div className="aboutContent">
          <Card
            title="Education"
            imgsrc="images/graduation-cap.png"
            content={[
              {
                title: "Cavite State University Imus Campus",
                detail1: "School Year: 2021-2025",
                detail2: "Bachelor of Science in Information Technology",
              },
              {
                title: "Datacom Institute of Computer Technology",
                detail1: "School Year: 2018-2020",
                detail2: "Media and Information Technology",
              },
            ]}
          />

          <Card
            title="Internship"
            imgsrc="images/id-card.png"
            content={[
              {
                title: "Software Developer Intern",
                detail1: "Questronix Corporation - March to June 2025",
                detail2: "Makati City, Manila",
                detail3:
                  "- Developed and tested Python-based web applications and APIs using Uvicorn, integrated with MongoDB for efficient data storage and retrieval. Additionally, fine-tuned Natural Language Processing (NLP) models utilizing Hugging Face and Google Colab.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
