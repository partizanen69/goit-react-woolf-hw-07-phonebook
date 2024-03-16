import { Oval } from 'react-loader-spinner';
import { WrapStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="140"
      width="140"
      color="#585ec2"
      secondaryColor="#585ec2"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
      strokeWidth={3}
    />
  );
};

export const FullPageLoader = () => {
  return (
    <WrapStyled>
      <Loader />
    </WrapStyled>
  );
};
