import React, { useState } from "react";

type ProjectFormData = {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
};

const ProjectForm = () => {
  const [formData, setformData] = useState<ProjectFormData>({
    title: "",
    description: "",
    github: "",
    demo: "",
    image: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setformData((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("github", formData.github);
    formDataToSend.append("demo", formData.demo);
    formDataToSend.append("image", formData.image);
    const uri = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";
    await fetch(`${uri}/projects`, {
      method: "POST",
      body: formDataToSend,
    });
  };


  const formControl =
    "w-full bg-sky-500/20 text-sky-200 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:ring-offset-2 focus:ring-offset-sky-500/20 transition-colors duration-300";
  return (
    <form onSubmit={handleSubmit} className="w-4/5 flex flex-col gap-2">
      <label className="form-label" htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          name="title"
          className={formControl}
          value={formData.title}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="form-label" htmlFor="description">
        Description
        <textarea
          id="description"
          name="description"
          rows={4}
          className={formControl}
          value={formData.description}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="form-label" htmlFor="github">
        GitHub
        <input
          type="text"
          id="github"
          name="github"
          className={formControl}
          value={formData.github}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="form-label" htmlFor="demo">
        Demo
        <input
          type="text"
          id="demo"
          name="demo"
          className={formControl}
          value={formData.demo}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <label className="form-label" htmlFor="image">
        Image
        <input
          type="file"
          id="image"
          name="image"
          className={`${formControl} cursor-pointer`}
          value={formData.image}
          onChange={(e) => handleChange(e)}
        />
      </label>

      <button
        type="submit"
        className="bg-lime-500/20 text-lime-200 rounded-lg px-3 py-2 mt-4 hover:bg-lime-500/30 transition-colors duration-300"
      >
        Guardar
      </button>
    </form>
  );
};

export default ProjectForm;
