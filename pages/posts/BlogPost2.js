import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


const BlogPost2 = () => {
    return (
        <div>
            <Head>
                <title>My Flight From Vanilla to MERN</title>
            </Head>
            <section class="mx-auto max-w-6xl py-3 sm:py-48 lg:py-20">
                <h1 class="mt-10 text-xl">
                    {'←'} <Link href="/" className="underline"> Back to home</Link>
                </h1>
                <div class="p-8 flex flex-col gap-4 sm:flex-col md:flex-row">
                    {/* <!--Post Page BlogPost2 Image --> */}
                    <div class="drop-shadow-md max-w-fit">
                        <Image class="rounded-lg h-auto" src="/images/photo-flight.png" width={650} height={430} alt="Money on a wooden plate" />
                    </div>
                    {/* <!-- Post BlogPost2 --> */}
                    <div class="p-4 h-auto rounded w-auto md:max-w-fit">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900 dark: text-gray-200">My Flight From Vanilla to MERN</h1>

                            <p class="text-slate-500 text-sm font-medium dark:text-slate-400"><time class="pr-2">Jan 16, 2023</time></p>
                        </div>
                        <div class="drop-shadow-md">
                            <div class="w-fit bg-white flex flex-col md:flex-row items-center gap-4 mt-8 p-4 border-2 border-solid border-gray-200 rounded-lg h-auto">
                                <div class="flex flex-col">
                                    <h1 className="text-2xl font-semibold px-8 text-slate-500 text-sm font-medium dark:text-slate-400">
                                        The Flight Widget: This was a one-way flight through 3 builds or should I say terminals. Maybe I should just stick with projects for this one.
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <p class="px-8 py-3">
                    One of my favor places to learn from is <Link href="https://www.freecodecamp.org/news/code-a-project-three-different-ways-javascript-rest-api-database/">FreeCodeCamp.org</Link>. I came across this amazing set of tutorials that did an excellent job in explaining how to build a project from start to finish using the MERN stack. The challenge was to build a Flight Widget that would show arrivals and departures much like what you would see in at an airport terminal.
                </p>
                <h1 className="text-2xl font-semibold px-8">
                    Practicing Problem-Solving with the intent to experience the problem so that you can learn something new.
                </h1>

                <p class="px-8 py-3">
                    This tutorial was comprised of multiple videos where you got to code along with its author Ania Kubow, a popular creator and software developer.
                </p>
                <p class="px-8 py-3">
                    <h1 className="text-xl">This was a two-hour video broken into 3 builds.</h1>
                    <div class="flex flex-col">
                        <p>
                            <span className="font-bold">Build 1:</span> We created the project using pure Javascript.
                        </p><p>
                            <span className="font-bold">Build 2:</span> Then we updated that build to use and API to get the data for the widget
                        </p><p>
                            <span className="font-bold">Build 3:</span> Create the React app with a mini-backend using Node.js to communicate with the database.
                        </p>
                    </div>
                </p>
                <p class="px-8 py-3">
                    <h1 className="text-xl">Since I was taking a course that was teaching about the MERN stack at that time, I chose to modify the builds to accompany what I was learning in class.</h1>
                    <div class="flex flex-col">
                        <p>
                            <span className="font-bold">A:</span> Setup router using Node.js Server backend
                        </p><p>
                            <span className="font-bold">B:</span> Created services to pass data through the app
                        </p><p>
                            <span className="font-bold">C:</span> Use async await to retrieve and return data
                        </p><p>
                            <span className="font-bold">D:</span> Passed API key and data URL through .env variables</p>
                    </div>
                </p>
                <p class="px-8 py-3">
                    Ania takes you through some interesting tools and examples of how to set up your environment. When it came to the database I chose to use mongodb Atlas. This was a bit of a challenge and I had to research quite a few articles to get it up and running with her tutorial. I found some great articles on DailyDev.org that helped tremendously.
                </p>
                <p class="px-8 py-3">

                </p>
                <p class="px-8 py-3">

                </p>
            </section>
            {/* <!-- end Top Post section  --> */}
        </div >
    )
}

export default BlogPost2