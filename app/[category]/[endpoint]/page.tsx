"use client";
import DataDisplay from "@/app/ui/components/shared/DataDisplay";
import InputForm from "@/app/ui/components/shared/InputForm";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import { apiMap } from "@/app/ui/constants/apiMap";
import fetchFromAlphVantage from "@/app/ui/libs/alphaVantage";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { category, endpoint } = useParams() as {
    category: keyof typeof apiMap;
    endpoint: string;
  };
  const [data, setData] = useState(null);

  const apiInfo =
    category && endpoint && apiMap[category]
      ? (apiMap[category][
          endpoint as keyof (typeof apiMap)[typeof category]
        ] as {
          requiredParams: string[];
          function: string;
        })
      : undefined;

  if (!apiInfo) return <div>Invalid API endpoint</div>;

  const handleSubmit = async (params: Record<string, string>) => {
    const result = await fetchFromAlphVantage(apiInfo.function, params);
    setData(result);
  };

  return (
    <PageLayout>
      <h1>{endpoint} Data</h1>
      <InputForm
        requiredParams={apiInfo.requiredParams}
        onSubmit={handleSubmit}
      />

      {data && <DataDisplay data={data} />}
    </PageLayout>
  );
};

export default Page;
