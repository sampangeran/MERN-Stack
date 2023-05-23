import { NextPage } from 'next';
import React, {useState, useEffect} from 'react';
import EventDetailsPage from '../../../modules/events/pages/detail';
import { useRouter } from 'next/router';
import axios from 'axios';

const  EventsPage: NextPage = () =>  {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get<Event>(`http://18.139.3.239/api/events/${id}`);
        setEvent(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    if (id) {
      fetchEvent();
    }
  }, [id]);
  
  return (
    <EventDetailsPage events={event} />
  )
}

export default EventsPage