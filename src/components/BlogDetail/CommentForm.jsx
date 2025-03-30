// React and external libraries
import React from "react";
import { useForm } from "react-hook-form";
import { RiMailSendLine } from "react-icons/ri";

// Components
import Input from "../FormComponents/Input";
import Textarea from "../FormComponents/Textarea";
import ContactButton from "../FormComponents/ContactButton";
 
const CommentForm = ({ onCommentSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newComment = {
      ...data,
      date: new Date().toISOString().split("T")[0],
    };
    onCommentSubmit(newComment);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-lg dark:bg-darkBgMain">
      <h3 className="text-2xl font-semibold mb-4 dark:text-darkTextMain">
        Yorum Yap
      </h3>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          placeholder="Enter your name"
          name="name"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          name="email"
          register={register("email", { required: "Email is required" })}
          error={errors.email}
          type="email"
        />
        <Textarea
          label="Comment"
          placeholder="Enter your comment"
          name="comment"
          register={register("comment", { required: "Comment is required" })}
          error={errors.comment}
        />
        <ContactButton type="submit">
          <RiMailSendLine /> <span className="text-sm">Send</span>
        </ContactButton>
      </form>
    </div>
  );
};

export default CommentForm;
