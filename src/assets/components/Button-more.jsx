const Increment = (props) => {
  return (
    <button onClick={() => props.setCounterMore(props.counter + 1)}>+</button>
  );
};

export default Increment;
