import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, MeetupList } from './styles';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { parseISO, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ptBr from 'date-fns/locale/pt-BR';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function getMeetups() {
      const response = await api.get('meetups');
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = response.data.map(meetup => {
        meetup.dataFormatada = format(
          utcToZonedTime(parseISO(meetup.date), timezone),
          "dd 'de' MMMM 'às' HH'h'mm",
          { locale: ptBr }
        );
        return meetup;
      });

      setMeetups(data);
    }
    getMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link className="button" to="/meetup/new">
          <MdAddCircleOutline size={20} color="#FFF"></MdAddCircleOutline>
          Novo meetup
        </Link>
      </header>
      <MeetupList>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={`/meetup/${meetup.id}`}>
              <strong>{meetup.title}</strong>
              <span>
                <p>{meetup.dataFormatada}</p>
                <MdChevronRight size={20} color="#FFF"></MdChevronRight>
              </span>
            </Link>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
