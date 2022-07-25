import './spinner.scss';

interface SpinnerProps {
  show: Boolean;
}
const Spinner = (props: SpinnerProps) => {
  const { show } = props;
  if (show) {
    return (
      <div data-testid='spinner' className='flex justify-center items-center'>
        <div className='sk-chase'>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
          <div className='sk-chase-dot'></div>
        </div>
      </div>
    );
  }
  return null;
};

export default Spinner;
