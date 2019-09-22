import React, { useRef, useState, useEffect } from 'react';

import { Container } from './styles';
import { MdCameraAlt } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

export default function Banner() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setFile(defaultValue.id);
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img
            src={preview}
            alt="Banner do meetup"
            title="Clique para alterar a imagem"
          />
        ) : (
          <>
            <MdCameraAlt size={54}></MdCameraAlt>
            <p>Selecionar imagem</p>
          </>
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
