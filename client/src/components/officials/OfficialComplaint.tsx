const OfficialComplaint = () => {
  return (
    <div>
      <div
        className="text-center flex flex-col"
        style={{ margin: "250px 360px" }}
      >
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl">
            Upload the <span className="text-violet-500">complaint</span> into
            <span className="text-violet-500"> Blockchain</span>.
          </h1>
        </div>

        <div className="flex justify-center">
          <button className="w-3/12 rounded py-1 text-2xl bg-violet-500 hover:bg-violet-600">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficialComplaint;
