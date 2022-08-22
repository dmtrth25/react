import { questions } from '../data/data';

import '../index.scss';

export const Game = (props) => {
  const { question, step, onClickVariant } = props;

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((el, index) => (
          <li onClick={() => onClickVariant(index)} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
};
