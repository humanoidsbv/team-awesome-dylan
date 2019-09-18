import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconClose from '../../assets/icons/icon-close.svg';
import styles from './TimeEntryForm.module.css';

function TimeEntryForm({ createTimeEntry }) {
  const [activity, setActivity] = useState('Design');
  const [client, setClient] = useState('Port of Rotterdam');
  const [date, setDate] = useState('2018-07-29');
  const [endTime, setEndTime] = useState('17:00');
  const [startTime, setStartTime] = useState('09:00');

  const handleSubmit = event => {
    event.preventDefault();
    createTimeEntry({
      activity,
      client,
      endTimestamp: `${date} ${endTime}`,
      id: Math.random(),
      startTimestamp: `${date} ${startTime}`
    });
  };

  return (
    <form className={styles.timeForm} onSubmit={handleSubmit}>
      <IconClose className={styles.iconClose} />
      <label className={styles.labelClient} htmlFor="client">
        CLIENT
        <input
          className={styles.inputClient}
          id="client"
          onChange={({ target }) => setClient(target.value)}
          type="text"
          value={client}
        />
      </label>
      <label className={styles.labelActivity} htmlFor="activity">
        ACTIVITY
        <input
          className={styles.inputActivity}
          id="activity"
          onChange={({ target }) => setActivity(target.value)}
          type="text"
          value={activity}
        />
      </label>
      <label className={styles.labelDate} htmlFor="date">
        DATE
        <input
          className={styles.inputDate}
          id="date"
          onChange={({ target }) => setDate(target.value)}
          type="text"
          value={date}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="startTime">
        FROM
        <input
          className={styles.inputsTime}
          id="startTime"
          onChange={({ target }) => setStartTime(target.value)}
          type="text"
          value={startTime}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="endTime">
        TO
        <input
          className={styles.inputsTime}
          id="endTime"
          onChange={({ target }) => setEndTime(target.value)}
          type="text"
          value={endTime}
        />
      </label>
      <button className={styles.buttonTimeEntry} type="submit">
        Add
      </button>
    </form>
  );
}

TimeEntryForm.propTypes = {
  createTimeEntry: PropTypes.func.isRequired
};

export default TimeEntryForm;
