import Example from "@/pages/components/Example";
import ExampleLayout from "@/pages/components/ExampleLayout";
import exampleService from "@/services/example.service";

import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading } = useQuery(["data-hello"], exampleService.hello);

  return (
    <>
    <ExampleLayout>
      <div className="w-full">
        {isLoading && <>Loading...</>}
        {!isLoading && <Example data={data?.rows} />}
      </div>
    </ExampleLayout></>
  );
};

export default Home;
