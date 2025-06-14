interface Props {
  data: unknown;
}

const DataDisplay: React.FC<Props> = () => {
  return <pre>{JSON.stringify(DataDisplay, null, 2)}</pre>;
};

export default DataDisplay;
