import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { ListSylabus, ListTutors } from "../dummy-data";
import Tutors from "./tabs/Tutors";

function Description() {
  return (
    <div className="bg-[#F5F7FF] p-3 text-[#151515] text-xs">
      This course is the second series of basics physics for engineers. This course covers materials of Electrostatic (electric field, Coulomb Law) , Electric Potential Energy, Electrical Potential, Capacitor. Magnetostic, Electromotive
      force , Alternating Current, Electromagnetic Wave, Modern Physics, Atomic Physics.
    </div>
  );
}

function Sylabus() {
  const [showDetail, setShowDetail] = useState(0);
  const handleDetail = (idx: number) => {
    if (showDetail === idx) {
      setShowDetail(-1);
    } else {
      setShowDetail(idx);
    }
  };

  return (
    <div className="overflow-y-auto max-h-80 lg:max-h-44 flex flex-col gap-4">
      {ListSylabus.map((item, index) => (
        <div key={index} className="bg-[#F5F7FF] p-3">
          <div className="flex items-center justify-between gap-2 cursor-pointer mb-2" onClick={() => handleDetail(index)}>
            <div>
              <p className="text-base font-bold">{item.title}</p>
              <p className="text-sm text-[#494949]">{item.description}</p>
            </div>
            {showDetail === index ? <ChevronDown size={15} color="#494949" /> : <ChevronUp size={15} color="#494949" />}
          </div>
          {showDetail === index && (
            <ol className="list-decimal list-inside text-sm text-[#494949] pt-2 border-t border-[#A7A7A7]">
              {item.elements.map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
}

const ListDetailMenu = [
  {
    id: 0,
    content: <Description />,
  },
  {
    id: 1,
    content: <Sylabus />,
  },
  {
    id: 3,
    content: <Tutors />,
  },
];

export default function CourseMenuDetail({ menu }: { menu: number }) {
  return <div className="mt-2">{ListDetailMenu[menu].content}</div>;
}
