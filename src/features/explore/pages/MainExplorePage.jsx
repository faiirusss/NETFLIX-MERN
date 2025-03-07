import ExploreLayout from "@/components/Layouts/ExploreLayout";

const MainExplorePage = () => {
  return (
    <ExploreLayout>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">jumbotron</h3>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            test
          </div>
        </div>
      </div>
    </ExploreLayout>
  );
};

export default MainExplorePage;
