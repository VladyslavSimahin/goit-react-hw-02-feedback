import { Feedback } from './feedback/feedback';

export const App = () => {
  return (
    <div>
      <Feedback
        title="Please leave a feedback"
        positiveText="Good"
        negativeText="Bad"
        neutralText="Neutral"
      />
    </div>
  );
};
