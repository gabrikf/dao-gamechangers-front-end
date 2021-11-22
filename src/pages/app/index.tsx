export default function Home() {
  return (
    <>
      <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
            alt="Testimonial avatar"
            src="/images/logo1.jpg"
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          GCT
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">
          210.000.000 Total Supply
        </p>

        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="text-xl font-medium text-indigo-500 dark:text-indigo-300"
          >
            GameChangers Token
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <h1 className="mx-2">
          Coming soon... Here we gonna show our growing in real-time.
        </h1>
      </div>
    </>
  );
}
