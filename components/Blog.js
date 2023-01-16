import React from 'react';
import Image from 'next/image';

const myBlog = [
    {
        tag: 'Operations',
        title: 'Data Driven Product Maps',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum, autem cum molestiae nulla atque, ad facere laboriosam illum labore, fuga in? Corrupti eos veniam dolorum aspernatur labore earum vero.',
        imgSrc: 'https://randomuser.me/api/portraits/women/27.jpg',
        imgAlt: 'Photo of Samantha Taylor',
        name: 'Samantha Taylor',
        blogDate: 'March 16, 2022',
        postA11y: '2022-03-16 19:00',
        readTime: '6 min',
        readTimeA11y: '6 minute read',
        buttonName: 'Read',
        bgColor: 'w-fit text-center lg:block flex-none text-blue-600 text-xs tracking-wide font-semibold px-2 py-1 mb-2 rounded-md bg-blue-100',
    },
    {
        tag: 'DevOps',
        title: 'Define Changlog Syntax',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas praesentium quos voluptates assumenda corrupti adipisci suscipit nulla, est porro odio! Quibusdam quas, corrupti quisquam blanditiis necessitatibus nostrum tenetur dolor.',
        imgSrc: 'https://randomuser.me/api/portraits/men/83.jpg',
        imgAlt: 'Photo of Fred Jensen',
        name: 'Fred Jensen',
        blogDate: 'March 20, 2022',
        postA11y: '2022-03-20 19:00',
        readTime: '11 min',
        readTimeA11y: '11 minute read',
        buttonName: 'Read',
        bgColor: 'w-fit text-center lg:block flex-none text-blue-600 text-xs tracking-wide font-semibold px-2 py-1 mb-2 rounded-md bg-green-100',
    },
    {
        tag: 'Tech',
        title: 'The CIA Triad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi, et in ea dolorum laudantium sit ducimus ipsa consequuntur similique eius fugit dignissimos tempore vel explicabo. Sit deserunt quis cupiditate!',
        imgSrc: 'https://randomuser.me/api/portraits/men/46.jpg',
        imgAlt: 'Photo of Pat Jenkins',
        name: 'Pat Jenkins',
        blogDate: 'March 3, 2022',
        postA11y: '2022-03-03 19:00',
        readTime: '8 min',
        readTimeA11y: '8 minute read',
        buttonName: 'Read',
        bgColor: 'w-fit text-center lg:block flex-none text-blue-600 text-xs tracking-wide font-semibold px-2 py-1 mb-2 rounded-md bg-red-100',
    },
]

function Blog() {
    return (
        <div>
            <section className="min-w-fit">
                {/* <!-- Top Posts  --> */}
                <h1 className="mx-10 mt-5 text-xl tracking-wide uppercase">Category: Memory Lane</h1>
                <div className='p-8 flex flex-col lg:flex-row gap-4'>

                    {/* <!-- Top Post 1 --> */}
                    {myBlog.map((post) => (
                        <div key={post.name} className="bg-white drop-shadow-md p-4 h-auto rounded flex-initial md:w-full lg:w-3/4">
                            <div>
                                <button className={post.bgColor}>{post.tag}</button>
                                <h2 className="text-lg text-black font-semibold tracking-tight"><a href="posts.html" className="hover:text-green-800">{post.title}</a></h2>
                            </div>
                            <p className="topPosts hidden sm:block md:block lg:block">{post.description}</p>

                            <div className="flex items-center gap-4 p-4">
                                <Image src={post.imgSrc} alt={post.imgAlt} className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <h3 className="text-slate-900 font-bold">{post.name}</h3>
                                    <p className="text-slate-500 text-sm font-medium dark:text-slate-400"><time className="pr-2">{post.blogDate}</time><span className="sr-only">{post.readTimeA11y}</span>{post.readTime}</p>
                                </div>
                            </div>
                            <button className="px-4 py-1 text-sm hover:text-slate-600 font-semibold rounded-full border border-slate-200 text-white bg-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2">
                                <a href="posts.html">{post.buttonName}</a>
                            </button>
                        </div>
                    ))}
                </div>
                {/* end Top Post section */}
            </section>
        </div>

    )
}

export default Blog