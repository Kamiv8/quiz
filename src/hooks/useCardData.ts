import { useAppSelector } from '../app/hooks';
import HtmlSVG from '../assets/technology/html.svg';
import CssSVG from '../assets/technology/css.svg';
import JsSVG from '../assets/technology/js.svg';
import AngularSVG from '../assets/technology/angular.svg';
import ReactSVG from '../assets/technology/react.svg';

export interface CardDataType {
  image: string,
  name: string,
  type: string,
}

const useCardData = () => {
  const { language } = useAppSelector((state) => state.language);

  const cardData: CardDataType[] = [
    {
      image: HtmlSVG,
      name: language.quizName.html,
      type: 'html',
    },
    {
      image: CssSVG,
      name: language.quizName.css,
      type: 'css',
    },
    {
      image: JsSVG,
      name: language.quizName.js,
      type: 'js',
    },
    {
      image: AngularSVG,
      name: language.quizName.angular,
      type: 'angular',
    },
    {
      image: ReactSVG,
      name: language.quizName.react,
      type: 'react',
    },
  ];

  return cardData;
};

export default useCardData;
