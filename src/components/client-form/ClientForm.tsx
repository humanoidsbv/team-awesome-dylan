import React, { useState, useRef } from 'react';

import Input from '../../shared/components/input/Input';
import styles from './ClientForm.module.css';
import { ClientsProps } from '../../redux/clients/types';
import { ValidityState } from '../../shared/types';

interface ClientFormProps extends ClientsProps {
  isClientFormVisible: boolean;
  toggleClientForm: () => void;
}

function ClientForm(
  { toggleClientForm, isClientFormVisible, createClient }: ClientFormProps
): React.ReactElement {
  const [address, setAddress] = useState('');
  const [clientName, setClientName] = useState('');
  const [branch, setBranch] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');
  const [validity, setValidity] = useState<ValidityState>({});

  const formRef = useRef(null);

  const handleBlur = (event): void => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const resetFormStates = (): void => {
    setAddress('');
    setBranch('');
    setClientName('');
    setLocality('');
    setContactPhoneNumber('');
    setContactPerson('');
    setPostalCode('');
  };

  const handleCancel = (event): void => {
    event.preventDefault();
    resetFormStates();
    toggleClientForm();
  };

  const handleSubmit = (event): void => {
    event.preventDefault();
    resetFormStates();

    createClient({
      clientName,
      branch,
      address,
      id: Math.random(),
      locality,
      postalCode,
      contactPerson,
      contactPhoneNumber
    });
  };

  return (
    <div
      className={`${styles.clientForm} ${!isClientFormVisible
        && styles.clientFormHide}`}
    >
      <div className={styles.headerClientForm}>
        <span className={styles.headerClientFormText}>Add new client</span>
        <button
          className={styles.cancelButton}
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
        <button
          className={styles.saveButton}
          disabled={validity.form !== true}
          onClick={handleSubmit}
          type="button"
        >
          Save
        </button>
      </div>
      <div className={styles.personalDetailsTab}>Client details</div>
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formColumnOne}>
          <label className={styles.labelName} htmlFor="clientName">
            Client
            <Input
              isValid={validity.clientName !== false}
              maxLength="35"
              minLength="2"
              name="clientName"
              id="clientName"
              onBlur={handleBlur}
              onChange={(event): void => setClientName(event.target.value)}
              required
              value={clientName}
            />
          </label>
          <label className={styles.labelBranch} htmlFor="branch">
            Branch
            <Input
              isValid={validity.branch !== false}
              maxLength="35"
              minLength="2"
              name="branch"
              onBlur={handleBlur}
              onChange={(event): void => setBranch(event.target.value)}
              required
              value={branch}
            />
          </label>
          <label className={styles.labelAddress} htmlFor="address">
            Address
            <Input
              isValid={validity.address !== false}
              maxLength="35"
              minLength="2"
              name="address"
              onBlur={handleBlur}
              onChange={(event): void => setAddress(event.target.value)}
              required
              value={address}
            />
          </label>
        </div>
        <div className={styles.formColumnTwo}>
          <div className={styles.localityPostalCodeInputs}>
            <label className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <Input
                isValid={validity.postalCode !== false}
                maxLength="35"
                minLength="2"
                name="postalCode"
                onBlur={handleBlur}
                onChange={(event): void => setPostalCode(event.target.value)}
                required
                value={postalCode}
              />
            </label>
            <label className={styles.labelLocality} htmlFor="locality">
              Locality
              <Input
                isValid={validity.locality !== false}
                maxLength="35"
                minLength="2"
                name="locality"
                onBlur={handleBlur}
                onChange={(event): void => setLocality(event.target.value)}
                required
                value={locality}
              />
            </label>
          </div>
          <label className={styles.labelContactPerson} htmlFor="contactPerson">
            Contact person
            <Input
              isValid={validity.contactPerson !== false}
              maxLength="35"
              minLength="2"
              name="contactPerson"
              onBlur={handleBlur}
              onChange={(event): void => setContactPerson(event.target.value)}
              required
              value={contactPerson}
            />
          </label>
          <label
            className={styles.labelContactPhoneNumber}
            htmlFor="contactPhoneNumber"
          >
            Contact phone number
            <Input
              isValid={validity.contactPhoneNumber !== false}
              maxLength="35"
              minLength="2"
              name="contactPhoneNumber"
              onBlur={handleBlur}
              onChange={(event): void => setContactPhoneNumber(event.target.value)}
              required
              value={contactPhoneNumber}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ClientForm;
