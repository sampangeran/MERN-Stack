import Logo from "../../../assets/navbar/Torche_Logo-01_White.png";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
		const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const navbarDatas = [
        {
            title: 'Layanan',
            href: '/#service',
        },
		{
            title: 'Kursus',
            submenu: [
                {
                    title: 'Mata kuliah',
                    href: '/courses'
                },
                {
                    title: 'Mendaftar kelas',
                    href: '/registration'
                },
                {
                    title: 'Harga',
                    href: '/pricing'
                },
            ]
        },
        {
            title: 'Tutor',
            href: '/tutors',
        },
        {
            title: 'Event',
            href: '/event',
        },
        {
            title: 'Web-Apps',
            submenu: [
                {
                    title: 'Web Calculator',
                    href: '/web-calc'
                },
            ]
        },
        {
            title: 'Karir',
            href: '/careers',
        },
		{
            title: 'Tentang Kami',
            href: '/about',
        }
    ]

	const bahasa = [
		{
			title: 'ID',
			icon: <Image src="../../../public/assets/img/navbar/Indo.png" alt="bendera"></Image>,
			submenu: [
				{
					title: 'English',
				}
			]
		}
	]

    return (
        <>
            <div className="fixed z-50 top-0 w-full font-rajdhani px-7 py-1 font-medium bg-[#0b122a] min-h-fit text-white flex items-center flex-row justify-around">
                <div>
                    <a href="/" className="cursor-pointer"><Image className="w-[128px] h-[72px]" src={Logo} alt="Logo"></Image></a>
                </div>
                <div>
                    <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className={`${isNavbarOpen && 'hidden'} lg:hidden hamburger`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <ul className="lg:flex hidden flex-row items-center mt-0">
                        {
                            navbarDatas.map((data, index) => {
                                return (
                                    <li key={index} className="relative lg:mx-3 lg:my-0 my-3 transition duration-200 font-light">
                                        <List data={data} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
				<div className="lg:flex hidden justify-center">
					<a href="/registration" className="bg-[#5885E9] rounded-full p-3 px-[20px] text-[16px] font-cairo font-bold">Daftar Kelas</a>
				</div>
            </div>
            <div className={`${isNavbarOpen ? 'block' : 'hidden'} backdrop lg:hidden absolute z-40 left-0 top-0 right-0 min-h-screen`} style={{background: 'rgba(23, 35, 46, 0.9)'}}></div>
            <button onClick={() => setIsNavbarOpen(!isNavbarOpen)} className={`${isNavbarOpen ? 'block' : 'hidden'} lg:hidden absolute right-5 top-5 z-50 text-white`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul className={`${isNavbarOpen ? 'block' : 'hidden'} lg:hidden left-3 right-3 absolute top-14 text-white bg-[#0b122a] flex flex-col mt-0 bg-red p-3 z-50 min-h-[calc(100%-70px)]`}>
                {
                    navbarDatas.map((data, index) => {
                        return (
                            <li key={index} className="relative lg:mx-3 lg:my-0 my-3 transition duration-200 font-light">
                                <List data={data} />
                            </li>
                        )
                    })
                }
                <div className="bg-[#5885E9] rounded-full w-1/2 mx-auto mb-3">
                    <a href="/registration" className="flex justify-center p-3 px-[20px] text-[16px] font-cairo font-bold">Daftar Kelas</a>
                </div>
            </ul>
        </>
    );
}

interface ListProps {
    data: any,
}

const List = ({ data }: ListProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
            className="relative mx-1 transition duration-200 font-light hover:text-blue-500">
            {
                Object.keys(data).includes('submenu') ?
                    <>
                        <div className="flex items-center justify-between">
                            <p className="cursor-pointer">{data.title}</p>
                            <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 lg:mt-1 lg:ml-2 transition duration-200 ${isOpen && 'rotate-180'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div
                            onMouseOver={() => setIsOpen(true)}
                            onMouseOut={() => setIsOpen(false)}
                            className={`${isOpen ? 'lg:absolute' : 'hidden'} z-50 bg-[#0b122a] p-5 min-w-[200px] lg:-ml-5`}>
                            {
                                data.submenu !== undefined &&
                                data.submenu.map((item: { title: string, href: string }, index: number) => {
                                    return (
                                        <div key={index}>
                                            <Submenu
                                                key={index}
                                                title={item.title}
                                                href={item.href}
                                                isOpen={isOpen}
                                                setIsOpen={setIsOpen}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    :
                    <a href={data?.href}>{data.title}</a>
            }
        </div>
    )
}

interface SubmenuProps {
    title?: string,
    href?: string,
    isOpen?: boolean,
    setIsOpen: Function
}

const Submenu = ({ title, href, isOpen, setIsOpen }: SubmenuProps) => {
    return (
        <div
            className={`hover:text-blue-500 text-white transition duration-200 my-3`}>
            <a href={href}>{title}</a>
        </div>
    );
}

export default Header;
