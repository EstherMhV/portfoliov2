// import Image from 'next/image';
// import Link from 'next/link';

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-full object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

