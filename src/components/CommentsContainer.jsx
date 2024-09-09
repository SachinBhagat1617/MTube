import React from "react";

const commentsData = [
  {
    name: "Sachin Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Ritwik Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Sachin Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [
              {
                name: "Ritwik Bhagat",
                description:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sachin Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Sachin Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Ritwik Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sachin Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Ritwik Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [],
      },
    ],
  },
  {
    name: "Ritwik Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Sachin Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [
          {
            name: "Ritwik Bhagat",
            description:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
            replies: [
              {
                name: "Sachin Bhagat",
                description:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                replies: [
                  {
                    name: "Ritwik Bhagat",
                    description:
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                    replies: [
                      {
                        name: "Sachin Bhagat",
                        description:
                          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sachin Bhagat",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
    replies: [
      {
        name: "Ritwik Bhagat",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora ipsum sed aut totam quam delectus, commodi alias aperiam dolor animi a porro eveniet impedit ad fugit consectetur repudiandae! Beatae.",
        replies: [],
      },
    ],
  },
];
const Comment = ({ data }) => {
  return (
    <>
      <div className="flex w-[900px] bg-slate-200 rounded-lg">
        <img
          className="h-8 w-8"
          src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
          alt="user_img"
        />

        <div className="px-3">
          <div className="text-lg font-semibold">{data.name}</div>
          <div className=" text-sm font-normal">{data.description}</div>
        </div>
      </div>
    </>
  );
};
const CommentList = ({comments}) => {
    return (
      <>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>
              <Comment data={comment} />
                  <div className="pl-4 border border-l-black ">
                <CommentList comments={comment.replies} /> {/*recursion for nested Comments */}
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
const CommentsContainer = ({ className }) => {
  return (
    <div className={`${className} bg-gray-50 p-4`}>
      {/* Comments content */}
      <div className="text-2xl font-bold">
        Comments:
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
