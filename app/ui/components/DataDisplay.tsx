'use client';

interface Props {
  data: any;
}

const DataDisplay: React.FC<Props> = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default DataDisplay;
