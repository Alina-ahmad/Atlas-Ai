import Image from "next/image";

export default function Hero() {
    return(
       <section className="mt-24 grid items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="font-sans text-sm font-medium text-muted-text">
              Welcome back :)
            </p>

            <h1 className="mt-4 max-w-xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-text">
              What are you curious about today?
            </h1>

            <p className="mt-6 max-w-lg font-sans text-base leading-7 text-muted-text">
              Learn at your own pace, explore ideas, and grow your
              understanding with Atlas.
            </p>

            <button
              className="
                
                cursor-pointer
                mt-8
                rounded-2xl
                bg-sage/50
                px-6 py-3
                font-sans text-sm font-medium text-background
                shadow-sm
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:bg-sage/80
                hover:shadow-md
                active:translate-y-0
              "
            >
              🌱 Start learning
            </button>
          </div>

          {/* Plant area */}
          <div className="flex min-h-[360px] items-center justify-center ">

            <div className="relative flex h-90 w-90 items-center justify-center">

              {/* Organic background */}
              <div
                className="
                  absolute inset-8
                  rounded-[45%_55%_50%_50%]
                  bg-sage/10
                  rotate-[-8deg]
                "
              />

              <div
                className="
                  absolute inset-16
                  rounded-[55%_45%_55%_45%]
                  bg-[rgba(200,192,214,0.20)]
                  rotate-[8deg]
                "
              />

              {/* Temporary plant */}
              <div className="mb-28 relative z-10 text-center ">
                <Image
                src="/images/atlas-plant2.png"
                alt="Atlas learning growth"
                width={700}
                height={500}
                priority
                className="h-auto w-full pl-20"
                />

                <p className="font-display text-xl font-medium text-text">
                  One idea at a time.
                </p>

                <p className="mt-1 font-sans text-sm text-muted-text">
                  Keep growing.
                </p>
              </div>

            </div>
          </div>

        </section>

    );
}