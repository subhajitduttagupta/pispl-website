import { Metadata } from "next";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import { client, urlFor } from "@/app/lib/sanity";
import { fullBlog } from "@/app/lib/interface";
import { notFound } from "next/navigation";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
};

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    content,
    "currentSlug": slug.current,
    titleImage,
  }`;
  const data = await client.fetch(query, { slug });
  return data;
}

const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const { slug } = params;
  const post: fullBlog | null = await getData(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://pisplindustry.com//blog/${slug}`;

  return (
    <section className="mx-auto max-w-c-1390 md:px-8 2xl:px-0 pt-25 lg:pt-25 md:mb-20 xl:pt-30">
      <div className="bg-white p-7.5 shadow-solid-13 dark:bg-neutral-800 lg:mx-50">
        <div className="mb-10 w-full overflow-hidden">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            {post.titleImage ? (
              <Image
                src={urlFor(post.titleImage).url()}
                alt={post.title || 'Blog Image'}
                fill
                className="rounded-md object-cover object-center"
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gray-200 dark:bg-gray-700 rounded-md">
                <p className="text-black dark:text-white">Image not available</p>
              </div>
            )}
          </div>
        </div>
        <h2 className="mb-5 md:mt-11 md:text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
          {post.title}
        </h2>
        <div className="blog-details dark:text-white">
          {post.content && post.content.length > 0 ? (
            post.content.map((block, idx) => {
              if (block._type === 'image') {
                return (
                  <div key={idx} className="mb-5">
                    <Image
                      src={urlFor(block.asset).url()}
                      alt={block.alt || 'Blog Image'}
                      width={600}
                      height={400}
                      className="rounded-md object-cover"
                    />
                  </div>
                );
              }
              if (block._type === 'block' && block.children) {
                return (
                  <p key={idx} className="text-black dark:text-white">
                    {block.children.map((child, childIdx) => (
                      <span key={childIdx}>{child.text}</span>
                    ))}
                  </p>
                );
              }
              return null;
            })
          ) : (
            <p className="text-black dark:text-white">Content not available</p>
          )}
        </div>
        
        <SharePost postUrl={postUrl} />
      </div>
    </section>
  );
};

export default BlogDetails;

