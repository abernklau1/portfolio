import { SiPython, SiPandas, SiScikitlearn } from "react-icons/si";
import ProjectCard from "./ProjectCard";

const datasci = [
  {
    title: "Destiny 2 Sentiment Analysis",
    images: [
      "images/datasci/destinyanalysis/destiny-logo.png",
      "images/datasci/destinyanalysis/double_sentiment_analysis.png",
      "images/datasci/destinyanalysis/log_model_matrix.png",
    ],
    desc: "NLP sentiment analysis of the Destiny 2 community on Twitter",
    link: "https://github.com/abernklau1/Destiny2SentimentAnalysis",
    techs: [<SiPython />, <SiPandas />, <SiScikitlearn />, "NLTK"],
  },
  {
    title: "Determining Flu Acquisition",
    images: [
      "images/datasci/fluacquisition/flu-vaccine.png",
      "images/datasci/fluacquisition/random-forest-matrices.png",
      "images/datasci/fluacquisition/roc-comparison.png",
    ],
    desc: "NLP sentiment analysis of the Destiny 2 community on Twitter",
    link: "https://github.com/abernklau1/DeterminingFluVaccineAcquisition",
    techs: [<SiPython />, <SiPandas />, <SiScikitlearn />, "Matplotlib"],
  },
];

const DataScience = () => {
  return (
    <section className="projects-container">
      {datasci.map((project, index) => {
        return (
          <ProjectCard
            title={project.title}
            images={project.images}
            desc={project.desc}
            link={project.link}
            techs={project.techs}
          />
        );
      })}
    </section>
  );
};

export default DataScience;
