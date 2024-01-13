import { Link } from "react-router-dom";

type LogoProps = {
  logo: string;
  companyNameDisplaying?: boolean;
};

function Logo({ logo, companyNameDisplaying = true }: LogoProps) {
  return (
    <Link className='flex items-center gap-3' to='/'>
      <img
        src={logo}
        alt='hrnet logo'
        aria-hidden='true'
        className=' w-8 h-full'
      />
      {companyNameDisplaying && (
        <span className='text-black hidden sm:block'>HRnet</span>
      )}
    </Link>
  );
}

export default Logo;