const Decrement = (props) => {
  return (
    <button onClick={() => props.setCounterLess(props.counter - 1)}>-</button>
  );
};

export default Decrement;
