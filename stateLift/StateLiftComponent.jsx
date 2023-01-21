const StateLiftComponent = ({ setName }) => {
  return (
    <div>
      <p>Digite seu nome</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default StateLiftComponent;
