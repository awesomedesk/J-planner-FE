import Link from 'next/link';

export default function Main_header() {
  const projectName = "J's Planner";

  return (
    <div className="main-header">
      <div className='p-8 flex items-center justify-between'>

        <Link href={"/"}>
          <h2>{projectName}</h2>
        </Link>
      </div>
    </div>
  );
}
