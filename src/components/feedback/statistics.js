import PropTypes from 'prop-types';
import { Notification } from './notification';

export const Statistic = ({
  optionsText: { positiveText, negativeText, neutralText },
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <div>
      <p>
        {positiveText}: {good}
      </p>
      <p>
        {neutralText}: {neutral}
      </p>
      <p>
        {negativeText}: {bad}
      </p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistic.propTypes = {
  optionsText: PropTypes.object.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
