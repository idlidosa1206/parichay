import React from "react";

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    description: "We are looking for a skilled frontend developer...",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Code Masters",
    location: "San Francisco, CA",
    description: "Join our team as a backend developer and work on...",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "London, UK",
    description: "Exciting opportunity for a creative UI/UX designer...",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Data Insights Ltd.",
    location: "Berlin, Germany",
    description: "Seeking a talented data scientist to analyze...",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Product Innovations Inc.",
    location: "Tokyo, Japan",
    description: "Lead the development of innovative products...",
  },
];

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

const JobPage = () => {
  return (
    <div className="job-page">
      <h1>Jobs</h1>
      <div className="job-cards">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobPage;
