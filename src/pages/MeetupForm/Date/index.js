import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ptBr', ptBr);

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (!defaultValue) return;
    setSelected(parseISO(defaultValue));
  }, [defaultValue]);

  function handleChange(date) {
    setSelected(date);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        placeholderText="Data do meetup"
        selected={selected}
        showTimeSelect
        timeIntervals={30}
        timeCaption="Horas"
        locale="ptBr"
        dateFormat="Pp"
        autoComplete={0}
        onChange={date => handleChange(date)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
