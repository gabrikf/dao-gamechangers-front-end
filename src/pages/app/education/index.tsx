export default function Education() {
  return (
    <>
      <div className="  mx-5 md:mx-20  ">
        <h1 className="mb-2 text-base text-xl font-semibold text-indigo-600">
          Education
        </h1>
        <p>
          {" "}
          Education We believe in financial education and responsible investing.
          That`s why we are committed to your learning. Check out our tutorials.
        </p>
        <div className="flex flex-col gap-5 mt-4">
          <p>
            {" "}
            <a href="#">
              {" "}
              <span className="mr-2">📈 </span>What is blockchain?{" "}
            </a>
          </p>
          <p>
            {" "}
            <a href="#">
              {" "}
              <span className="mr-2">💲</span> What is criptocurrency?{" "}
            </a>
          </p>
          <p>
            {" "}
            <a href="#">
              {" "}
              <span className="mr-2">📊 </span>Whats is DAO?{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <h1 className="mx-2">
          Coming soon... Here we gonna post courses and add links with social
          media to teach about crypto and NFTs.
        </h1>
      </div>
    </>
  );
}
