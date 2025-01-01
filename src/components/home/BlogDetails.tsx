"use client"
import { useGetSingleBlog } from "@/hooks/blogs/blog.hook";

const BlogDetails = ({ id }: { id: string }) => {
    const { data, isLoading, error } = useGetSingleBlog(id);

    if (isLoading) return <p>Loading...</p>;
  
    const blog = data?.data; 

    if (!blog) return <p>No blog found</p>;

    return (
            <div className=" bg-slate-800 mx-auto p-6">
                {/* Blog Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">{blog.name}</h1>
                    <p className="text-sm text-gray-500">
                        Created At: {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                </div>
    
                {/* Blog Image */}
                {blog.photo && (
                    <div className="mb-6 max-w-4xl">
                        <img
                            src={blog.photo}
                            alt={blog.name}
                            className="w-full h-auto rounded-md shadow-md"
                        />
                    </div>
                )}
    
                {/* Blog Description */}
             
                <div className="text-gray-300 mb-6">
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>
                {/* Blog Metadata */}
                <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                    <p>
                        <strong>Likes:</strong> {blog.likesCount}
                    </p>
                    <p>
                        <strong>Comments:</strong> {blog.comments.length}
                    </p>
                    <p>
                        <strong>Last Updated:</strong>{" "}
                        {new Date(blog.updatedAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
    );
};

export default BlogDetails;