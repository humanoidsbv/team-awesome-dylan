import React, { useState, useRef } from 'react';
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
  const [validity, setValidity] = useState({});

  const handleBlur = event => {
    setValidity({
      ...validity,
      [event.target.name]: event.target.checkValidity()
    });
  };

  const formRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    setClient('');
    setActivity('');

    createTimeEntry({
      client,
      id: Math.random(),
      startTimestamp: new Date(`${date}T${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date}T${stopTime}`).toISOString()
    });
  };

  return (
    <form
      className={styles.timeEntryForm}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <IconClose className={styles.iconClose} />
      <label className={styles.labelClient} htmlFor="client">
        CLIENT
        <input
          className={`${styles.inputClientValid} ${
            validity.client === false
              ? styles.inputClientInvalid
              : styles.inputClientValid
          }`}
          id="client"
          maxLength="35"
          minLength="2"
          name="client"
          onBlur={handleBlur}
          onChange={({ target }) => setClient(target.value)}
          placeholder="--enter a client--"
          required
          value={client}
        />
      </label>
      <label className={styles.labelActivity} htmlFor="activity">
        ACTIVITY
        <input
          className={`${styles.inputActivityValid} ${
            validity.activity === false
              ? styles.inputActivityInvalid
              : styles.inputActivityValid
          }`}
          id="activity"
          maxLength="35"
          minLength="2"
          name="activity"
          onBlur={handleBlur}
          onChange={({ target }) => setActivity(target.value)}
          placeholder="--enter an activity--"
          required
          value={activity}
        />
      </label>
      <label className={styles.labelDate} htmlFor="date">
        DATE
        <input
          className={styles.inputDate}
          id="date"
          name="date"
          onBlur={handleBlur}
          onChange={({ target }) => setDate(target.value)}
          required
          type="date"
          value={date}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="startTime">
        FROM
        <input
          className={styles.inputsTime}
          id="startTime"
          name="fromTime"
          onBlur={handleBlur}
          onChange={({ target }) => setStartTime(target.value)}
          required
          type="time"
          value={startTime}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="stopTime">
        TO
        <input
          className={styles.inputsTime}
          id="endTime"
          name="toTime"
          onBlur={handleBlur}
          onChange={({ target }) => setStopTime(target.value)}
          required
          type="type"
          value={stopTime}
        />
      </label>
      <button
        className={`${styles.buttonTimeEntry}`}
        type="submit"
        disabled={!formRef.current || !formRef.current.checkValidity()}
      >
        Add
      </button>
    </form>
  );
}

TimeEntryForm.propTypes = {
  createTimeEntry: PropTypes.func.isRequired
};

export default TimeEntryForm;
