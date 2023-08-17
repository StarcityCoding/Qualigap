import client from './client'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { slug } = req.query;

  try {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
      _id,
      title,
      slug,
      author->{
        _id,
        name
      },
      mainImage {
        asset->{
          url
        },
        hotspot {
          x,
          y,
          width,
          height
        }
      },
      categories[]->{
        _id,
        title
      },
      publishedAt,
      body
    }`;

    const params = { slug };
    const post = await client.fetch(query, params);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
