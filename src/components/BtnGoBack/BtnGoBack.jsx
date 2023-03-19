import PropTypes from 'prop-types';
import { Button, Wrapper } from './BtnGoBack.styled';
import { HiArrowSmLeft } from 'react-icons/hi';

const BtnGoBack = ({ previousLocation: { current } }) => {
  return (
    <Button to={current}>
      <Wrapper>
        <HiArrowSmLeft /> Go back
      </Wrapper>
    </Button>
  );
};

BtnGoBack.propTypes = {
  previousLocation: PropTypes.object.isRequired,
};

export default BtnGoBack;
