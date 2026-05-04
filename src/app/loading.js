const Loading = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-170px)] w-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl px-6 py-10 text-center sm:px-8 sm:py-12">
        <div className="mx-auto h-14 w-14 rounded-full border-4 border-[#9ac5ee] border-t-[#0f3d66] animate-spin" />
        <h2 className="mt-5 text-xl font-bold text-[#0f3d66] sm:text-2xl">
          Loading your books
        </h2>
        <p className="mt-2 text-sm text-[#1f5d99] sm:text-base">
          Please wait while we prepare your reading shelf.
        </p>
      </div>
    </section>
  );
};

export default Loading;
