import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="px-5 py-8 md:px-6 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b border-b-white/20 pb-4 pt-4 text-white/80">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-white/20 border-dashed mb-4 pb-4">
                <p className="">
                  <span className="font-semibold text-[#6d8c54]">{comment.name}</span></p>
                  {' '}
                
                  {' '}
                 <div className="text-gray-400"> {moment(comment.createdAt).format('MMM DD, YYYY')}</div>
                
                <p className="whitespace-pre-line text-white/80 pt-4 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;
