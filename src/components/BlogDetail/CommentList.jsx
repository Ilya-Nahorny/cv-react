import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div className=" bg-white py-8 px-6 rounded-lg dark:bg-darkBgMain">
      <h3 className="text-xl font-semibold mb-4 dark:text-darkTextMain">
        Comments
      </h3>
      {comments.length === 0 ? (
        <p className="text-gray-500 dark:text-darkTextMain">
          No comments yet. 
        </p>
      ) : (
        <ul className="space-y-6">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="border-t pt-4 first:border-t-0 dark:border-darkBorder"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      {comment.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <p className="text-sm font-semibold dark:text-darkTextMain">
                      {comment.name}
                    </p>

                    <p className="text-xs text-gray-500 ml-2 dark:text-darkTextChild">
                      {comment.date}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm dark:text-darkTextChild">
                    {comment.comment}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
