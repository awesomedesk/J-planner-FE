import Main_header from "./main_header";
import Main_footer from './main_footer';

interface MainLayoutProps {
  title?:string,
  children?:any
}

export default function Main_layout(props: MainLayoutProps) {

  const {title, children} = props;
  return (
    <div className="w-full flex flex-col">
      <div className="main-header-box">
        <Main_header/>
      </div>

      <div className="main-contents-box">
        {children}
      </div>
      
      <div className="main-header-box">
        <Main_footer/>
      </div>
    </div>
  );
}

