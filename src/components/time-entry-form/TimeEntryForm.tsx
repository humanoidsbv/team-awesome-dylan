import React, { useState, useRef } from 'react';

import IconClose from '../../assets/icons/icon-close.svg';
import styles from './TimeEntryForm.module.css';
import { TimeEntriesProps } from '../../redux/time-entries/types';
import { ValidityState } from '../../shared/types';

interface TimeEntryFormProps extends TimeEntriesProps {
  isTimeEntryFormVisible: boolean;
  toggleTimeEntryForm: () => void;
}

function TimeEntryForm({
  clients,
  createTimeEntry,
  isTimeEntryFormVisible,
  toggleTimeEntryForm
}: TimeEntryFormProps): React.ReactElement {
  const today = new Date()
    .toISOString()
    .split('T')
    .shift();

  const [activity, setActivity] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('09:00');
  const [stopTime, setStopTime] = useState('17:00');
  const [validity, setValidity] = useState<ValidityState>({});

  const formRef = useRef(null);

  const handleBlur = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const handleCancel = (event): void => {
    event.preventDefault();
    toggleTimeEntryForm();
  };

  const handleSubmit = (event): void => {
    event.preventDefault();

    setClient('');
    setActivity('');

    createTimeEntry({
      client: Number(client),
      id: Math.random(),
      startTimestamp: new Date(`${date}T${startTime}`).toISOString(),
      stopTimestamp: new Date(`${date}T${stopTime}`).toISOString()
    });
    toggleTimeEntryForm();
  };

  return (
    <form
      className={`${styles.timeEntryForm} ${!isTimeEntryFormVisible
        && styles.timeEntryFormHide}`}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <IconClose className={styles.iconClose} onClick={handleCancel} />
      <label className={styles.labelClient} htmlFor="client">
        CLIENT
        <select
          className={styles.inputClient}
          id="client"
          name="client"
          onBlur={handleBlur}
          onChange={({ target }): void => setClient(target.value)}
          required
          value={client}
        >
          <option className={styles.inputClient} disabled value="">
            --select a client--
          </option>
          {clients.map(({ clientName, id }) => (
            <option key={id} value={id}>
              {clientName}
            </option>
          ))}
        </select>
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
          maxLength={35}
          minLength={2}
          name="activity"
          onBlur={handleBlur}
          onChange={({ target }): void => setActivity(target.value)}
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
          onChange={({ target }): void => setDate(target.value)}
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
          name="startTime"
          onBlur={handleBlur}
          onChange={({ target }): void => setStartTime(target.value)}
          required
          type="time"
          value={startTime}
        />
      </label>
      <label className={styles.labelsTime} htmlFor="stopTime">
        TO
        <input
          className={styles.inputsTime}
          id="stopTime"
          name="stopTime"
          onBlur={handleBlur}
          onChange={({ target }): void => setStopTime(target.value)}
          required
          type="type"
          value={stopTime}
        />
      </label>
      <button
        className={`${styles.buttonTimeEntry}`}
        type="submit"
        disabled={validity.form !== true}
      >
        Add
      </button>
    </form>
  );
}

export default TimeEntryForm;
