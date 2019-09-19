import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconClose from '../../assets/icons/icon-close.svg';
import styles from './TimeEntryForm.module.css';

function TimeEntryForm({ createTimeEntry }) {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [activity, setActivity] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [stopTime, setStopTime] = useState('17:00');

  const handleSubmit = event => {
    event.preventDefault();
    createTimeEntry({
      client,
      id: Math.random(),
      startTimestamp: new Date(`${date}T${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date}T${stopTime}`).toISOString()
    });
  };

  return (
    <form className={styles.timeForm} onSubmit={handleSubmit}>
      <IconClose className={styles.iconClose} />
      <label className={styles.labelClient} htmlFor="client">
        CLIENT
        <select
          className={styles.inputClient}
          id="client"
          onChange={({ target }) => setClient(target.value)}
          value={client}
        >
          <option disabled value="">
            -- select an option --
          </option>
          <option value="Port of Rotterdam">Port of Rotterdam</option>
          <option value="Hike One">Hike One</option>
        </select>
      </label>
      <label className={styles.labelActivity} htmlFor="activity">
        ACTIVITY
        <select
          className={styles.inputActivity}
          id="activity"
          onChange={({ target }) => setActivity(target.value)}
          value={activity}
        >
          <option disabled value="">
            -- select an option --
          </option>
          <option value="design">Design</option>
        </select>
      </label>
      <label className={styles.labelDate} htmlFor="date">
        DATE
        <input
          className={styles.inputDate}
          id="date"
          onChange={({ target }) => setDate(target.value)}
          type="date"
          value={date}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="startTime">
        FROM
        <input
          className={styles.inputsTime}
          id="startTime"
          onChange={({ target }) => setStartTime(target.value)}
          type="time"
          value={startTime}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="stopTime">
        TO
        <input
          className={styles.inputsTime}
          id="endTime"
          onChange={({ target }) => setStopTime(target.value)}
          type="type"
          value={stopTime}
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
