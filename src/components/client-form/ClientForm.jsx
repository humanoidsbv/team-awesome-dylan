import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './ClientForm.module.css';

function ClientForm({ toggleClientForm, isClientFormVisible, createClient }) {
  const [address, setAddress] = useState('');
  const [clientName, setClientName] = useState('');
  const [branch, setBranch] = useState('');
  const [locality, setLocality] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [placeholderOne, setPlaceholderOne] = useState('');
  const [placeholderTwo, setPlaceholderTwo] = useState('');
  const [validity, setValidity] = useState({});

  const formRef = useRef(null);

  const handleBlur = event => {
    setValidity({
      ...validity,
      form: formRef.current.checkValidity(),
      [event.target.name]: event.target.checkValidity()
    });
  };

  const resetFormStates = () => {
    setAddress('');
    setBranch('');
    setClientName('');
    setLocality('');
    setPlaceholderOne('');
    setPlaceholderTwo('');
    setPostalCode('');
  };

  const handleCancel = event => {
    event.preventDefault();
    resetFormStates();
    toggleClientForm();
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetFormStates();

    createClient({
      clientName,
      branch,
      address,
      id: Math.random(),
      locality,
      postalCode,
      placeholderOne,
      placeholderTwo
    });
  };

  return (
    <div
      className={`${styles.clientForm} ${!isClientFormVisible &&
        styles.clientFormHide}`}
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
          disabled={validity.form}
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
            <input
              className={`${styles.inputName} ${validity.clientName === false &&
                styles.inputNameInvalid}`}
              maxLength="35"
              minLength="2"
              name="clientName"
              onBlur={handleBlur}
              onChange={({ target }) => setClientName(target.value)}
              required
              value={clientName}
            />
          </label>
          <label className={styles.labelBranch} htmlFor="branch">
            Branch
            <input
              className={`${styles.inputBranch} ${validity.branch === false &&
                styles.inputBranchInvalid}`}
              maxLength="35"
              minLength="2"
              name="branch"
              onBlur={handleBlur}
              onChange={({ target }) => setBranch(target.value)}
              required
              value={branch}
            />
          </label>
          <label className={styles.labelAddress} htmlFor="address">
            Address
            <input
              className={`${styles.inputAddress} ${validity.address === false &&
                styles.inputAddressInvalid}`}
              maxLength="35"
              minLength="2"
              name="address"
              onBlur={handleBlur}
              onChange={({ target }) => setAddress(target.value)}
              required
              value={address}
            />
          </label>
        </div>
        <div className={styles.formColumnTwo}>
          <div className={styles.localityPostalCodeInputs}>
            <label className={styles.labelPostalCode} htmlFor="postalCode">
              Postal code
              <input
                className={`${styles.inputPostalCode} ${validity.postalCode ===
                  false && styles.inputPostalCodeInvalid}`}
                maxLength="35"
                minLength="2"
                name="postalCode"
                onBlur={handleBlur}
                onChange={({ target }) => setPostalCode(target.value)}
                required
                value={postalCode}
              />
            </label>
            <label className={styles.labelLocality} htmlFor="locality">
              City
              <input
                className={`${styles.inputLocality} ${validity.locality ===
                  false && styles.inputLocalityInvalid}`}
                maxLength="35"
                minLength="2"
                name="locality"
                onBlur={handleBlur}
                onChange={({ target }) => setLocality(target.value)}
                required
                value={locality}
              />
            </label>
          </div>
          <label
            className={styles.labelPlaceholderOne}
            htmlFor="placeholderOne"
          >
            Placeholder 1
            <input
              className={`${
                styles.inputPlaceholderOne
              } ${validity.placeholderOne === false &&
                styles.inputPlaceholderOneInvalid}`}
              maxLength="35"
              minLength="2"
              name="placeholderOne"
              onBlur={handleBlur}
              onChange={({ target }) => setPlaceholderOne(target.value)}
              required
              value={placeholderOne}
            />
          </label>
          <label
            className={styles.labelPlaceholderTwo}
            htmlFor="placeholderTwo"
          >
            Placeholder 2
            <input
              className={`${
                styles.inputPlaceholderTwo
              } ${validity.placeholderTwo === false &&
                styles.inputPlaceholderTwoInvalid}`}
              maxLength="35"
              minLength="2"
              name="placeholderTwo"
              onBlur={handleBlur}
              onChange={({ target }) => setPlaceholderTwo(target.value)}
              required
              value={placeholderTwo}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

ClientForm.propTypes = {
  createClient: PropTypes.func.isRequired,
  isClientFormVisible: PropTypes.bool.isRequired,
  toggleClientForm: PropTypes.func.isRequired
};

export default ClientForm;
