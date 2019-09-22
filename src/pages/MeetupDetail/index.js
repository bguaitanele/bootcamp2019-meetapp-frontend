import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { Container, Loading } from './styles';
import api from '~/services/api';
import { toast } from 'react-toastify';
import history from '~/services/history';
import { parseISO, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ptBr from 'date-fns/locale/pt-BR';
import { get } from 'lodash';

export default function MeetupDetail({
  match: {
    params: { meetupId },
  },
}) {
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    async function getMeetup() {
      try {
        const response = await api.get(`/meetups/${meetupId}`);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const data = {
          ...response.data,
          dataFormatada: format(
            utcToZonedTime(parseISO(response.data.date), timezone),
            "dd 'de' MMMM 'às' HH'h'mm",
            { locale: ptBr }
          ),
        };

        setMeetup(data);
      } catch (e) {
        toast.error('Meetup não encontrado');
        history.push('/dashboard');
      }
    }
    getMeetup();
  }, [meetupId]);

  async function handleCancelButton(id) {
    try {
      await api.delete(`/meetups/${id}`);
      toast.success('Evento cancelado com sucesso');
      history.push('/');
    } catch (e) {
      toast.error(
        get(e, 'response.data.error') ||
          'Ocorreu um erro ao tentar cancelar esse evento'
      );
    }
  }

  return (
    <>
      {meetup.id ? (
        <Container>
          <header>
            <h1>{meetup.title}</h1>
            <span>
              <Link
                to={`/meetup/${meetup.id}/edit`}
                className="button secondary"
              >
                <MdEdit size={20} color="#FFF" />
                Editar
              </Link>

              <button
                type="button"
                onClick={() => handleCancelButton(meetup.id)}
              >
                <MdDeleteForever size={20} color="#FFF" />
                Cancelar
              </button>
            </span>
          </header>
          <img src={meetup.banner.url} alt={meetup.title} />
          <div>{meetup.description}</div>
          <footer>
            <MdEvent size={20} /> {meetup.dataFormatada}
            <MdPlace size={20} /> {meetup.address}
          </footer>
        </Container>
      ) : (
        <Loading>carregando</Loading>
      )}
    </>
  );
}
