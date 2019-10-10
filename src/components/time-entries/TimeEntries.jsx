import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../shared/components/button/Button';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import styles from './TimeEntries.module.css';

function TimeEntries({
  clients,
  createTimeEntry,
  deleteTimeEntry,
  fetchClients,
  fetchTimeEntries,
  filterTimeEntriesByClient,
  timeEntries
}) {
  const [isTimeEntryFormVisible, setTimeEntryFormVisibility] = useState(false);

  const toggleTimeEntryForm = () => {
    setTimeEntryFormVisibility(!isTimeEntryFormVisible);
  };

  useEffect(() => {
    fetchClients();
    fetchTimeEntries();
  }, []);

  const handleChange = event =>
    filterTimeEntriesByClient(
      !event.target.value ? null : Number(event.target.value)
    );

  return (
    <div className={styles.timeEntriesContainer}>
      <Button disabled={isTimeEntryFormVisible} onClick={toggleTimeEntryForm}>
        + New Time Entry
      </Button>
      <TimeEntryForm
        clients={clients}
        createTimeEntry={newTimeEntry => createTimeEntry(newTimeEntry)}
        isTimeEntryFormVisible={isTimeEntryFormVisible}
        toggleTimeEntryForm={toggleTimeEntryForm}
      />
      <div className={styles.headerTimeEntries}>
        <span className={styles.headerTimeEntriesText}> Time Entries </span>
        <select
          className={styles.filterClientsSelector}
          id="filterSelect"
          onChange={handleChange}
          type="button"
        >
          <option value="">Filter by:</option>
          {clients.map(({ clientName, id }) => (
            <option key={id} value={id}>
              {clientName}
            </option>
          ))}
        </select>
      </div>
      {timeEntries.map(
        ({ client, id, startTimestamp, stopTimestamp }, index) => {
          const startDate = new Date(startTimestamp).toDateString();
          const previousDate =
            index > 0
              ? new Date(timeEntries[index - 1].startTimestamp).toDateString()
              : '';
          return (
            <React.Fragment key={id}>
              {previousDate !== startDate && (
                // eslint-disable-next-line react/jsx-indent
                <TimeEntryHeading startTime={startTimestamp} />
              )}
              <TimeEntry
                client={client.clientName}
                deleteTimeEntry={timeEntryId => deleteTimeEntry(timeEntryId)}
                id={id}
                startTime={startTimestamp}
                stopTime={stopTimestamp}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({
      startTimestamp: PropTypes.string
    })
  ),
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      clientName: PropTypes.string
    })
  ),
  createTimeEntry: PropTypes.func.isRequired,
  deleteTimeEntry: PropTypes.func.isRequired,
  fetchClients: PropTypes.func.isRequired,
  fetchTimeEntries: PropTypes.func.isRequired,
  filterTimeEntriesByClient: PropTypes.func.isRequired
};

TimeEntries.defaultProps = {
  clients: [],
  timeEntries: []
};

export default TimeEntries;
