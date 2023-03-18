const Card = ({ data }: { data: any[] }) => {
  const cardStyle = {
    padding: "20px 100px",
    border: "1px solid black",
  };
  return (
    <>
      {data.map((item) => (
        <>
          <div style={cardStyle}>
            {item.name}
            {item.children?.length && <Card data={item.children} />}
          </div>
        </>
      ))}
    </>
  );
};

const EmployeeChart = ({ data }: { data: any }) => {
  return (
    <div>
      Employee Chart
      <Card data={data} />
    </div>
  );
};
export default EmployeeChart;
