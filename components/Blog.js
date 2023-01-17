import Link from 'next/link';
import Image from 'next/image';

const myBlog = [
    {
        tag: 'Critical Thinking',
        title: 'Learning to Experience the Problem',
        description: 'Practicing Problem-Solving with the intent to experience the problem so that you can learn something new. If we don’t experience the problem while we are trying to solve it, we may forfeit our opportunity to learn from the experience. ',
        imgSrc: '/images/women-27.jpg',
        imgAlt: 'Photo of Samantha Taylor',
        initials: 'ST',
        name: 'Samantha Taylor',
        blogDate: 'March 16, 2022',
        postA11y: '2022-03-16 19:00',
        readTime: '6 min',
        readTimeA11y: '6 minute read',
        buttonName: 'Read Post',
        btnLink: '/posts/BlogPost',
        bgColor: 'w-fit text-center lg:block flex-none text-blue-600 text-xs tracking-wide font-semibold px-2 py-1 mb-2 rounded-md bg-blue-100',
    },
    {
        tag: 'WebDev',
        title: 'My Flight From Vanilla to MERN',
        description: 'The challenge was to build a Flight Widget that would show arrivals and departures much like what you would see as you pass through the airport terminals. Two hours, 3 Builds. From Vanilla to MERN.',
        imgSrc: '/images/men-83.jpg',
        imgAlt: 'Photo of Fred Jensen',
        initials: 'FJ',
        name: 'Fred Jensen',
        blogDate: 'Jan 16, 2023',
        postA11y: '2023-01-16 19:00',
        readTime: '11 min',
        readTimeA11y: '11 minute read',
        buttonName: 'Read Post',
        btnLink: '/posts/BlogPost2',
        bgColor: 'w-fit text-center lg:block flex-none text-blue-600 text-xs tracking-wide font-semibold px-2 py-1 mb-2 rounded-md bg-green-100',
    },
    {
        tag: 'Security',
        title: 'The CIA Triad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi, et in ea dolorum laudantium sit ducimus ipsa consequuntur similique eius fugit dignissimos tempore vel explicabo. Sit deserunt quis cupiditate!',
        imgSrc: '/images/men-46.jpg',
        imgAlt: 'Photo of Pat Jenkins',
        initials: 'PJ',
        name: 'Pat Jenkins',
        blogDate: 'March 3, 2022',
        postA11y: '2022-03-03 19:00',
        readTime: '8 min',
        readTimeA11y: '8 minute read',
        buttonName: 'Read Post',
        btnLink: '/posts/BlogPost3',
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
                                <h2 className="text-lg font-semibold tracking-tight dark:text-black"><Link href={post.btnLink} className="hover:text-violet-800">{post.title}</Link></h2>
                            </div>
                            <p className="topPosts hidden sm:block md:block lg:block dark:text-black">{post.description}</p>

                            <div className="flex items-center gap-4 p-4">
                                <Image src={`${post.imgSrc}`} alt={post.imgAlt} width={50} height={50} className="w-12 h-12 rounded-full" />
                                {/* <div className="flex w-8 h-8 p-2 rounded-full bg-blue-500 items-center">{post.initials}</div> */}
                                <div className="flex flex-col">
                                    <h3 className="text-slate-900 font-bold">{post.name}</h3>
                                    <p className="text-slate-500 text-sm font-medium dark:text-slate-400"><time className="pr-2">{post.blogDate}</time><span className="sr-only">{post.readTimeA11y}</span>{post.readTime}</p>
                                </div>
                            </div>
                            <button className="px-4 py-1 text-sm hover:text-slate-600 font-semibold rounded-full border border-slate-200 text-white bg-slate-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2">
                                <Link href={post.btnLink}>{post.buttonName}</Link>
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