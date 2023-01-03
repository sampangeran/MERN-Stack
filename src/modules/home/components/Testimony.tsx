import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

interface Testimony {
	name: string;
	job: string;
	desc: string;
}
function TestCard({ data }: { data: Testimony }) {
	return (
		<div className="p-5 text-left bg-[#ecf5ff] max-w-lg ">
			<p className="font-bold text-xl">{data.name}</p>
			<p className="text-lg font-bold">{data.job}</p>
			<p className="italic">{data.desc}</p>
		</div>
	);
}

const testi = [
	{
		name: "Dhanira",
		job: "Mahasiswa Pascasarjana Universitas Diponegoro",
		desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
	},
	{
		name: "Dhanira",
		job: "Mahasiswa Pascasarjana Universitas Diponegoro",
		desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
	},
	{
		name: "Dhanira",
		job: "Mahasiswa Pascasarjana Universitas Diponegoro",
		desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
	},
	{
		name: "Dhanira",
		job: "Mahasiswa Pascasarjana Universitas Diponegoro",
		desc: "Komunikasi dan penjelasan dari tutor Torche membuat kelas interaktif dan sangatlah jelas, materi yang dibahas disampaikan secara tuntas di kelas",
	},
];
export default function Testimony() {
	return (
		<section className="py-7 bg-[#ecf5ff] text-2xl mx-auto">
			<h2 className="font-bold text-center">What they said about Torche</h2>
			<div>
				<Swiper
					spaceBetween={30}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					speed={1500}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination, Navigation]}
				>
					{testi.map((item, index) => (
						<SwiperSlide key={index} className="mb-10">
							<TestCard data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
