import {
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const datasci = [
  {
    title: "Destiny 2 Sentiment Analysis",
    images: [
      "images/datasci/destinyanalysis/destiny-logo.png",
      "images/datasci/destinyanalysis/double_sentiment_analysis.png",
      "images/datasci/destinyanalysis/log_model_matrix.png",
    ],
    desc: "NLP sentiment analysis of 6.3k tweets with the hashtag 'destinythegame'. the Analysis uses a SentimentIntensityAnalyzer to create a target variable for a supervised learning model that provides insights.",
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
    desc: "An inferential binary classifier model that determines if someone will take the Seasonal Flu vaccine based on responses to a 2009 phone survey.",
    link: "https://github.com/abernklau1/DeterminingFluVaccineAcquisition",
    techs: [<SiPython />, <SiPandas />, <SiScikitlearn />, "Matplotlib"],
  },
  {
    title: "Xray Pneumonia Classification",
    images: [
      "images/datasci/xraypneumonia/xray-classification.png",
      "images/datasci/xraypneumonia/pneumonia-and-normal.png",
      "images/datasci/xraypneumonia/neural-network-desc.png",
    ],
    desc: "A convolutional neural network image classifier that determines the existence of Pneumonia within a patience lungs through the processing of their lung X-ray.",
    link: "https://github.com/abernklau1/XRayPneumoniaClassification",
    techs: [<SiPython />, <SiScikitlearn />, <SiTensorflow />, <SiKeras />],
  },
];

const DataScience = () => {
  return (
    <section className="projects-container">
      {datasci.map((project, index) => {
        return (
          <ProjectCard
            key={index}
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
