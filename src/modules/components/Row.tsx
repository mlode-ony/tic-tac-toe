import { Square } from './Square';

const Row = () => {
  return (
    <div className="game__board--row">
      <Square />
      <Square />
      <Square />
    </div>
  );
}; 

export default Row;
