import Link from "next/link"
import Image from "next/image"

const BlogPost = () => {
    return (
        <div>
            <section class="mx-20">
                <h1 class="mt-10 text-xl">
                    {'←'} <Link href="/" className="underline"> Back to home</Link>
                </h1>
                <div class="p-8 flex flex-col gap-4 sm:flex-col md:flex-row">
                    {/* <!--Post Page BlogPost Image --> */}
                    <div class="drop-shadow-md max-w-fit">
                        <Image class="rounded-lg h-auto" src="/images/photo-expo.jpg" width={650} height={430} alt="Money on a wooden plate" />
                    </div>

                    {/* <!-- Post BlogPost --> */}
                    <div class="p-4 h-auto rounded w-auto md:max-w-fit">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900 dark: text-gray-200">React Native: Who, What, and Why Expo … Go?</h1>

                            <p class="text-slate-500 text-sm font-medium dark:text-slate-400"><time class="pr-2" datetime="2022-05-16 19:00">March 7, 2022</time></p>
                        </div>
                        <div class="drop-shadow-md w-1/2">
                            <div class="w-fit bg-white flex flex-col md:flex-row items-center gap-4 mt-8 mr-8 p-4 border-2 border-solid border-gray-200 rounded-lg h-auto">
                                <div class="flex flex-col">
                                    <h1 className="text-2xl font-semibold px-8 text-slate-500 text-sm font-medium dark:text-slate-400">
                                        If you want to build apps without actually using Xcode and Android Studio, but you need the capabilities of Xcode and Android Studio to do so, then you want to use Expo.                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <p class="px-8 py-3">
                    As I am learning to appreciate my frontend development journey. I am enjoying the experience. Debugging, yelling at the screen when following the tutorial (so glad no one is here to see that when it happens). I have developed what i call the thinking pace, when i just have to get up and walk around the room to process what I have been working on. This has been the experience and i’m falling in love. Weird right?!?
                </p>
                <p class="px-8 py-3">
                    Well that’s my why. I love to problem solve and I enjoy the challenge of finding the solutions. Learning React was a game changer, actually I’m still learning. I developing the layout and then breaking it into reusable pieces (components) then putting it back together. Now we’re adding another layer of knowledge to this puzzle with React Navtive.
                </p>
                <p class="px-8 py-3">
                    Let’s start with what I’d like to call the “React Native Name Drop!” Yes, there are some notable names using React Native. Such as the ever so famous entity that realized we can bring the food to you in a new way, Uber Eats. How about my favorite place to keep up with all the peeps my son is playing basketball with as they progress through NCAA taking down the big boys of the ACC, yes I keep up using Twitter! Ok one more name to drop and i’ll get right to it, my Adidas (somebody got that, old-skool), yes the 3 stripe doing it right uses React Native too.

                </p>
                <p class="px-8 py-3">
                    So that’s the Who, now let’s briefly talk about the what. What is React Native? Can I say that React Native is a flavor of React that functions as an open-source framework designed for devices such as iOS and Android. It also works on Web and runs withing a browser. Where we are used to seeing <span>{`<div>s`}</span> in React Native you will <span>{`<View>s`}</span> utilizing web technologies and runs in native components. It feels and looks like React itself, you write in React and JavaScript, and you can deploy your builds as an optimized package for a specific platform.

                </p>
                <h1 className="text-2xl font-semibold px-8">
                    If you want to build apps without actually using Xcode and Android Studio, but you need the capabilities of Xcode and Android Studio to do so, then you want to use Expo.
                </h1>

                <p class="px-8 py-3">
                    Let’s finish up and address the last question, Why Expo Go? … uhm because … its .. easy! No, for real, its easy to setup and easy to get started. This tool exists to help developers get stuff done! Think BIG, start small and start now and start quickly. That is why! Expo itself is a framework of tools that allows you to use React Native to build apps. If you want to build apps without actually using Xcode and Android Studio, but you need the capabilities of Xcode and Android Studio to do so, then you want to use Expo. Now there are some tradeoffs and some limitations within the Expo SDK, but its a great place to start, so lets Go!
                </p>
            </section>
            {/* <!-- end Top Post section  --> */}
        </div >
    )
}

export default BlogPost