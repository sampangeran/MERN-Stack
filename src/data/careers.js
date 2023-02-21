import adimas from "../assets/Careers/testimonials/adimas.webp"
import renci from "../assets/Careers/testimonials/renci.webp"
import wiwit from "../assets/Careers/testimonials/wiwit.webp"
import joas from "../assets/Careers/testimonials/joas.webp"
import feby from "../assets/Careers/testimonials/feby.webp"
import * as Icon from 'react-bootstrap-icons';
import Image from 'next/image'


export let job = [
    {
        id: 1,
        title: 'Finance',
        icon: <Icon.CurrencyDollar />,
        vacancy: 0,
    },
    {
        id: 2,
        title: 'General-Affairs',
        icon: <Icon.PersonWorkspace />,
        vacancy: 0,
    },
    {
        id: 3,
        title: 'Curriculum-and-Education',
        icon: <Icon.BookHalf />,
        vacancy: 2,
    },
    {
        id: 4,
        title: 'Marketing-and-Sales',
        icon: <Icon.BarChartLine />,
        vacancy: 0,
    },
    {
        id: 5,
        title: 'CEO-Office',
        icon: <Icon.PersonSquare />,
        vacancy: 0,
    },
    {
        id: 6,
        title: 'Technology-and-Engineering',
        icon: <Icon.Laptop />,
        vacancy: 0,
    },
    {
        id: 7,
        title: 'Human-  Resource',
        icon: <Icon.PeopleFill />,
        vacancy: 0,
    },
    {
        id: 8,
        title: 'Tutors',
        icon: <Icon.Book />,
        vacancy: 0,
    }
]

export const testi = [
    {
        icon: <Icon.Quote />,
        testi: 'Mulai dari CEO dan jajarannya merangkul kami semua tanpa membedakan tanpa menyalahkan kami apabila ada kesalahan yang dilakukan selama proses magang. CEO nya mampu menciptakan hubungan dan komunikasi serta kerja sama tim yang baik dalam mencapai target perusahaan.',
        nama: 'Renci Gusri Solerena',
        jabatan: 'Legal Office Intern',
        photo: <Image src={renci} alt="renci" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Yang aku sukai adalah tim nya, jujur aku belum ada basic sama sekali dalam legal coorporate tapi ka renci dan ka ranti ngembimbing aku, dan ka leon ga marahin ga kalo aku ga paham.',
        nama: 'Wiwit Purwoedi',
        jabatan: 'Legal Office Intern',
        photo: <Image src={wiwit} alt="wiwit" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Beberapa hal yang aku suka dari internship di Torche itu adalah kakak – kakak di Torche sangat ramah dan juga supportive. Sistem internnya juga tidak terlalu memberatkan intern (dari yang aku rasakan di comm dev).',
        nama: 'Adimas Anugerah Rivandy',
        jabatan: 'Marketing and Sales Intern',
        photo: <Image src={adimas} alt="adimas" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Selama melakukan internship selama 3 bulan terdapat beberapa hal yang disukai selama pelaksanaan intern seperti pemberian job desc yang detail, didampingi oleh head dari divisi dengan baik dan responsive apabila terdapat pertanyaan, memiliki workload yang tidak melebihi dari kontrak, dan waktu intern yang tepat waktu.',
        nama: 'Joas Kurnianto',
        jabatan: 'Business Process Development Intern',
        photo: <Image src={joas} alt="joas" width={100} height={100} />
    },
    {
        icon: <Icon.Quote />,
        testi: 'Yang saya sukai dari program internship ini adalah lingkungannya yang sangat friendly, baik dari C-Levelnya maupun Head nya sangat friendly kepada para intern. Selain itu juga cukup open pada internnya. Selain itu sistem dan waktu pengerjaan task nya sangat flexible, sehingga tidak membebankan intern.',
        nama: 'Febby Pangestu Iskandar',
        jabatan: 'Human Resources Intern',
        photo: <Image src={feby} alt="feby" width={100} height={100} />
    }
]