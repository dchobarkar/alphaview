'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { apiMap } from '@/app/ui/utils/constants/apiMap';
import { fetchFromAlphaVantage } from '@/app/ui/libs/alphaVantage';
import ParameterForm from '@/app/ui/components/ParameterForm';
import DataDisplay from '@/app/ui/components/DataDisplay';

const EndpointPage = () => {
  const { category, endpoint } = useParams() as {
    category: string;
    endpoint: string;
  };
  const apiInfo = apiMap[category]?.[endpoint];
  const [data, setData] = useState(null);

  if (!apiInfo) return <div>Invalid API endpoint</div>;

  const handleSubmit = async (params: Record<string, string>) => {
    const result = await fetchFromAlphaVantage(apiInfo.function, params);
    setData(result);
  };

  return (
    <div>
      <h1>{endpoint} Data</h1>
      <ParameterForm
        requiredParams={apiInfo.requiredParams}
        onSubmit={handleSubmit}
      />
      {data && <DataDisplay data={data} />}
    </div>
  );
};

export default EndpointPage;
