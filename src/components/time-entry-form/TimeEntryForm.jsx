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
  const [formState, setFormState] = useState(true);
  const [validity, setValidity] = useState({
    clientVhStateElement: true,
    activityVhStateElement: true
  });

  const handleBlur = event => {
    console.log(event.target.name);
    console.log(event.target.checkValidity());
    setValidity({
      ...validity,
      [event.target.name]: event.target.checkValidity()
    });
  };

  const formRef = useRef(null);
  console.log(formRef);

  const handleSubmit = event => {
    event.preventDefault();

    const formStatus = formRef.current.checkValidity();
    console.log(formStatus);
    setFormState(formStatus);
    if (formStatus === false) return false;

    createTimeEntry({
      client,
      id: Math.random(),
      startTimestamp: new Date(`${date}T${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date}T${stopTime}`).toISOString()
    });
  };

  return (
    <form
      className={`${styles.timeEntryForm} ${
        formState ? styles.timeEntryForm : styles.timeEntryFormInvalid
      }`}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <IconClose className={styles.iconClose} />
      <label className={styles.labelClient} htmlFor="client">
        CLIENT
        <input
          className={`${styles.inputClientValid} ${
            validity.clientVhStateElement
              ? styles.inputClientValid
              : styles.inputClientInvalid
          }`}
          id="client"
          maxLength="35"
          minLength="2"
          name="clientVhStateElement"
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
            validity.activityVhStateElement
              ? styles.inputActivityValid
              : styles.inputActivityInvalid
          }`}
          id="activity"
          maxLength="35"
          minLength="2"
          name="activityVhStateElement"
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
          name="DateVhStateElement"
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
          name="fromTimeVhStateElement"
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
          name="toTimeVhStateElement"
          onBlur={handleBlur}
          onChange={({ target }) => setStopTime(target.value)}
          required
          type="type"
          value={stopTime}
        />
      </label>
      <button
        className={`${styles.buttonTimeEntry} ${
          validity.activityVhStateElement
            ? styles.buttonTimeEntryValid
            : styles.buttonTimeEntryInvalid
        }`}
        type="submit"
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
