import React from 'react';

import CheckIcon from '../../static/check.svg';
import TimesIcon from '../../static/times.svg';
import QuestionIcon from '../../static/question.svg';

import styles, { checkIconStyles } from './styles';

export default ({ items }) => (
  <div>
    <style jsx>{styles}</style>
    {checkIconStyles.styles}

    <ul>
      {items.map(({ text, icon = 'check' }) => (
        <li key={`checklist-${text}`}>
          {icon === 'check' ? (
            <CheckIcon className={checkIconStyles.className} />
          ) : null}
          {icon === 'times' ? (
            <TimesIcon className={checkIconStyles.className} />
          ) : null}
          {icon === 'question' ? (
            <QuestionIcon className={checkIconStyles.className} />
          ) : null}
          {text}
        </li>
      ))}
    </ul>
  </div>
);
