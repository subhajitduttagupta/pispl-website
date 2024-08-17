import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "@/app/lib/sanity"; // Correct import path
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/Common/SectionHeader";
import { simpleBlogCard } from "@/app/lib/interface";


export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is Blog page of PISPL",
  // other metadata
};


async function getData() {
  const query = `*[_type == "blog"]| order(_createdAt desc) [0...9] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

const BlogPage = async () => {
  const data: simpleBlogCard[] = await getData();
  return (

    <section className="py-25 lg:py-25 xl:py-30">


      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>


      {/* <!-- ===== Blog Grid Start ===== --> */}

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
      <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
      {data.map((post, idx) => {
        const imageUrl = urlFor(post.titleImage).url();
        // console.log('Image URL:', imageUrl); // Log the image URL
        return (

          <Link key={idx} href={`/blog/${post.currentSlug}`}>

          <Card key={idx}>
            <Image
              src={imageUrl}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent className="mt-5">
              <h3 className="mb-1 mt-1 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-500">
                {post.smallDescription}
              </p>
            </CardContent>
          </Card>

          </Link>
        );
      })}
      </div>
    </div>
      {/* <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section> */}
      {/* <!-- ===== Blog Grid End ===== --> */}
    </section>
  );
};

export default BlogPage;
