
const Details = () => {
    return (
        <div>
            <section class="mx-20">
                <h1 class="mt-10 text-3xl">Blog - Current Page</h1>
                <div class="p-8 flex flex-col gap-4 sm:flex-col md:flex-row">
                    {/* <!--Post Page Details Image --> */}
                    <div class="drop-shadow-md max-w-fit">
                        {/* <img class="rounded-lg h-auto" src="https://images.unsplash.com/photo-1608111283055-2c8b619664ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Money on a wooden plate" /> */}
                    </div>

                    {/* <!-- Post Details --> */}
                    <div class="p-4 h-auto rounded w-auto md:max-w-fit">
                        <div>
                            <h1 class="text-3xl font-bold text-gray-900">Money Matters</h1>

                            <p class="text-slate-500 text-sm font-medium dark:text-slate-400"><time class="pr-2" datetime="2022-05-16 19:00">March 7, 2022</time></p>
                        </div>
                        <div class="w-fit bg-white flex flex-col md:flex-row items-center gap-4 mt-8 mr-8 p-4 border-2 border-solid border-gray-200 rounded-lg h-auto">
                            {/* <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Photo of Jayne Dough" class="w-20 h-20 rounded-full" /> */}
                            <div class="flex flex-col w-1/2">
                                <h3 class="text-slate-900 font-bold">Jayne Dough</h3>
                                <p class="text-slate-500 text-sm font-medium dark:text-slate-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem.</p>
                            </div>
                            <div class="flex flex-col text-center w-1/2">
                                <p class="text-slate-500 text-sm font-medium dark:text-slate-400">15 Articles</p>
                                <p class="py-4 text-slate-500 text-sm font-medium dark:text-slate-400"><em>10 Topics</em></p>
                                <a href="profile.html" class="px-4 py-5 text-sm text-green-600 font-semibold rounded-lg border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">View Profile</a>
                            </div>
                        </div>
                    </div>


                </div>
                <p class="topPosts">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla hic odit optio sint, deserunt aspernatur officia? Aut, sint accusamus cupiditate aspernatur maxime architecto maiores dolor beatae, ratione explicabo dolorem necessitatibus.
                    Vero provident at odit quaerat tempore eum, cumque laborum sapiente reiciendis suscipit, delectus alias explicabo quod exercitationem totam, fugit molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim expedita velit beatae, quod aperiam dolorum itaque aspernatur delectus ad qui excepturi facere distinctio architecto dignissimos obcaecati ratione blanditiis quo.</p>

                <p class="topPosts">Amet vel perspiciatis, at itaque autem odio quod ut distinctio ipsam ducimus atque consectetur eligendi unde, fugit asperiores voluptates nulla consequuntur, voluptate placeat ipsum consequatur! Vel placeat similique nobis culpa!
                    Hic, veniam ex officiis beatae laborum suscipit placeat qui adipisci ratione, quae veritatis maxime cupiditate sunt rerum! Itaque amet pariatur quod, voluptatem atque eos praesentium doloremque, soluta vitae sunt expedita?
                    Unde dicta assumenda ducimus facere et incidunt, laboriosam iusto magni. Vero provident at odit quaerat tempore eum, cumque laborum sapiente reiciendis suscipit, delectus alias explicabo quod exercitationem totam, fugit molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo enim expedita velit beatae, quod aperiam dolorum itaque aspernatur delectus ad qui excepturi facere distinctio architecto dignissimos obcaecati ratione blanditiis quo.</p>
            </section>
            {/* <!-- end Top Post section  --> */}
        </div>
    )
}

export default Details