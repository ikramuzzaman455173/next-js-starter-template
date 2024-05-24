import Link from 'next/link';
const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              create your form.
              <strong className="font-extrabold text-primary sm:block"> with in few second not in hours. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-custom-primary-gray normal-case">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href=""
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-custom-primary-hover focus:outline-none focus:ring active:bg-custom-primary-active sm:w-auto"
              >
                +create ai form
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-custompbg-custom-primary-hover focus:outline-none focus:ring active:text-custom-primbg-custom-primary-active sm:w-auto"
                href=""
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
