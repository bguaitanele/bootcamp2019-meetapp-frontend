import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, MeetupList } from './styles';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import Paginacao from '~/components/Paginacao';
import { parseISO, format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ptBr from 'date-fns/locale/pt-BR';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagina, setPagina] = useState(1);

  async function getMeetups(page = 1) {
    setPagina(page);
    const response = await api.get('meetups', { params: { page } });
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTotal(response.headers['x-total-count']);
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

  useEffect(() => {
    getMeetups(1);
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
      <Paginacao
        totalRegistros={total}
        pagina={pagina}
        handleMudarPagina={getMeetups}
      />
    </Container>
  );
}
