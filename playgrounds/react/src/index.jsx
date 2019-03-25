import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import useForm from '@validate-me/react/useForm';

import InputColor from './inputs/InputColor';
import InputDate from './inputs/InputDate';
import InputCheckbox from './inputs/InputCheckbox';
import InputCheckboxList from './inputs/InputCheckboxList';

let alreadyProcessed = false;

function App() {
  const [success, setSuccess] = useState(false);
  const [formState, form] = useForm();

  return (
    <div className="app">
      <form
        onSubmit={evt => {
          evt.preventDefault();

          const success = form.validate();

          setSuccess(success);

          if (!success || alreadyProcessed) {
            return;
          }

          alreadyProcessed = true;

          form.process({
            asd1: ['unexistingRule'],
            asd2: ['min', '10'],
            unexistingField: ['withInvalidRule(Wtf)'],
          });
        }}
      >
        <InputCheckbox form={form} label="Check me plz" name="check" />
        <InputCheckboxList
          form={form}
          name="ides"
          label="What IDE do you like?"
          options={{
            vscode: 'VSCode',
            intelliIdea: 'IntelliJIdea',
            sublime: 'Sublime',
            atom: 'Atom',
            vim: 'Vim',
          }}
        />
        <InputDate
          form={form}
          label="What day is today?"
          name="date"
          min="2018-02-24"
          max="2019-12-31"
          type="date"
          required
        />
        <InputDate
          form={form}
          label="What time is it?"
          name="time"
          min="10:10"
          max="20:20"
          type="time"
          required
        />
        <InputDate
          form={form}
          label="What daytime is it?"
          name="datetime-local"
          min="2018-02-24T10:10"
          max="2019-12-31T20:20"
          type="datetime-local"
          required
        />
        <InputDate
          form={form}
          label="What week is today?"
          name="week"
          min="2018-W02"
          max="2019-W50"
          type="week"
          required
        />
        <InputDate
          form={form}
          label="What month is today?"
          name="month"
          min="2018-02"
          max="2019-12"
          type="month"
          required
        />
        <InputColor form={form} label="Change my color" name="color" required />
        <hr />
        <button disabled={formState.touched && formState.invalid}>Save!</button>
        <div>Persisted? {success ? 'yes' : 'no'}</div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById('react');

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
);
