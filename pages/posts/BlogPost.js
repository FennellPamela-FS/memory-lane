import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
    return (
        <div>
            <Head>
                <title>Learning to Experience the Problem</title>
            </Head>
            <section class="mx-auto max-w-6xl py-3 sm:py-48 lg:py-20">
                <h1 class="mt-10 text-xl">
                    {'←'} <Link href="/" className="underline"> Back to home</Link>
                </h1>
                <div class="p-8 flex flex-col gap-4 sm:flex-col md:flex-row">
                    {/* <!--Post Page BlogPost Image --> */}
                    <div class="drop-shadow-md max-w-fit">
                        <Image class="rounded-lg h-auto" src="/images/photo-react-dom.png" width={650} height={430} alt="Money on a wooden plate" />
                    </div>

                    {/* <!-- Post BlogPost --> */}
                    <div class="p-4 h-auto rounded w-auto md:max-w-fit">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900 dark: text-gray-200">Learning to Experience the Problem</h1>

                            <p class="text-slate-500 text-sm font-medium dark:text-slate-400"><time class="pr-2" datetime="2022-05-16 19:00">March 7, 2022</time></p>
                        </div>
                        <div class="drop-shadow-md">
                            <div class="w-fit bg-white flex flex-col md:flex-row items-center gap-4 mt-8 p-4 border-2 border-solid border-gray-200 rounded-lg h-auto">
                                <div class="flex flex-col">
                                    <h1 className="text-2xl font-semibold px-8 text-slate-500 text-sm font-medium dark:text-slate-400">
                                        Practicing Problem-Solving with the intent to experience the problem so that you can learn something new.
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <p class="px-8 py-3">
                    The heart of my mission is to teach youth problem-solving skills using my knowledge as a developer. This assignment hit home with me when I saw the title “Solving Hard Problems.” Since most of my first cohort of students had never seen code before, I figured the podcast titled “Intentional Problem Solving: How To Work It Out, Without Google” would be fitting.
                </p>
                <h1 className="text-2xl font-semibold px-8">
                    Practicing Problem-Solving with the intent to experience the problem so that you can learn something new.
                </h1>

                <p class="px-8 py-3">
                    The host Jonathan Cutrell posed a challenge to solve 3 problems a day without reaching for google as your handy resource. Instead, he suggests that we think before we google. If I heard him correctly I think he said something like “Look, read, dissect, and then use your brain.” This reminded me of an episode I saw on TV where the wife was telling her husband of 15 years that he should know where the scissors are by now. Reiterating that they have been in the same place since the last time he asked over the years. Yet he still didn’t inherently know where they were. She then said, “think, use your brain.” He pause for a moment and slowly followed his hand as if it was leading him to the kitchen drawer. He opened the drawer and slowly pulled out the scissors to which he then replied “I did it” with a look of shock and awe on his face.
                </p>
                <p class="px-8 py-3">
                    That whole scene embodies what Cutrell is trying to imply. If we don’t experience the problem while we are trying to solve it, we may forfeit our opportunity to learn from the experience. Thus putting us in the situation to have to look it up again because we applied someone else knowledge to the problem without retaining the solution.

                </p>
            </section>
            {/* <!-- end Top Post section  --> */}
        </div >
    )
}

export default BlogPost