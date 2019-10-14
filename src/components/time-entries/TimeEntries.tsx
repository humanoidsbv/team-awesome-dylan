import React, { useEffect, useState } from 'react';

import Button from '../../shared/components/button/Button';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import styles from './TimeEntries.module.css';
import { TimeEntriesProps, TimeEntryInterface } from '../../redux/time-entries/types';

function TimeEntries({
  clients,
  createTimeEntry,
  deleteTimeEntry,
  fetchClients,
  fetchTimeEntries,
  filterTimeEntriesByClient,
  timeEntries
}: TimeEntriesProps): React.ReactElement {
  const [isTimeEntryFormVisible, setTimeEntryFormVisibility] = useState(false);

  const toggleTimeEntryForm = (): void => {
    setTimeEntryFormVisibility(!isTimeEntryFormVisible);
  };

  useEffect(() => {
    fetchClients();
    fetchTimeEntries();
  }, []);

  const handleChange = (event): {} => filterTimeEntriesByClient(
    !event.target.value ? null : Number(event.target.value)
  );

  return (
    <div className={styles.timeEntriesContainer}>
      <Button disabled={isTimeEntryFormVisible} onClick={toggleTimeEntryForm}>
        + New Time Entry
      </Button>
      <TimeEntryForm
        clients={clients}
        createTimeEntry={(newTimeEntry): {} => createTimeEntry(newTimeEntry)}
        isTimeEntryFormVisible={isTimeEntryFormVisible}
        toggleTimeEntryForm={toggleTimeEntryForm}
      />
      <div className={styles.headerTimeEntries}>
        <span className={styles.headerTimeEntriesText}> Time Entries </span>
        <select
          className={styles.filterClientsSelector}
          id="filterSelect"
          onChange={handleChange}
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
        ({
          client, id, startTimestamp, stopTimestamp
        }: TimeEntryInterface, index) => {
          const startDate = new Date(startTimestamp).toDateString();
          const previousDate = index > 0
            ? new Date(timeEntries[index - 1].startTimestamp).toDateString()
            : '';
          return (
            <React.Fragment key={id}>
              {previousDate !== startDate && (
                // eslint-disable-next-line react/jsx-indent
                <TimeEntryHeading startTimestamp={startTimestamp} />
              )}
              <TimeEntry
                client={client}
                deleteTimeEntry={(timeEntryId): {} => deleteTimeEntry(timeEntryId)}
                id={id}
                startTimestamp={startTimestamp}
                stopTimestamp={stopTimestamp}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}

export default TimeEntries;
