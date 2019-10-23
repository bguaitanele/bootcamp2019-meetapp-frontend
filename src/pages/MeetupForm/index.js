import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import Banner from './Banner';
import { MdAddCircleOutline } from 'react-icons/md';
import DatePicker from './Date';
import api from '~/services/api';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import history from '~/services/history';

export default function MeetupForm({
  match: {
    params: { meetupId },
  },
}) {
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function getMeetup() {
      const response = await api.get(`/meetups/${meetupId}`);
      if (meetupId) {
        setMeetup(response.data);
      }
    }
    if (meetupId) {
      getMeetup();
    }
  }, [meetupId]);

  async function handleSubmit(form) {
    try {
      if (meetupId) {
        await api.put(`/meetups/${meetupId}`, form);
      } else {
        await api.post('/meetups', form);
      }
      toast.success('Meetup salvo com sucesso');
      history.push('/');
    } catch (e) {
      toast.error(
        get(e, 'response.data.error') ||
          'Ocorreu um erro ao cadastrar esse evento'
      );
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={meetup}>
        <Banner name="banner_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          multiline
          name="description"
          placeholder="Descrição completa"
          value={meetup.description}
        />
        {/* <Input
          name="date"
          type="datetime"
          placeholder="Data do meetup (dd/mm/aaaa hh:mm)"
        ></Input> */}
        <DatePicker name="date"></DatePicker>

        <Input name="address" type="text" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline size={20} />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
