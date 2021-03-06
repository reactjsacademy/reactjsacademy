import React from 'react';
import Section from './CurriculumSection';
import { trainingDateTime, convertMinutesToHoursAndMinutes } from '../utils';

const renderPartTimeSection = ({
  sectionProps = {},
  training,
  trainingId,
  hours = 3,
} = {}) => (initialIndex) => ({ title, subTitle, Comp, group }, index) => {
  let dayOffset = index + initialIndex;
  const sectionNum = index + initialIndex + 1;

  if (
    training &&
    training.daysOfTheWeek &&
    training.daysOfTheWeek.length === 1
  ) {
    dayOffset = group - 1;
  }

  // TODO replace this by data from the API training instance unit in the training object
  const { coachName } = Comp || {};
  let gmt;
  if (training && training.isOnline) {
    const {
      hours: utcHours,
      minutes: utcMinutes,
    } = convertMinutesToHoursAndMinutes(training.utcOffset);
    gmt = `GMT${utcHours}:${utcMinutes}`;
  }

  return (
    <Section
      title={`Day ${sectionNum} - ${
        title ||
        (Comp && Comp.defaultProps && Comp.defaultProps.title) ||
        subTitle
      }`}
      name={`session${sectionNum}`}
      trainingId={trainingId}
      trainingDateTime={
        training ? (
          <React.Fragment>
            <br />
            {trainingDateTime({ dayOffset, training, endAfterXHours: hours })}
            {gmt && (
              <small>
                {` `}
                {gmt}
              </small>
            )}
            {coachName && ` by ${coachName}`}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <br />
            {hours}-hour training
          </React.Fragment>
        )
      }
      {...sectionProps}
    >
      <Comp title="" />
    </Section>
  );
};

export default renderPartTimeSection;
