import Main_header from "./main_header";
import Main_footer from './main_footer';

interface MainLayoutProps {
  title?:string,
  children?:any
}

export default function Main_layout(props: MainLayoutProps) {
  const {title, children} = props;
  return (
    <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
      <div>
        <Main_header/>
      </div>
      <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">
        {title}
      </h1>

      <div className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
        {children}
      </div>
      
      <div>
        <Main_footer/>
      </div>
    </div>
  );
}
