// ServerComponent.js
import { getPost } from "@/lib/actions";
import { setPost } from "@/lib/actions";

export default async function ServerComponent({ slug }) {

    const data = await getPost({ slug });
    return data;
}
