import { Button } from 'react-bootstrap';

type pushProps = {
  className: string;
  symbol: string;
  calculate: Function;
};

const Push = ({ className, symbol, calculate }: pushProps) => {
  return (
    <Button
      className={className}
      onClick={() => calculate(symbol)}
      key={symbol}
    >
      <h1 className="p-3">{symbol}</h1>
    </Button>
  );
};

export default Push;
