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
                        <Image class="rounded-lg h-auto" src="/images/photo-mvc.jpg" width={650} height={430} alt="Money on a wooden plate" />
                    </div>

                    {/* <!-- Post BlogPost --> */}
                    <div class="p-4 h-auto rounded w-auto md:max-w-fit">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900 dark: text-gray-200">M-V-C ???</h1>

                            <p class="text-slate-500 text-sm font-medium dark:text-slate-400"><time class="pr-2" datetime="2022-05-16 19:00">January 29, 2023</time></p>
                        </div>
                        <div class="drop-shadow-md w-1/2">
                            <div class="w-fit bg-white flex flex-col md:flex-row items-center gap-4 mt-8 mr-8 p-4 border-2 border-solid border-gray-200 rounded-lg h-auto">
                                <div class="flex flex-col">
                                    <h1 className="text-2xl font-semibold px-8 text-slate-500 text-sm font-medium dark:text-slate-400">
                                        I see all this CRUD in my VIEW!!!
                                    </h1>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <p class="px-8 py-3">
                    As a sports fan, I hear the chants of the fans in my head as Steph Curry steps up to the foul line to shoot his free throws after nailing a long three and some actually fouled him {`(this is where is a s-m-h)`}. The crowds shout M-V-P, M-V-P, M-V-P, yes the most valuable player. However, i digress as we are not talking sports here this is the land of coding and the MVC does not translate as most-valuable-computer. Here MVC is the Model, View Controller.
                </p>
                <p class="px-8 py-3">
                    <span className="font-bold">MODEL:</span> represents the data.</p><p>
                    <span className="font-bold">VIEW:</span> represents the layout or the way data is being displayed to the user {`(viewer)`}</p><p>
                    <span className="font-bold">CONTROLLER:</span> represents the routes used to access the model and displays the parts needed to be viewed.
                </p>
                <p class="px-8 py-3">
                    For example, I have a set of data on Students. Each Student has a name and an assigned class. So that data set would consist of an userId, name, and class. All of this can be defined in our Model as our data set or scheme. The model is a student database.
                </p>
                <p class="px-8 py-3">
                    Now if I am building an app, I would create a user interface {`(UI)`} to access that data and display it on the screen. So maybe there are 3 students in that class and I want to see all three students and then maybe update one of their courses. The UI would be our View.
                </p>

                <p class="px-8 py-3">
                    I will conclude by saying that the MVC Architecture itself is made up of routes connected to a model that accesses data to bring into view utilizing CRUD which is to create, read, update, and delete. Create adds data to the model by such as adding new record in a database. When that data is accessed and brought into view, it can name be read.
                </p>
                <p class="px-8 py-3">
                    That whole scene embodies what Cutrell is trying to imply. If we don’t experience the problem while we are trying to solve it, we may forfeit our opportunity to learn from the experience. Thus putting us in the situation to have to look it up again because we applied someone else knowledge to the problem without retaining the solution.

                </p>
                <h1 className="text-2xl font-semibold px-8">
                    I see all this CRUD in my VIEW!!!
                </h1>
                <p class="px-8 py-3">
                    <span className="font-bold">CREATE:</span> post - access the model via a controller</p><p>
                    <span className="font-bold">READ:</span> get - controller brings the data into View</p><p>
                    <span className="font-bold">UPDATE:</span> put/patch - access the model via the controller to update the data</p><p>
                    <span className="font-bold">DELETE:</span> delete - access the model via the controller to remove or delete the data
                </p>
                <p class="px-8 py-3">
                    Basically, I can see all this CRUD in my View!! Personally I like to call it the crud controller relationship {`(i’m just saying …)`} If I had to explain the MVC architecture in laymen's terms, then the crud controller relationship would be my approach.
                </p>
            </section>
            {/* <!-- end Top Post section  --> */}
        </div >
    )
}

export default BlogPost