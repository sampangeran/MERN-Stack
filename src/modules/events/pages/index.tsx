import Header from './../components/header';
import Search from './../components/search';
import Filter from './../components/filter';
import CardComponent from './../components/card';
import { useState, useEffect } from 'react';
import Pagination from './../components/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  dateStart: string;
  dateEnd: string;
  time: string;
  link: string;
  active: boolean;
  typeEvent: string;
}

interface Props {
  events: Event[];
}

export default function EventPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [events, setEvents] = useState<Event[]>([]);
  const [query, setQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 4;
  const totalPage = Math.ceil(events?.length / dataPerPage);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get("http://18.139.3.239/api/events/findAll");
      setEvents(response.data.data);
    };
    fetchEvents();
  }, []);

  const handleSearch = async () => {
    const response = await axios.get(`http://18.139.3.239/api/events/search?title=${query}`);
    setEvents(response.data.data);
  };

  const handleEventType = async (e) => {
    const query = e.target.value;
    if(query) {
      const response = await axios.get(`http://18.139.3.239/api/events/search?typeEvent=${query}`);
      setEventType(query);
      setEvents(response.data.data);
    } else {
      const response = await axios.get(`http://18.139.3.239/api/events/findAll`);
      setEvents(response.data.data);
    }
  };

  const handleSortBy = async (e) => {
    const value = e.target.value;
    setSortBy(value);
    console.log(value);
    let query = '';
    if(value === 'date-asc' || value === 'date-desc') {
      query = value.split('-')[1];
      const response = await axios.get(`http://18.139.3.239/api/events/search?sortByDate=${query}`);
      setEvents(response.data.data);
    } else if(value === 'name-asc' || value === 'name-desc') {
      query = value.split('-')[1];
      const response = await axios.get(`http://18.139.3.239/api/events/search?sortByName=${query}`);
      setEvents(response.data.data);
    } else {
      const response = await axios.get(`http://18.139.3.239/api/events/findAll`);
      setEvents(response.data.data);
    }
    console.log(events);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = events?.slice(startIndex, endIndex);

  return (
    <>
      <Header events={events} />
      <main className="my-[50px] md:my-[116px]" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="uppercase text-rajdhani text-[34px] text-black text-center mb-[18px]">torche event</h1>
        <Search onSearch={handleSearch} query={query} setQuery={(e) => setQuery(e.target.value)} />
        <Filter handleSortBy={handleSortBy} sortBy={sortBy} handleEventType={handleEventType} eventType={eventType} />
        <div className="mt-8">
          {currentData?.map((data, idx) => (
            <CardComponent key={idx} poster={data?.image} jenisEvent={data?.typeEvent} judul={data?.title} waktu={`${data?.dateStart} - ${data?.dateEnd}, ${data?.time}`} deskripsi={data?.description} urlEvent={data?.link} urlDetail={`/events/details/${data?._id}`} />
          ))}
          <Pagination currentPage={currentPage} totalPage={totalPage} totalData={events?.length} onPageChange={handlePageChange} />
        </div>
      </main>
    </>
  )
}
