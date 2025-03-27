import InputBox from "@/app/ui/components/InputBox/InputBox";
import { economicIndicatorsInputs } from "@/app/ui/utils/constants/inputLists";

const Page = () => {
  return (
    <div>
      <h1>Unemployment</h1>
      <p>
        This API returns the monthly unemployment data of the United States. The
        unemployment rate represents the number of unemployed as a percentage of
        the labor force. Labor force data are restricted to people 16 years of
        age and older, who currently reside in 1 of the 50 states or the
        District of Columbia, who do not reside in institutions (e.g., penal and
        mental facilities, homes for the aged), and who are not on active duty
        in the Armed Forces (source).
        <br />
        Source: U.S. Bureau of Labor Statistics, Unemployment Rate, retrieved
        from FRED, Federal Reserve Bank of St. Louis. This data feed uses the
        FRED® API but is not endorsed or certified by the Federal Reserve Bank
        of St. Louis. By using this data feed, you agree to be bound by the
        FRED® API Terms of Use.
      </p>

      <form className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
        <InputBox inputList={economicIndicatorsInputs.unemploymentRate} />

        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
