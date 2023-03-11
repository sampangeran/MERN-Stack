import Header from './../components/header';
import Search from './../components/search';
import Filter from './../components/filter';

export default function EventPage() {
  return (
    <>
      <Header />
      <main className="my-[50px] md:my-[116px]">
        <h1 className="uppercase text-rajdhani text-[34px] text-black text-center mb-[18px]">torche event</h1>
        <Search />
        <Filter />
      </main>
    </>
  )
}